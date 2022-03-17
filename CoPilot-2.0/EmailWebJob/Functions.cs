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
using Microsoft.Extensions.Logging;

namespace EmailWebJob
{
    public class Functions
    {
        // This function will be triggered based on the schedule you have set for this WebJob

        public static void ProcessQueueMessage([QueueTrigger("wtmscheduled")] string message, ILogger logger)
        {
            logger.LogInformation(message);
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(ConfigurationManager.ConnectionStrings["AzureWebJobsStorage"].ConnectionString);
            // get the list of containers
            string containerName = "jsondata";
            // We need to access blobs now, so create a CloudBlobClient
            CloudBlobContainer blobContainer = storageAccount.CreateCloudBlobClient().GetContainerReference(containerName);
            var pdfStream = new MemoryStream();
            CloudBlockBlob blob1 = blobContainer.GetBlockBlobReference("Wren Thicket Order Letter 2015-10-03.pdf");
            blob1.DownloadToStream(pdfStream);
            if (pdfStream.Length > 0)
            {
                using (var db = new EntitiesContext())
                {
                    List<EmailList> emailList = db.EmailResults.Where(s => s.FirstName == "Tom").Where(s => s.EmailType == "Test").OrderBy(s => s.Id).ToList();
                    foreach (var email in emailList)
                    {
                        string recipient = email.EmailAddress;
                        string subject = "Wren Thicket Market " + "October 17th, 2015" + " Weekly Newsletter";
                        string body = "Body";
                        string attachment = "";
                        pdfStream.Position = 0;
                        SendEmail(recipient, subject, body, attachment, pdfStream);
                    }
                }
            }
        }

        [NoAutomaticTrigger]
        public static void ManualTrigger(TextWriter log, int value, [Queue("wtmscheduled")] out string message)
        {
            message = "Function is invoked with value={0}" + value.ToString();
            log.WriteLine("Following message will be written on the Queue={0}", message);
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(ConfigurationManager.ConnectionStrings["AzureWebJobsStorage"].ConnectionString);
            // get the list of containers
            string containerName = "jsondata";
            Console.WriteLine(containerName);
            // We need to access blobs now, so create a CloudBlobClient
            CloudBlobContainer blobContainer = storageAccount.CreateCloudBlobClient().GetContainerReference(containerName);
            var pdfStream = new MemoryStream();
            CloudBlockBlob blob1 = blobContainer.GetBlockBlobReference("Wren Thicket Order Letter 2015-10-03.pdf");
            blob1.DownloadToStream(pdfStream);
            if (pdfStream.Length > 0)
            {
                using (var db = new EntitiesContext())
                {
                    List<EmailList> emailList = db.EmailResults.Where(s => s.EmailType == "ZZZ").OrderBy(s => s.Id).ToList();
                    foreach (var email in emailList)
                    {
                        string recipient = email.EmailAddress;
                        string subject = "Wren Thicket Market " + "October 3rd, 2015" + " Weekly Newsletter";
                        string body = "Body";
                        string attachment = "";
                        pdfStream.Position = 0;
                        SendEmail(recipient, subject, body, attachment, pdfStream);
                    }
                }
            }
        }

        public static void SendEmail(string recipient, string subject, string body, string attachmentFilename, MemoryStream ms)
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
                Attachment a = new Attachment(ms, "Wren Thicket Order Letter 2015-10-03.pdf", MediaTypeNames.Application.Pdf);
                m.Attachments.Add(a);
                // Create credentials, specifying your user name and password.
                sc.Credentials = new NetworkCredential(@"Wren Thicket", @"WtM@@2050");
                sc.Host = @"smtp.sendgrid.net";
                sc.Send(m);
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.Message);
            }
        }
    }
}
