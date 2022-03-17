using System;
using System.Configuration;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Azure.WebJobs;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Text;
using CoPilot.Models;
using System.Data.Entity;
using Microsoft.Azure.Cosmos.Table;
using CloudStorageAccount = Microsoft.WindowsAzure.Storage.CloudStorageAccount;

namespace ImageETLJob
{
    public class Functions
    {
        // This function will be triggered based on the schedule you have set for this WebJob
        // This function will enqueue a message on an Azure Queue called queue
        [NoAutomaticTrigger]
        //public static void ManualTrigger(TextWriter log, string myContainerName, [Queue("updatethumbs")] out string message)
        public static void ManualTrigger(string name)
        {
            using (var db = new EntitiesContext())
            {
                List<String> sbFiles = new List<String>();
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(ConfigurationManager.ConnectionStrings["AzureWebJobsStorage"].ConnectionString);
                // get the list of containers
                IList<CloudBlobContainer> blobContainers = new List<CloudBlobContainer>(storageAccount.CreateCloudBlobClient().ListContainers(null, ContainerListingDetails.All));
                foreach (var container in blobContainers)
                {
                    string containerName = container.Name;
                    if ((!containerName.Contains("azure")) && (!containerName.Contains("json")))
                    {
                        Console.WriteLine(containerName);
                        // We need to access blobs now, so create a CloudBlobClient
                        CloudBlobContainer blobContainer = storageAccount.CreateCloudBlobClient().GetContainerReference(containerName);
                        var blobs = blobContainer.ListBlobs(null, false, BlobListingDetails.None);
                        foreach (var blob in blobs)
                        {
                            string blobName = ((Microsoft.WindowsAzure.Storage.Blob.CloudBlob)(blob)).Name;
                            if (!blobName.StartsWith("thumb_") && (!blobName.EndsWith("json")))
                            {
                                Partner partner = db.Partners.FirstOrDefault(p => p.ContainerName == containerName);
                                Photo photo = db.Photos.Where(p => p.ContainerName == containerName).FirstOrDefault(p => p.FileName == blobName);
                                if (partner == null)
                                {
                                    Console.WriteLine("{0}, {1} not found.", containerName, blob.Uri);
                                }
                                // spence & simmie 2.23.2013_640x480.jpg
                                var imageStream = new MemoryStream();
                                try
                                {
                                    CloudBlockBlob blob1 = blobContainer.GetBlockBlobReference(blobName);
                                    blob1.DownloadToStream(imageStream);
                                    if (imageStream.Length > 0)
                                    {
                                        System.Drawing.Bitmap bitmap = new System.Drawing.Bitmap(imageStream);
                                        Image thumbImage = bitmap.GetThumbnailImage(96, 72, null, new System.IntPtr());
                                        CloudBlockBlob blockBlob = blobContainer.GetBlockBlobReference("thumb_" + blobName);
                                        var thumbImageStream = new MemoryStream();
                                        thumbImage.Save(thumbImageStream, ImageFormat.Jpeg);
                                        thumbImageStream.Position = 0;
                                        blockBlob.UploadFromStream(thumbImageStream);
                                        string partnerName = partner.Name;
                                        Console.WriteLine("{0}, {1}, {2} found and processed", containerName, blobName, blockBlob.Uri.ToString());
                                        sbFiles.Add(String.Format("{0}|{1}|{2}", partnerName, blob.Uri.ToString(), blockBlob.Uri.ToString()));
                                        if (photo == null)
                                        {
                                            photo = db.Photos.Create();
                                            photo.PartnerId = partner.PartnerId;
                                            photo.Partner = partner;
                                            photo.FileName = blobName;
                                            photo.IsFile = true;
                                            photo.ContainerName = containerName;
                                            photo.X = 0;
                                            photo.Y = 0;
                                            photo.Width = bitmap.Width;
                                            photo.Height = bitmap.Height;
                                            photo.Uri = blob.Uri.ToString();
                                            photo.Url = blockBlob.Uri.ToString();
                                            db.Entry(photo).State = EntityState.Added;
                                            db.SaveChanges();
                                        }
                                        else
                                        {
                                            photo.ContainerName = containerName;
                                            photo.X = 0;
                                            photo.Y = 0;
                                            photo.Width = bitmap.Width;
                                            photo.Height = bitmap.Height;
                                            photo.Uri = blob.Uri.ToString();
                                            photo.Url = blockBlob.Uri.ToString();
                                            db.Entry(photo).State = EntityState.Modified;
                                            db.SaveChanges();
                                        }
                                    }
                                    else
                                    {
                                        Console.WriteLine("Image not found {0}, {1}", containerName, blobName);
                                    }
                                }
                                catch (Exception ex)
                                {
                                    Console.WriteLine("Image not found {0}, {1}, {2}", containerName, blobName, ex.Message);
                                }
                            }
                        }
                    }
                    else
                    {
                        Console.WriteLine("Skipping container: {0}", containerName);
                    }
                }
                // Write the stream contents to a new file named "AllTxtFiles.txt".
                using (StreamWriter outfile = new StreamWriter(@".\Images\allimageslist.json"))
                {
                    StringBuilder sbOut = new StringBuilder();
                    sbOut.Append("[").Append(Environment.NewLine);
                    foreach (var fileName in sbFiles)
                    {
                        String[] tempString = fileName.Split(Convert.ToChar("|"));
                        String folderName = tempString[0];
                        string outfileName = "";
                        sbOut.Append("\t{").Append(Environment.NewLine);
                        outfileName = tempString[1];
                        sbOut.Append("\t\t\"").Append("image").Append("\"").Append(": ").Append("\"").Append(outfileName).Append("\",").Append(Environment.NewLine);
                        outfileName = tempString[2];
                        sbOut.Append("\t\t\"").Append("thumb").Append("\"").Append(": ").Append("\"").Append(outfileName).Append("\",").Append(Environment.NewLine);
                        sbOut.Append("\t\t\"").Append("folder").Append("\"").Append(": ").Append("\"").Append(folderName).Append("\"").Append(Environment.NewLine);
                        sbOut.Append("\t},").Append(Environment.NewLine);
                    }
                    sbOut.Append("],").Append(Environment.NewLine);
                    outfile.Write(sbOut.ToString());
                }
            }
        }

