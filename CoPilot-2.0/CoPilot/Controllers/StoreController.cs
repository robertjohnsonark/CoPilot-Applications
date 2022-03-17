using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using CoPilot.Models;
using CoPilot.ViewModels;
using WebMatrix.WebData;

namespace CoPilot.Controllers
{
    public class StoreController : BaseController
    {
        //
        // GET: /Store/
        public ActionResult Index()
        {
            using (var db = new EntitiesContext())
            {
                var categories = db.Categories.ToList();
                return View(categories);
            }
        }

        //
        // GET: /Store/
        public ActionResult Partners()
        {
            using (var db = new EntitiesContext())
            {
                // Retrieve Partners from database
                var partners = db.Partners.Where(p => p.PartnerType == PartnerType.Partner).OrderBy(p => p.Name);
                return View(partners);
            }
        }

        //
        // GET: /Store/Browse?tocItemTypeName=Greens
        public ActionResult Browse(string tocItemTypeName)
        {
            using (var db = new EntitiesContext())
            {
                // Retrieve Category tocItemTypeName and its associated Products products from database
                var category = db.Categories.Include("Products").Single(g => g.Name == tocItemTypeName);
                ViewBag.CategoryName = category.Name;
                if (WebSecurity.IsAuthenticated)
                {
                    ViewBag.Authenticated = true;
                }
                return View(category);
            }
        }

        //
        // GET: /Store/BrowsePartner?partnerid=1
        public ActionResult BrowsePartner(int partnerid)
        {
            using (var db = new EntitiesContext())
            {
                // Retrieve Products products and its associated Partner partner from database
                var partner = db.Partners.Find(partnerid);
                ViewBag.Partner = partner;
                var products =
                    db.Products.Include("Partner")
                        .Where(g => g.PartnerId == partnerid)
                        .Where(g => g.Status == ProductStatus.Active)
                        .OrderBy(g => g.Title).ToList();
                if (WebSecurity.IsAuthenticated)
                {
                    ViewBag.Authenticated = true;
                }
                return View(products);
            }
        }

        public ActionResult Details(int productId)
        {
            using (var db = new EntitiesContext())
            {
                if (WebSecurity.IsAuthenticated)
                {
                    ViewBag.Authenticated = true;
                }
                Product product = db.Products.Find(productId);
                if (product == null)
                {
                    return HttpNotFound();
                }
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
                return View(model);
            }
        }
    }
}