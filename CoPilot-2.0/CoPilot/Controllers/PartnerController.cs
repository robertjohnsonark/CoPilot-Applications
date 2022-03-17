using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using CoPilot.Models;
using CoPilot.ViewModels;
using Microsoft.Azure.Cosmos.Table;
using Azure.Storage.Blobs;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Threading.Tasks;
using Azure.Storage.Blobs.Models;
using Azure;

namespace CoPilot.Controllers
{
    [Authorize(Roles = "Administrator")]
    public class PartnerController : BaseController
    {
        //
        // GET: /Partner/

        public ActionResult Index(string message)
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                if (message != null) ViewBag.StatusMessage = message;
                IQueryable<Partner> partners = db.Partners.OrderBy(e => e.Name);
                if (!settings.ShowHidden)
                {
                    partners = partners.Where(e => e.Status != PartnerStatus.Discontinued);
                }
                return View(partners.ToList());
            }
        }



        //
        // GET: /Partner/Create

        public ActionResult Create()
        {
            return View(new Partner());
        }

        //
        // POST: /Partner/Create

        [HttpPost]
        public ActionResult Create(Partner partner)
        {
            using (var db = new EntitiesContext())
            {
                if (ModelState.IsValid)
                {
                    // Regex regEx = new Regex("^[a-z0-9](?:[a-z0-9]|(\\-(?!\\-))){1,61}[a-z0-9]$|^\\$root$");
                    // var isContainerNameValid = regEx.IsMatch(containerName); 
                    string containerName = Regex.Replace(partner.Name.ToLower(), @"[^0-9a-zA-Z\._]", string.Empty);
                    if (this.AddContainerAsync(containerName, partner.PartnerId) == true)
                    {
                        partner.ContainerName = containerName;
                        db.Partners.Add(partner);
                        db.SaveChanges();
                    }
                    return RedirectToAction("Index");
                }
                return View(partner);
            }
        }

        //
        // GET: /Partner/Details/5

        public ActionResult Details(int partnerId = 0)
        {
            using (var db = new EntitiesContext())
            {
                Partner partner = db.Partners.Find(partnerId);
                if (partner == null)
                {
                    return HttpNotFound();
                }
                string containerName = partner.ContainerName;
                string contentList = partner.ContentList;
                string blobSrcUri = this.CheckContainer(containerName, partner.PartnerId);
                List<int> idList = this.GetContentListIds(contentList);
                // get photo records in our selected photo list, in sorted display order
                IQueryable<Photo> photos =
                    (from p in db.Photos
                        where idList.Contains(p.Id) && p.PartnerPhoto == true
                        orderby p.DisplayOrder ascending
                        select p);
                List<DisplayPhotoModel> photoList = this.GetDisplayPhotoList(photos, blobSrcUri, containerName, true);
                var model = new PartnerPhotosViewModel
                {
                    Partner = partner,
                    Photos = photoList
                };
                return View(model);
            }
        }

        //
        // GET: /Photos/Edit/5

        public ActionResult Edit(int partnerId)
        {
            using (var db = new EntitiesContext())
            {
                ViewBag.PartnerId =
                    new SelectList(db.Partners, "PartnerId", "Name", partnerId).OrderBy(p => p.Text).ToList();
                Partner partner = db.Partners.Find(partnerId);
                if (partner == null)
                {
                    return HttpNotFound();
                }
                string containerName = partner.ContainerName;
                string contentList = partner.ContentList;
                string blobSrcUri = this.CheckContainer(containerName, partner.PartnerId);
                List<int> idList = this.GetContentListIds(contentList);
                // get all photo records for this partner, in sorted display order
                // set in our selected photo list
                IQueryable<Photo> photos = db.Photos.Where(p => p.PartnerId == partnerId)
                    .OrderBy(p => p.DisplayOrder);
                List<DisplayPhotoModel> photoList = new List<DisplayPhotoModel>();
                foreach (var p in photos)
                {
                    DisplayPhotoModel sp = new DisplayPhotoModel
                    {
                        Id = p.Id,
                        PartnerId = p.PartnerId,
                        DisplayOrder = p.DisplayOrder,
                        PartnerPhoto = p.PartnerPhoto,
                        ContainerName = partner.ContainerName,
                        FileName = p.FileName,
                        FileTimeStamp = p.FileTimeStamp,
                        LongDescription = p.LongDescription,
                        ShortDescription = p.ShortDescription,
                        Uri = blobSrcUri + containerName + "/" + p.FileName
                    };
                    photoList.Add(sp);
                }
                var model = new PartnerPhotosViewModel
                {
                    Partner = partner,
                    Photos = photoList
                };
                return View(model);
            }
        }

        //
        // POST: /Partner/SaveForm/model

        [HttpPost]
        public ActionResult SaveForm(Partner model)
        {
            using (var db = new EntitiesContext())
            {
                string message = string.Format("partner data updated '{0}'", DateTime.Now);
                var p = db.Partners.Find(Convert.ToInt32(model.PartnerId));
                if (p != null)
                {
                    p.Name = model.Name;
                    p.Owners = model.Owners;
                    p.Location = model.Location;
                    p.Email = model.Email;
                    p.LongDescription = model.LongDescription;
                    p.ShortDescription = model.ShortDescription;
                    p.ContainerName = model.ContainerName;
                    p.PartnerType = model.PartnerType;
                    p.Status = model.Status;
                    db.Entry(p).State = EntityState.Modified;
                    db.SaveChanges();
                }
                return Json(new {message});
            }
        }

        //
        // POST: /Partner/SaveSettings/model

        [HttpPost]
        public ActionResult SaveSettings(List<PartnerPhotoModel> model, int partnerId = 0)
        {
            using (var db = new EntitiesContext())
            {
                string message = string.Format("Attempting to update product photo info.");
                int order = 1;
                Partner partner = null;
                StringBuilder contentList = new StringBuilder();
                contentList.Append("ContentList: ");
                if (partnerId > 0)
                {
                    partner = db.Partners.Find(Convert.ToInt32(partnerId));
                }
                foreach (var photo in model)
                {
                    var p = db.Photos.Find(Convert.ToInt32(photo.PhotoId));
                    if (p != null)
                    {
                        p.PartnerPhoto = Convert.ToBoolean(photo.PartnerPhoto);
                        p.DisplayOrder = order;
                        db.Entry(p).State = EntityState.Modified;
                        db.SaveChanges();
                        Debug.WriteLine(string.Format("DisplayPhoto: {0}, {1}, {2}, {3}", order, photo.PartnerPhoto,
                            photo.PhotoId, p.Id));
                        contentList.Append(string.Format("{0},{1};", photo.PhotoId, order));
                        order++;
                    }
                }
                if (partner != null)
                {
                    message = string.Format("{0}  photo info updated {1}.", partner.Name, DateTime.Now);
                    partner.ContentList = contentList.ToString();
                    db.SaveChanges();
                }
                return Json(new {message});
            }
        }

        //
        // GET: /Partner/EditPhoto

        public ActionResult EditPhoto(int photoId, int partnerId)
        {
            using (var db = new EntitiesContext())
            {
                Photo photo = db.Photos.Find(photoId);
                if (photo == null)
                {
                    if (partnerId > 0)
                    {
                        photo = db.Photos.Create();
                    }
                    else return HttpNotFound();
                }
                ViewBag.PartnerId = partnerId;
                ViewBag.PhotoId = photo.Id;
                return View("EditPhoto", photo);
            }
        }

        //
        // POST: /Partner/DeletePhoto/5

        [HttpPost, ActionName("DeletePhoto")]
        public async Task<ActionResult> DeletePhotoAsync(int photoId)
        {
            using (var db = new EntitiesContext())
            {
                // get photo record
                Photo photo = db.Photos.Find(photoId);
                // get partner container
                Partner partner = db.Partners.Find(photo.PartnerId);
                // delete photo and thumb
                //Parse a connection string and return a reference to the storage account.
                BlobServiceClient blobServiceClient = new BlobServiceClient(Microsoft.Azure.CloudConfigurationManager.GetSetting("CloudStorageConnectionString"));
                // Retrieve reference to a previously created container.
                string containerName = partner.ContainerName;
                string fileName = photo.FileName;
                // Retrieve storage account from connection string.
                // Retrieve reference to a previously created container.
                BlobContainerClient container = blobServiceClient.GetBlobContainerClient(containerName);
                await container.CreateIfNotExistsAsync();
                // Retrieve reference to a blob named "myblob.txt".
                BlobClient blob = container.GetBlobClient("thumb_" + fileName);

                try
                {
                    // Delete the blob.
                    blob.Delete();
                }
                catch (Exception)
                {
                    Debug.WriteLine($"Delete blob thumb{fileName} failed");
                }
                // Retrieve reference to a blob named "myblob.txt".
                blob = container.GetBlobClient(fileName);
                try
                {
                    // Delete the blob.
                    blob.Delete();
                }
                catch (Exception)
                {
                    Debug.WriteLine($"Delete blob thumb{fileName} failed");
                }

                db.Photos.Remove(photo);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }

        //
        // POST: /Partner/EditPhoto/

        [HttpPost]
        public async Task<ActionResult> EditPhotoAsync(Photo photo, int photoId, int partnerId) // convert to ViewModel
        {
            using (var db = new EntitiesContext())
            {
                // Check if all simple data annotations are valid
                if (ModelState.IsValid)
                {
                    //Prepare the needed variables
                    var errorField = string.Empty;

                    if (photo != null)
                    {
                        Bitmap image = null;
                        Bitmap resized = null;
                        const int maxHeight = 480;
                        const int maxWidth = 640;
                        string name = "newimagefile";
                        int length = 0;
                        bool bResize = false;

                        var partner = db.Partners.Find(partnerId);
                        if (partner != null)
                        {
                            photo.PartnerId = partner.PartnerId;
                            photo.ContainerName = partner.ContainerName;
                        }

                        if (photo.IsUrl)
                        {
                            errorField = "Url";
                            name = GetUrlFileName(photo.Url);
                            image = GetImageFromUrl(photo.Url);
                        }

                        if (photo.IsFlickr)
                        {
                            errorField = "Flickr";
                            name = GetUrlFileName(photo.Flickr);
                            image = GetImageFromUrl(photo.Flickr);
                        }

                        if ((photoId == 0) && (photo.File != null))
                        {
                            errorField = "Error in file processing";
                            if (photo.File.FileName != null)
                            {
                                var dstFileName = Path.GetFileNameWithoutExtension(photo.File.FileName).ToLower();
                                dstFileName = dstFileName.Replace(".jpeg", "_640x480.jpg");
                                dstFileName = dstFileName.Replace(".jpg", "_640x480.jpg");
                                dstFileName = dstFileName.Replace(".png", "_640x480.jpg");
                                dstFileName = dstFileName.Replace(".bmp", "_640x480.jpg");
                                name = dstFileName;
                            }
                            image = Image.FromStream(photo.File.InputStream) as Bitmap;
                            // resize to max for web
                            // if the image is smaller than our window, don't resize
                            if (image != null)
                            {
                                if ((image.Width <= maxWidth) && (image.Height <= maxHeight)) bResize = false;
                                else bResize = true;
                                if (bResize == true)
                                {
                                    resized = FixedSize(image, maxWidth, maxHeight);
                                }
                            }
                            byte[] file = ImageToByte2(bResize ? resized : image);
                            length = (int) file.Length;
                            photo.FileBytes = file;
                            photo.X = 0;
                            photo.Y = 0;
                            photo.DisplayOrder = 0;
                            photo.Width = maxWidth;
                            photo.Height = maxHeight;
                            photo.IsFile = true;
                            photo.FileName = name + ".jpg";
                            photo.PartnerPhoto = false;
                            photo.ShortDescription = photo.ShortDescription;
                            photo.LongDescription = photo.LongDescription;
                            db.Photos.Add(photo);

                            BlobServiceClient blobServiceClient = new BlobServiceClient(
                                    ConfigurationManager.AppSettings["CloudStorageConnectionString"]);

                            // Retrieve a reference to a container. 
                            BlobContainerClient container = blobServiceClient.GetBlobContainerClient(partner.ContainerName);
                            await container.CreateIfNotExistsAsync();
                            BlobClient blob = container.GetBlobClient(photo.FileName);
                            // blockBlob.Properties.ContentType = "video/mp4";
                            var blobHttpHeader = new BlobHttpHeaders();
                            string extension = Path.GetExtension(blob.Uri.AbsoluteUri);
                            switch (extension.ToLower())
                            {
                                case ".jpg":
                                case ".jpeg":
                                    blobHttpHeader.ContentType = "image/jpeg";
                                    break;
                                case ".png":
                                    blobHttpHeader.ContentType = "image/png";
                                    break;
                                case ".gif":
                                    blobHttpHeader.ContentType = "image/gif";
                                    break;
                                case ".csv":
                                    blobHttpHeader.ContentType = "text/csv";
                                    break;
                                default:
                                    break;
                            }

                            using (var fileStream = new MemoryStream(photo.FileBytes))
                            {
                                var uploadedBlob = await blob.UploadAsync(fileStream, blobHttpHeader);
                            }

                            photo.PartnerId = partner.PartnerId;
                            photo.Uri = blob.Uri.ToString();
                        }
                        else
                        {
                            photo.PartnerId = partner.PartnerId;
                            db.Entry(photo).State = EntityState.Modified;
                        }
                        // save after create or edit and redirect back to Edit with current partner
                        db.SaveChanges();
                        return RedirectToAction("Edit", new {partnerId = partner.PartnerId});
                    }
                    else //Otherwise we add an error and return to the (previous) view with the photo data
                        ModelState.AddModelError(errorField,
                            "Your upload did not seem valid. Please try again using only correct images!");
                }
                return View(photo);
            }
        }

        //
        // AJAX: /Partner/GetPartner/8

        [HttpPost]
        public ActionResult GetPartner(int partnerId)
        {
            using (var db = new EntitiesContext())
            {
                Partner partner = db.Partners.Find(partnerId);
                if (partner == null)
                {
                    return HttpNotFound();
                }
                return PartialView("PartnerView", partner);
            }
        }

        //
        // AJAX: /Partner/GetPhotos/8

        [HttpPost]
        public ActionResult GetPhotos(int partnerId)
        {
            using (var db = new EntitiesContext())
            {
                Partner partner = db.Partners.Find(partnerId);
                if (partner == null)
                {
                    return HttpNotFound();
                }
                string containerName = partner.ContainerName;
                // get blob names
                List<string> photosList = this.GetBlobFileList(containerName, partnerId);
                // get photo records names
                List<Photo> partnerPhotos =
                    db.Photos.Where(p => p.PartnerId == partnerId).OrderBy(p => p.DisplayOrder).ToList();
                List<DisplayPhotoModel> storePhotos = new List<DisplayPhotoModel>();
                foreach (var partnerPhoto in partnerPhotos)
                {
                    DisplayPhotoModel sp = new DisplayPhotoModel();
                    sp.Id = partnerPhoto.Id;
                    sp.PartnerId = partner.PartnerId;
                    sp.ProductId = partnerPhoto.ProductId;
                    sp.PartnerPhoto = partnerPhoto.PartnerPhoto;
                    sp.DisplayOrder = partnerPhoto.DisplayOrder;
                    sp.ContainerName = partner.ContainerName;
                    sp.FileName = partnerPhoto.FileName;
                    sp.FileTimeStamp = partnerPhoto.FileTimeStamp;
                    sp.LongDescription = partnerPhoto.LongDescription;
                    sp.ShortDescription = partnerPhoto.ShortDescription;
                    sp.Uri = partnerPhoto.Uri;
                    storePhotos.Add(sp);
                }
                return PartialView("PhotoView", storePhotos);
            }
        }

        //
        // AJAX: /Partner/SetPartnerPhoto/5/2

        [HttpPost]
        public ActionResult SetPartnerPhoto(int partnerId, int photoId)
        {
            using (var db = new EntitiesContext())
            {
                // Display the confirmation message
                // lookup photo record by Id
                Photo photo = db.Photos.Find(photoId);
                photo.PartnerPhoto = !photo.PartnerPhoto;
                db.Entry(photo).State = EntityState.Modified;
                db.SaveChanges();
                ActionStatusViewModel vm = new ActionStatusViewModel();
                string state = photo.PartnerPhoto ? "has been selected" : "has been unselected";
                vm.Message = "This photo for this partner " + state + " to appear on the partner page.";
                return Json(vm);
            }
        }

        //
        // AJAX: /Partner/SetAllPartnerPhotos/5

        [HttpPost]
        public ActionResult SetAllPartnerPhotos(int partnerId, bool stateSwitch)
        {
            using (var db = new EntitiesContext())
            {
                // Display the confirmation message
                // lookup photo record by Id
                List<Photo> photos = db.Photos.Where(p => p.PartnerId == partnerId).ToList();
                foreach (var photo in photos)
                {
                    photo.PartnerPhoto = stateSwitch;
                    db.Entry(photo).State = EntityState.Modified;
                }
                db.SaveChanges();
                ActionStatusViewModel vm = new ActionStatusViewModel();
                string state = stateSwitch ? "have been selected" : "have been unselected";
                vm.Message = "All photos for this partner " + state + " to appear on the partner page.";
                return Json(vm);
            }
        }
        
        //
        // GET: /Partner/Delete/5

        public ActionResult Delete(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                Partner partner = db.Partners.Find(id);
                if (partner == null)
                {
                    return HttpNotFound();
                }
                // check for any products that belong to this partner
                // if you have any products from this partner you can't delete it
                var products = db.Products.Include(a => a.Partner);
                if (products == null)
                {
                    return View(partner);
                }
                var statusMessage = String.Format("You cannot delete partner {0} from the database, this partner has products in the store.", partner.Name);
                return RedirectToAction("Index", new {Message = statusMessage});
            }
        }

        //
        // POST: /Partner/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            using (var db = new EntitiesContext())
            {
                Partner partner = db.Partners.Find(id);
                partner.Status = PartnerStatus.Discontinued;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }

        public static byte[] ImageToByte2(Image img)
        {
            byte[] byteArray = new byte[0];
            using (MemoryStream stream = new MemoryStream())
            {
                img.Save(stream, ImageFormat.Jpeg);
                stream.Close();

                byteArray = stream.ToArray();
            }
            return byteArray;
        }

        static Bitmap FixedSize(Image srcImage, int Width, int Height)
        {
            int sourceWidth = srcImage.Width;
            int sourceHeight = srcImage.Height;
            int sourceX = 0;
            int sourceY = 0;
            int destX = 0;
            int destY = 0;

            float nPercent = 0;
            float nPercentW = 0;
            float nPercentH = 0;

            nPercentW = ((float)Width / (float)sourceWidth);
            nPercentH = ((float)Height / (float)sourceHeight);
            if (nPercentH < nPercentW)
            {
                nPercent = nPercentH;
                destX = Convert.ToInt16((Width - (sourceWidth * nPercent)) / 2);
            }
            else
            {
                nPercent = nPercentW;
                destY = Convert.ToInt16((Height - (sourceHeight * nPercent)) / 2);
            }

            int destWidth = (int)(sourceWidth * nPercent);
            int destHeight = (int)(sourceHeight * nPercent);

            Bitmap dstBitmap = new Bitmap(Width, Height, PixelFormat.Format24bppRgb);
            dstBitmap.SetResolution(srcImage.HorizontalResolution, srcImage.VerticalResolution);

            Graphics grPhoto = Graphics.FromImage(dstBitmap);
            grPhoto.Clear(Color.Black);
            grPhoto.InterpolationMode = InterpolationMode.HighQualityBicubic;

            grPhoto.DrawImage(srcImage,
                new Rectangle(destX, destY, destWidth, destHeight),
                new Rectangle(sourceX, sourceY, sourceWidth, sourceHeight),
                GraphicsUnit.Pixel);

            grPhoto.Dispose();
            return dstBitmap;
        }

        public async void Upload(IEnumerable<HttpPostedFileBase> file)
        {
            
            BlobServiceClient blobServiceClient = new BlobServiceClient(
                                   ConfigurationManager.AppSettings["CloudStorageConnectionString"]);
            string imageDirecoryUrl;
            imageDirecoryUrl = "";

            // Retrieve a reference to a container. 
            BlobContainerClient container = blobServiceClient.GetBlobContainerClient(imageDirecoryUrl);
            await container.CreateIfNotExistsAsync();
            if (file != null)
            {
                foreach (var f in file)
                {
                    if (f != null)
                    {
                        BlobClient blob = container.GetBlobClient(f.FileName);
                        blob.Upload(f.InputStream);
                    }
                }
            }
        }

        /// <summary>
        /// Gets an image from the specified URL.
        /// </summary>
        /// <param name="url">The URL containing an image.</param>
        /// <returns>The image as a bitmap.</returns>
        Bitmap GetImageFromUrl(string url)
        {
            var buffer = 1024;
            Bitmap image = null;

            if (!Uri.IsWellFormedUriString(url, UriKind.Absolute))
                return image;
            using (var ms = new MemoryStream())
            {
                var req = WebRequest.Create(url);
                using (var resp = req.GetResponse())
                {
                    using (var stream = resp.GetResponseStream())
                    {
                        var bytes = new byte[buffer];
                        var n = 0;
                        while ((n = stream.Read(bytes, 0, buffer)) != 0)
                            ms.Write(bytes, 0, n);
                    }
                }
                image = Bitmap.FromStream(ms) as Bitmap;
            }
            return image;
        }

        /// <summary>
        /// Resizes a image to a minimum size.
        /// </summary>
        /// <param name="url">The Image and minsize to which it should be resized.</param>
        /// <returns>Bitmap</returns>
        public static Image ResizeImage(Image img, int minsize)
        {
            var size = img.Size;
            if (size.Width >= size.Height)
            {
                // Could be: if (size.Height < minsize) size.Height = minsize;
                size.Height = minsize;
                size.Width = (size.Height * img.Width + img.Height - 1) / img.Height;
            }
            else
            {
                size.Width = minsize;
                size.Height = (size.Width * img.Height + img.Width - 1) / img.Width;
            }
            return new Bitmap(img, size);
        }

        /// <summary>
        /// Gets the filename that is placed under a certain URL.
        /// </summary>
        /// <param name="url">The URL which should be investigated for a file name.</param>
        /// <returns>The file name.</returns>
        string GetUrlFileName(string url)
        {
            var parts = url.Split(new char[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
            var last = parts[parts.Length - 1];
            return Path.GetFileNameWithoutExtension(last);
        }

        /// <summary>
        /// Creates a small image out of a larger image.
        /// </summary>
        /// <param name="original">The original image which should be cropped (will remain untouched).</param>
        /// <param name="x">The value where to start on the x axis.</param>
        /// <param name="y">The value where to start on the y axis.</param>
        /// <param name="width">The width of the final image.</param>
        /// <param name="height">The height of the final image.</param>
        /// <returns>The cropped image.</returns>
        Bitmap CreateImage(Bitmap original, int x, int y, int width, int height)
        {
            var img = new Bitmap(width, height);

            using (var g = Graphics.FromImage(img))
            {
                g.SmoothingMode = SmoothingMode.AntiAlias;
                g.InterpolationMode = InterpolationMode.HighQualityBicubic;
                g.DrawImage(original, new Rectangle(0, 0, width, height), x, y, width, height, GraphicsUnit.Pixel);
            }

            return img;
        }

        // 
        // Another option I like, which can be generalized once I start seeing the code not conform to DRY, 
        // is to use one controller that redirects to another controller.
        // I find this allows me to apply my logic in one location and re-use it without having to 
        // sprinkle JavaScript in the views to handle this. And, as I mentioned I can then refactor for 
        // re-use as I see this getting abused.
        // Why does your voice sound so different in recordings, apart from the fact that it's not being drowned out by all the other voices in your head?
        public ActionResult PhotoSearch(int partnerId)
        {
            var action = String.Format("Details/{0}", partnerId);
            return RedirectToAction(action, "Partner");
        }
    }
}