        /// Method to resize, convert and save the image.
        /// <param name="image">Bitmap image.</param>
        /// <param name="maxWidth">resize width.</param>
        /// <param name="maxHeight">resize height.</param>
        /// <param name="quality">quality setting value.</param>
        /// <param name="filePath">file path.</param>      
        public static void ShrinkImage(int maxWidth, int maxHeight, int quality, ref Image oldImage)
        {
            // Get the image's original width and height
            int originalWidth = oldImage.Width;
            int originalHeight = oldImage.Height;

            // To preserve the aspect ratio
            float ratioX = (float)maxWidth / (float)originalWidth;
            float ratioY = (float)maxHeight / (float)originalHeight;
            float ratio = Math.Min(ratioX, ratioY);

            // New width and height based on aspect ratio
            int newWidth = (int)(originalWidth * ratio);
            int newHeight = (int)(originalHeight * ratio);

            // Convert other formats (including CMYK) to RGB.
            Bitmap newImage = new Bitmap(newWidth, newHeight, PixelFormat.Format24bppRgb);

            // Draws the image in the specified size with quality mode set to HighQuality
            using (Graphics graphics = Graphics.FromImage(newImage))
            {
                graphics.CompositingQuality = CompositingQuality.HighQuality;
                graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
                graphics.SmoothingMode = SmoothingMode.HighQuality;
                graphics.DrawImage(oldImage, 0, 0, newWidth, newHeight);
            }

            // Get an ImageCodecInfo object that represents the JPEG codec.
            //ImageCodecInfo imageCodecInfo = this.GetEncoderInfo(ImageFormat.Jpeg);

            // Create an Encoder object for the Quality parameter.
            //Encoder encoder = Encoder.Quality;

            // Create an EncoderParameters object. 
            //EncoderParameters encoderParameters = new EncoderParameters(1);

            // Save the image as a JPEG file with quality level.
            //EncoderParameter encoderParameter = new EncoderParameter(encoder, quality);
            //encoderParameters.Param[0] = encoderParameter;
            //newImage.Save(filePath, imageCodecInfo, encoderParameters);
            oldImage = newImage;
        }

