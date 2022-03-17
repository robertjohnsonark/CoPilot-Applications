using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using System.Web.WebPages;
using CoPilot.Models;
using CoPilot.ViewModels;

namespace CoPilot.Controllers
{
    [Authorize(Roles = "Administrator")]
    public class ProductController : BaseController
    {
        //
        // GET: /Product/Index/A

        public ActionResult Index(string index)
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                ProductEditorViewModel model = new ProductEditorViewModel();
                List<SelectListItem> items = new List<SelectListItem>();
                items.Add(new SelectListItem() {Text = "CategoryNames", Value = "1", Selected = true});
                items.Add(new SelectListItem() {Text = "Partner", Value = "2", Selected = false});
                model.SelectionTypes = new SelectList(items, "Value", "Text", "1");
                model.CategoryNames = new SelectList(db.Categories.ToList(), "CategoryId", "Name");
                model.PartnerNames = new SelectList(db.Partners.OrderBy(p => p.Name).ToList(), "PartnerId", "Name");
                if (settings.EditTypeId == 0)
                {
                    model.CategoryId = settings.CategoryId;
                }
                else if (settings.EditTypeId == 1)
                {
                    model.PartnerId = settings.PartnerId;
                }
                // start with all the records
                var products = from p in db.Products select p;
                // filter the result set based on user inputs
                if (settings.EditTypeId == 0)
                {
                    products = products.Where(p => p.CategoryId == model.CategoryId);
                }
                else if (settings.EditTypeId == 1)
                {
                    products = products.Where(p => p.PartnerId == model.PartnerId);
                }
                if (!index.IsEmpty())
                {
                    products = products.Where(u => u.Title.StartsWith(index));
                }
                if (!settings.ShowHidden)
                {
                    products = products.Where(p => p.Status != ProductStatus.Discontinued);
                }
                products = products.OrderBy(a => a.Title);
                model.Products = products.ToList();
                // Debug.WriteLine($"User Index End: {settings.EditProductIndex},{index}");
                // Debug.WriteLine($"User Index Begin: {settings.EditUserIndex},{index}");
                if (!index.IsEmpty()) settings.EditProductIndex = index;
                else index = settings.EditProductIndex;
                this.SaveSettingsToCookie(settings);
                return View(model);
            }
        }

        [HttpPost]
        public ActionResult SaveSettings(List<ProductStatusModel> model)
        {
            using (var db = new EntitiesContext())
            {
                string message = $"product status model count '{model.Count}'";
                foreach (var product in model)
                {
                    var p = db.Products.Find(Convert.ToInt32(product.Id));
                    if (p != null)
                    {
                        p.Highlighted = Convert.ToBoolean(product.Highlighted);
                        p.Status = (ProductStatus)Enum.Parse(typeof (ProductStatus), product.Status.Replace("Status", "").Trim());
                        db.Entry(p).State = EntityState.Modified;
                        db.SaveChanges();
                        Debug.WriteLine($"product updated: {product.Id},{product.Status},{product.Highlighted}");
                    }
                }
                return Json(new {message});
            }
        }
        
        //
        // AJAX: /Products/GetProducts/5/8

        [HttpPost]
        public ActionResult GetProducts(int searchTypeId = 1, int categoryId = 0, int partnerId = 0)
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                ProductEditorViewModel model = new ProductEditorViewModel();
                List<SelectListItem> items = new List<SelectListItem>();
                items.Add(new SelectListItem() {Text = "Categories", Value = "1", Selected = true});
                items.Add(new SelectListItem() {Text = "Partner", Value = "2", Selected = false});
                model.SelectionTypes = new SelectList(items, "Value", "Text", "1");
                model.CategoryNames = new SelectList(db.Categories.ToList(), "CategoryId", "Name");
                model.PartnerNames = new SelectList(db.Partners.ToList(), "PartnerId", "Name");
                model.CategoryId = categoryId;
                model.PartnerId = partnerId;
                // start with all the records
                var query = from p in db.Products select p;
                // filter the result set based on user inputs
                if (searchTypeId == 0)
                {
                    settings.EditTypeId = searchTypeId;
                    settings.CategoryId = categoryId;
                    query = query.Where(p => p.CategoryId == categoryId);
                }
                else
                {
                    settings.EditTypeId = searchTypeId;
                    settings.PartnerId = partnerId;
                    query = query.Where(p => p.PartnerId == partnerId);
                }
                if (!settings.ShowHidden)
                {
                    query = query.Where(p => p.Status != ProductStatus.Discontinued);
                }
                query = query.OrderBy(a => a.Title);
                model.Products = query.ToList();
                this.SaveSettingsToCookie(settings);
                return PartialView("ProductView", model.Products);
            }
        }
        
        //
        // GET: /Product/Details/5

        public ActionResult Details(int productId = 0)
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                Product product = db.Products.Find(productId);
                if (product == null)
                {
                    return HttpNotFound();
                }
                settings.ProductId = productId;
                string categoryName = product.Category.Name;
                string containerName = product.Partner.ContainerName;
                string contentList = product.ContentList;
                string blobSrcUri = this.CheckContainer(containerName, product.Partner.PartnerId);
                List<int> idList = this.GetContentListIds(contentList);
                // get photo records in our selected photo list, in sorted display order
                IQueryable<Photo> photos = (from p in db.Photos where idList.Contains(p.Id) select p);
                List<DisplayPhotoModel> photoList = this.GetDisplayPhotoList(photos, blobSrcUri, containerName, false);
                var model = new ProductPhotosViewModel
                {
                    Product = product,
                    Photos = photoList
                };
                settings.PartnerId = product.PartnerId;
                this.SaveSettingsToCookie(settings);
                return View(model);
            }
        }

        //
        // GET: /Product/Create

        public ActionResult Create()
        {
            using (var db = new EntitiesContext())
            {
                ViewBag.CategoryId = new SelectList(db.Categories.ToList(), "CategoryId", "Name");
                ViewBag.PartnerId = new SelectList(db.Partners.ToList(), "PartnerId", "Name");
                return View(new Product());
            }
        }

        //
        // POST: /Product/Create
        [HttpPost]
        public ActionResult Create(Product product)
        {
            using (var db = new EntitiesContext())
            {
                if (ModelState.IsValid)
                {
                    db.Products.Add(product);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
                ViewBag.CategoryId = new SelectList(db.Categories.ToList(), "CategoryId", "Name", product.CategoryId);
                ViewBag.PartnerId = new SelectList(db.Partners.ToList(), "PartnerId", "Name", product.PartnerId);
                return View(product);
            }
        }

        //
        // GET: /ProductPhotosViewModel/Edit/5

        public ActionResult Edit(int productId = 0)
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                Product product = db.Products.Find(productId);
                if (product == null)
                {
                    return HttpNotFound();
                }
                ViewBag.CategoryNames = new SelectList(db.Categories.ToList(), "CategoryId", "Name");
                ViewBag.PartnerNames = new SelectList(db.Partners.ToList(), "PartnerId", "Name");
                Partner partner = db.Partners.Find(product.PartnerId);
                string containerName = partner.ContainerName;
                string contentList = product.ContentList;
                string blobSrcUri = this.CheckContainer(containerName, partner.PartnerId);
                List<int> idList = this.GetContentListIds(contentList);
                // get photo records in our selected photo list, in sorted display order
                // IQueryable<Photo> photos = (from p in db.Photos where idList.Contains(p.Id) select p);
                // List<DisplayPhotoModel> photoList = this.GetDisplayPhotoList(photos, blobSrcUri, containerName);
                IQueryable<Photo> photos = db.Photos.Where(p => p.PartnerId == partner.PartnerId);
                List<DisplayPhotoModel> photoList = new List<DisplayPhotoModel>();
                int order = idList.Count + 4;
                foreach (var p in photos)
                {
                    DisplayPhotoModel sp = new DisplayPhotoModel
                    {
                        Id = p.Id,
                        PartnerId = p.PartnerId,
                        DisplayOrder = order++,
                        PartnerPhoto = false,
                        ContainerName = partner.ContainerName,
                        FileName = p.FileName,
                        FileTimeStamp = p.FileTimeStamp,
                        LongDescription = p.LongDescription,
                        ShortDescription = p.ShortDescription,
                        Uri = blobSrcUri + containerName + "/" + p.FileName
                    };
                    photoList.Add(sp);
                }
                order = 1;
                foreach (var i in idList)
                {
                    foreach (var p in photoList)
                    {
                        if (p.Id == i)
                        {
                            p.DisplayOrder = order++;
                            p.PartnerPhoto = true;
                        }
                        // System.Diagnostics.Debug.WriteLine(String.Format("photo updated: {0},{1},{2}", i, p.Id, p.PartnerPhoto));
                    }
                }
                photoList.Sort();
                var model = new ProductPhotosViewModel
                {
                    Product = product,
                    Photos = photoList
                };
                settings.PartnerId = product.PartnerId;
                this.SaveSettingsToCookie(settings);
                return View(model);
            }
        }

        //
        // POST: /Product/SaveForm/model

        [HttpPost]
        public ActionResult SaveForm(Product model)
        {
            using (var db = new EntitiesContext())
            {
                var p = db.Products.Find(Convert.ToInt32(model.ProductId));
                if (p != null)
                {
                    p.Title = model.Title;
                    p.Description = model.Description;
                    p.Units = model.Units;
                    p.Price = model.Price;
                    p.Notes = model.Notes;
                    p.Highlighted = model.Highlighted;
                    p.ProductArtUrl = model.ProductArtUrl;
                    p.CategoryId = model.CategoryId;
                    p.Status = model.Status;
                    db.Entry(p).State = EntityState.Modified;
                    db.SaveChanges();
                }
                string message = $"{model.Title} data updated {DateTime.Now}.";
                return Json(new {message});
            }
        }

        //
        // POST: /Product/SavePhotoSettings/List<PartnerPhotoModel>/productId

        [HttpPost]
        public ActionResult SavePhotoSettings(List<PartnerPhotoModel> model, int productId = 0)
        {
            using (var db = new EntitiesContext())
            {
                string message = string.Format("Attempting to update product photo info.");
                int order = 1;
                Product product = db.Products.Find(productId);
                StringBuilder contentList = new StringBuilder();
                contentList.Append("ContentList: ");
                foreach (var photo in model)
                {
                    var p = db.Photos.Find(Convert.ToInt32(photo.PhotoId));
                    if (p != null)
                    {
                        contentList.Append($"{photo.PhotoId},{order}; ");
                        order++;
                        // System.Diagnostics.Debug.WriteLine(String.Format("photo updated: {0},{1}", photo.PhotoId, photo.PartnerPhoto));
                    }
                }
                if (product != null)
                {
                    message = $"{product.Title}  photo info updated {DateTime.Now}.";
                    product.ContentList = contentList.ToString();
                    db.SaveChanges();
                }
                return Json(new {message});
            }
        }

        //
        // GET: /Product/Delete/5

        public ActionResult Delete(int productId = 0)
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                Product product = db.Products.Find(productId);
                if (product == null)
                {
                    return HttpNotFound();
                }
                string categoryName = product.Category.Name;
                string containerName = product.Partner.ContainerName;
                settings.PartnerId = product.PartnerId;
                this.SaveSettingsToCookie(settings);
                return View(product);
            }
        }

        //
        // POST: /Product/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            using (var db = new EntitiesContext())
            {
                Product product = db.Products.Find(id);
                product.Status = ProductStatus.Discontinued;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }
    }
}
