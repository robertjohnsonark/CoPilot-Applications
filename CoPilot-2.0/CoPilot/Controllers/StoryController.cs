using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;
using CoPilot.Models;

namespace CoPilot.Controllers
{
    [Authorize(Roles = "Administrator")]
    public class StoryController : BaseController
    {
        //
        // GET: /Story/

        public ActionResult Index()
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                IQueryable<Story> stories = db.Stories.OrderByDescending(s => s.StoryDateTime);
                if (!settings.ShowHidden)
                {
                    stories = stories.Where(s => s.Status != PartnerStatus.Discontinued);
                }
                return View(stories.ToList());
            }
        }

        //
        // GET: /Story/Details/5

        public ActionResult Details(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                Story story = db.Stories.Find(id);
                if (story == null)
                {
                    return HttpNotFound();
                }
                return View(story);
            }
        }

        //
        // GET: /Story/Create

        public ActionResult Create()
        {
            return View(new Story());
        }

        //
        // POST: /Story/Create

        [HttpPost, ValidateInput(false)]
        public ActionResult Create(Story story)
        {
            using (var db = new EntitiesContext())
            {
                // I don't care I'm testing getting html back from the client
                if (ModelState.IsValid)
                {
                    // Lookup user UserName in the database
                    UserProfile user =
                        db.UserProfiles.FirstOrDefault(u => u.UserName.ToLower() == User.Identity.Name.ToLower());
                    // Check if user already exists
                    if (user != null)
                    {
                        story.UserId = user.UserId;
                        story.UserName = user.UserName;
                        story.StoryDateTime = DateTime.Now;
                    }
                    db.Stories.Add(story);
                    db.SaveChanges();
                }
                return View(story);
            }
        }

        //
        // GET: /Story/Edit/5

        public ActionResult Edit(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                Story story = db.Stories.Find(id);
                if (story == null)
                {
                    return HttpNotFound();
                }
                return View(story);
            }
        }

        //
        // POST: /Story/Edit/5

        [HttpPost]
        public ActionResult Edit(Story story)
        {
            using (var db = new EntitiesContext())
            {
                if (ModelState.IsValid)
                {
                    db.Entry(story).State = EntityState.Modified;
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
                return View(story);
            }
        }

        //
        // GET: /Story/Delete/5

        public ActionResult Delete(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                Story story = db.Stories.Find(id);
                if (story == null)
                {
                    return HttpNotFound();
                }
                return View(story);
            }
        }

        //
        // POST: /Story/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            using (var db = new EntitiesContext())
            {
                Story story = db.Stories.Find(id);
                story.Status = PartnerStatus.Discontinued;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }
    }
}