        /// <param name="format">Image format</param>
        /// <returns>image codec info.</returns>
        private ImageCodecInfo GetEncoderInfo(ImageFormat format)
        {
            return ImageCodecInfo.GetImageDecoders().SingleOrDefault(c => c.FormatID == format.Guid);
        }

        private int GetHimawari8Image()
        {
            //
            // Himawari-8 Downloader
            //
            //
            //
            // This script will scrape the latest image from the Himawari-8 satellite, recombining the tiled image,
            // converting it to a JPG which is saved in My Pictures\Himawari\ and then set as the desktop background.
            //
            // http://himawari8.nict.go.jp/himawari8-image.htm
            //
            //


            TimeSpan ts = new TimeSpan(-2, -30, 0); // Number of hours and minutes to add/subtract to the date. Adjust this to offset your system date to around about GMT (I think?)
            DateTime now = DateTime.Now.Add(ts);
            now  = now.AddMinutes(-(now.Minute % 10));

            int width = 550;
            string level = "4d"; // Level can be 4d, 8d, 16d, 20d 
            int numblocks = 4; // this apparently corresponds directly with the level, keep this exactly the same as level without the 'd'
            string time = now.ToString("HHmmss");
            string year = now.ToString("yyyy");
            string month = now.ToString("MM");
            string day = now.ToString("dd");

            // Create the folder My Pictures\Himawari\ if it doesnt exist
            string outpath = Environment.GetFolderPath(Environment.SpecialFolder.MyPictures) + @"\Himawari\";
            if (!Directory.Exists(outpath))
            {
                Directory.CreateDirectory(outpath);
            }

            // The filename that will be saved:
            // Uncomment this to have the files accumulate in the directory:
            // $outfile = "$year$month$day"+"_" + $time + ".jpg" 
            // Use this to have the script just store the latest file only:
            string outfile = "latest.jpg";

            string url = @"http://himawari8-dl.nict.go.jp/himawari8/img/D531106/" + level + "/" + width + "/" + year + "/" + month + "/" + day + "/" + time;

            System.Drawing.Bitmap image = new System.Drawing.Bitmap((width * numblocks), (width * numblocks));
            System.Drawing.Graphics graphics = System.Drawing.Graphics.FromImage(image);
            graphics.Clear(System.Drawing.Color.Black);

            for (int y = 0; y < numblocks; y++)
            {
                for (int x = 0; x < numblocks; x++)
                {
                    string thisurl = url + "_" + x.ToString() + "_" + y.ToString() + ".png";
                    try
                    {
                        System.Net.WebRequest request = System.Net.WebRequest.Create(thisurl);
                        System.Net.WebResponse response = request.GetResponse();
                        int HTTP_Status = 200; // (int)response.StatusCode;
                        if (HTTP_Status == 200)
                        {
                            System.Drawing.Image imgblock = System.Drawing.Image.FromStream(response.GetResponseStream());
                            graphics.DrawImage(imgblock, (x * width), (y * width), width, width);
                            imgblock.Dispose();
                            response.Close();
                        }
                    }
                    catch(Exception ex)
                    {
                        string ErrorMessage = ex.Message;
                    }
                }
            }

            System.Drawing.Imaging.Encoder qualityEncoder = System.Drawing.Imaging.Encoder.Quality;
            System.Drawing.Imaging.EncoderParameters encoderParams = new System.Drawing.Imaging.EncoderParameters(1);

            // Set JPEG quality level here: 0 - 100 (inclusive bounds)
            encoderParams.Param[0] = new System.Drawing.Imaging.EncoderParameter(qualityEncoder, 90);
            System.Drawing.Imaging.ImageCodecInfo jpegCodecInfo = System.Drawing.Imaging.ImageCodecInfo.GetImageEncoders().Where(e => e.FormatID == ImageFormat.Jpeg.Guid).Single();

            image.Save((outpath + outfile), jpegCodecInfo, encoderParams);
            image.Dispose();
            return 1;
        }
    }
}
