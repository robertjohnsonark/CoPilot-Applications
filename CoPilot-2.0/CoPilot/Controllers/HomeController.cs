using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Web.Mvc;
using CoPilot.Models;
using CoPilot.ViewModels;
using CoPilot.Source;

namespace CoPilot.Controllers
{
    public class HomeController : BaseController
    {

        //
        // GET: /Index/

        [AllowAnonymous]
        public ActionResult Index()
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                StoreFrontViewModel model = this.StoreFrontViewModel;
                int searchTypeId = settings.SearchTypeId;
                model.SearchTypeId = searchTypeId;
                // start with all the active products
                IQueryable<Product> products = db.Products.Where(a => a.Status == ProductStatus.Active);
                // filter the result set based on user inputs
                products = products.Include("Partner").Where(a => a.Partner.Status == PartnerStatus.Active);
                products = products.Include("Category").Where(a => a.Category.Status == PartnerStatus.Active);
                if (searchTypeId == 0)
                {
                    model.CategoryId = settings.CategoryId;
                    products = products.Where(p => p.CategoryId == model.CategoryId).OrderBy(a => a.Title);
                    model.Products = products.ToList();
                }
                else if (searchTypeId == 1)
                {
                    model.PartnerId = settings.PartnerId;
                    products = products.Where(p => p.PartnerId == model.PartnerId).OrderBy(a => a.Title);
                    model.Products = products.ToList();
                }
                else if (searchTypeId == -1)
                {
                    products = db.Products.Where(a => a.Highlighted == true);
                    products = products.Include("Partner").Where(a => a.Partner.Status == PartnerStatus.Active);
                    products = products.Include("Category").Where(a => a.Category.Status == PartnerStatus.Active);
                    products = products.OrderBy(a => a.Title);
                    model.Products = products.Randomize().ToList();
                }
                this.SaveSettingsToCookie(settings);
                // ViewResult Class
                return View("Index", "_Layout", model);
                // View(Model) is passed immediately to the ViewResultBase.ExecuteResult Method 
                // public override void ExecuteResult(ControllerContext context)            
                // When called by the action invoker, View(), renders the view to the response.
            }
        }

        [ChildActionOnly]
        public ActionResult App()
        {
            return PartialView("App");
        }

        //
        // AJAX: /Products/GetProducts/5/8

        [HttpPost]
        public ActionResult GetProducts(int searchTypeId = 0, int searchId = 0)
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                StoreFrontViewModel model = this.StoreFrontViewModel;
                settings.SearchTypeId = searchTypeId;
                model.SearchTypeId = searchTypeId;
                // start with all the active products
                IQueryable<Product> products = db.Products.Where(a => a.Status == ProductStatus.Active);
                // filter the result set based on user inputs
                products = products.Include("Partner").Where(a => a.Partner.Status == PartnerStatus.Active);
                products = products.Include("Category").Where(a => a.Category.Status == PartnerStatus.Active);
                if (searchTypeId == 0)
                {
                    settings.CategoryId = searchId;
                    model.CategoryId = searchId;
                    products = products.Where(p => p.CategoryId == model.CategoryId);
                    products = products.OrderBy(a => a.Title);
                    model.Products = products.ToList();
                }
                else if (searchTypeId == 1)
                {
                    settings.PartnerId = searchId;
                    model.PartnerId = searchId;
                    products = products.Where(p => p.PartnerId == model.PartnerId);
                    products = products.OrderBy(a => a.Title);
                    model.Products = products.ToList();
                }
                else if (searchTypeId == -1)
                {
                    products = db.Products.Where(a => a.Highlighted == true);
                    products = products.Include("Partner").Where(a => a.Partner.Status == PartnerStatus.Active);
                    products = products.Include("Category").Where(a => a.Category.Status == PartnerStatus.Active);
                    products = products.OrderBy(a => a.Title);
                    model.Products = products.Randomize().ToList();
                }
                this.SaveSettingsToCookie(settings);
                return PartialView("ProductView", model.Products);
            }
        }

        //
        // AJAX: /Home/GetStory/5/8

        [HttpPost]
        public ActionResult GetStory(int searchTypeId, int storyId)
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                settings.StoryId = storyId;
                var story = db.Stories.Find(storyId);
                this.SaveSettingsToCookie(settings);
                return PartialView("StoryView", story);
            }
        }

        //
        // GET: /About/

        [AllowAnonymous]
        public ActionResult About()
        {
            ViewBag.Message = "About Wren Thicket Market";
            return View();
        }

        //
        // GET: /FAQs/

        [AllowAnonymous]
        public ActionResult FAQs()
        {
            ViewBag.Message = "Wren Thicket Market frequently asked questions";
            return View();
        }

        // Unused?
        // GET: /Contact/

        [AllowAnonymous]
        public ActionResult Contact()
        {
            ViewBag.Message = "Website Support";
            return View();
        }

        //
        // GET: /Home/Partners

        [AllowAnonymous]
        public ActionResult Partners()
        {
            using (var db = new EntitiesContext())
            {
                ViewBag.Message = "Browse products by partner";
                // Retrieve Partners partners of type Farmer from database
                var partners =
                    db.Partners.Where(p => p.PartnerType == PartnerType.Partner)
                        .Where(p => p.Status != PartnerStatus.Inactive)
                        .Where(p => p.Status != PartnerStatus.Discontinued)
                        .OrderBy(p => p.Name).ToList();
                return View(partners);
            }
        }

        //
        // GET: /Home/Partner/5

        [AllowAnonymous]
        public ActionResult Partner(int partnerId = 0)
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
                        where idList.Contains(p.Id) && p.PartnerPhoto == true && p.Width == 640
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
        // GET: /Product/Details/5

        public ActionResult Details(int id = 0)
        {
           return RedirectToAction(
                      "Details", // ContentItem name
                      "Store", // Controller name
                      new { productid = id }); // Route values
        }
    }
}
