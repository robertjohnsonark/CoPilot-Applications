using System;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;
using System.Collections.Generic;
using CoPilot.Models;

namespace CoPilot.Controllers
{
    [Authorize(Roles = "Administrator")]
    public class CategoryController : BaseController
    {
        //
        // GET: /Category/.

        public ActionResult Index(string message)
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                if (message != null) ViewBag.StatusMessage = message;
                IQueryable<Category> categories = db.Categories.OrderBy(e => e.Name);
                if (!settings.ShowHidden)
                {
                    categories = categories.Where(e => e.Status != PartnerStatus.Discontinued);
                }
                return View(categories.ToList());
            }
        }

        //
        // GET: /Category/Details/5

        public ActionResult Details(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                Category category = db.Categories.Find(id);
                if (category == null)
                {
                    return HttpNotFound();
                }
                return View(category);
            }
        }

        //
        // GET: /Category/Create

        public ActionResult Create()
        {
            return View(new Category());
        }

        //
        // POST: /Category/Create

        [HttpPost]
        public ActionResult Create(Category category)
        {
            using (var db = new EntitiesContext())
            {
                if (ModelState.IsValid)
                {
                    db.Categories.Add(category);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
                return View(category);
            }
        }

        //
        // GET: /Category/Edit/5

        public ActionResult Edit(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                Category category = db.Categories.Find(id);
                if (category == null)
                {
                    return HttpNotFound();
                }
                return View(category);
            }
        }

        //
        // POST: /Category/Edit/5

        [HttpPost]
        public ActionResult Edit(Category category)
        {
            using (var db = new EntitiesContext())
            {
                if (ModelState.IsValid)
                {
                    db.Entry(category).State = EntityState.Modified;
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
                return View(category);
            }
        }

        //
        // GET: /Category/Delete/5

        public ActionResult Delete(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                Category category = db.Categories.Find(id);
                if (category == null)
                {
                    return HttpNotFound();
                }
                // check for any products that belong to this Category
                // if you have any products in this Category you can't delete it
                var products = db.Products.Include(a => a.Category);
                if (products == null)
                {
                    return View(category);
                }
                var statusMessage =
                    String.Format(
                        "You cannot delete the category {0}, if you have any products in this Category you can't delete it.",
                        category.Name);
                return RedirectToAction("Index", new {Message = statusMessage});
            }
        }

        //
        // POST: /Category/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            using (var db = new EntitiesContext())
            {
                Category category = db.Categories.Find(id);
                category.Status = PartnerStatus.Discontinued;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }
    }
}