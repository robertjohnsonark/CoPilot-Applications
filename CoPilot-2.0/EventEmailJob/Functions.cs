using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using Microsoft.Azure.WebJobs;
using CoPilot.Models;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.WindowsAzure.Storage.Queue;
using CloudStorageAccount = Microsoft.WindowsAzure.Storage.CloudStorageAccount;

namespace EventEmailJob
{
    public class Functions
    {
        // This function will get triggered/executed when a new message is written 
        // on an Azure Queue called queue.
        public static void ProcessQueueMessage([QueueTrigger("wtmmsg")] string message, TextWriter log)
        {
            log.WriteLine($"ProcessQueueMessage: {"EventEmailJob-Starting"},{message}");
            string containerName = "jsondata";
            bool bMessageOnly = true;
            string fileName = "";
            var pdfStream = new MemoryStream();
            using (var db = new EntitiesContext())
            {
                CoPilot.Models.Event appEvent = db.Events.OrderByDescending(e => e.EventId).FirstOrDefault();
                if (appEvent != null)
                {
                    log.WriteLine($"ProcessQueueMessage: {"EventEmailJob-Event: "}{appEvent.EventId}{appEvent.EventName}");
                    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(ConfigurationManager.ConnectionStrings["AzureWebJobsStorage"].ConnectionString);
                    // We need to access the blobs now, so create a CloudBlobClient
                    CloudBlobContainer blobContainer = storageAccount.CreateCloudBlobClient().GetContainerReference(containerName);
                    if (fileName != "")
                    {
                        CloudBlockBlob blob1 = blobContainer.GetBlockBlobReference(fileName);
                        log.WriteLine($"ProcessQueueMessage: {"EventEmailJob-Retrieving Blob"},{fileName}");
                        blob1.DownloadToStream(pdfStream);
                        bMessageOnly = false;
                    }
                    if ((pdfStream.Length > 0) || (bMessageOnly))
                    {
                        log.WriteLine($"ProcessQueueMessage: {"EventEmailJob-Stream Read from Storage: "}{pdfStream.Length}");
                        List<UserProfile> users = db.UserProfiles.Where(s => s.Status == UserStatus.Active).OrderBy(s => s.LastName).ThenBy(s => s.FirstName).Distinct().ToList();
                        log.WriteLine($"ProcessQueueMessage: {"EventEmailJob-EmailList Count: "}{users.Count}");
                        foreach (var user in users)
                        {
                            string recipient = user.EmailAddress;
                            string subject = appEvent.EventName;
                            string body = appEvent.EventHtml;
                            string attachment = fileName;
                            pdfStream.Position = 0;
                            if (bMessageOnly) attachment = "";
                            EmailList email = db.EmailResults.FirstOrDefault(e => e.EmailAddress == user.EmailAddress);
                            if (email == null)
                            {
                                SendEmail(recipient, subject, body, attachment, pdfStream, log);
                                email = new EmailList();
                                email.LastName = user.LastName;
                                email.FirstName = user.FirstName;
                                email.EmailAddress = user.EmailAddress;
                                email.EmailType = "Customers";
                                email.EmailStatus = "Sent";
                                email.EmailTimeStamp = DateTime.Now;
                                email.EventId = appEvent.EventId;
                                email.MessageId = 0;
                                db.EmailResults.Add(email);
                                db.SaveChanges();
                            }
                            else if (email.EmailStatus != "Sent")
                            {
                                SendEmail(recipient, subject, body, attachment, pdfStream, log);
                                email.EmailStatus = "Sent";
                                email.EmailTimeStamp = DateTime.Now;
                                email.EventId = appEvent.EventId;
                                email.MessageId = 0;
                                db.SaveChanges();
                            }
                            log.WriteLine($"ProcessQueueMessage: {"EventEmailJob-EmailList Sent: "}{recipient}");
                        }
                    }
                }
                else
                {
                    log.WriteLine($"ProcessQueueMessage: EventEmailJob-Event-Find failed");
                }
            }
        }

        public static void SendEmail(string recipient, string subject, string body, string attachmentFilename, MemoryStream ms, TextWriter log)
        {
            MailMessage m = new MailMessage();
            SmtpClient sc;
            sc = new SmtpClient(@"smtp.sendgrid.com", Convert.ToInt32(2525));
            try
            {
                m.From = new MailAddress(@"manager@wrenthicketmarket.com", @"Wren Thicket Market");
                m.To.Add(new MailAddress(recipient, recipient));
                m.Subject = subject; // make date code
                m.IsBodyHtml = true;
                m.Body = body;
                m.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(body, null, MediaTypeNames.Text.Html));
                if (attachmentFilename != "")
                {
                    Attachment a = new Attachment(ms, attachmentFilename, MediaTypeNames.Application.Pdf);
                    m.Attachments.Add(a);
                }
                // Create credentials, specifying your user name and password.
                sc.Credentials = new NetworkCredential(@"Wren Thicket", @"WtM@@2050");
                sc.Host = @"smtp.sendgrid.net";
                sc.Send(m);
            }
            catch (Exception ex)
            {
                log.WriteLine(ex.Message);
            }
        }
    }
}
