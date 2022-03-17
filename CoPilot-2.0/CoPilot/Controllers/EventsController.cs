using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Text;
using System.Web.Mvc;
using Azure.Storage.Blobs;
using Azure.Storage.Queues;
using CoPilot.Models;
using Microsoft.Azure.Cosmos.Table;
using Microsoft.WindowsAzure.Storage.Queue;

namespace CoPilot.Controllers
{
    public class EventsController : BaseController
    {

        // GET: Events
        public ActionResult Index()
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                IQueryable<Event> events = db.Events.OrderByDescending(e => e.EventDateTime);
                if (!settings.ShowHidden)
                {
                    events = events.Where(e => e.Status != ActionStatus.Discontinued);
                }
                return View(events.ToList());
            }
        }

        // GET: Events/Details/5
        public ActionResult Details(int? id)
        {
            using (var db = new EntitiesContext())
            {
                if (id == null)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                }
                Event appEvent = db.Events.Find(id);
                if (appEvent == null)
                {
                    return HttpNotFound();
                }
                return View(appEvent);
            }
        }

        // GET: Events/Create
        public ActionResult Create()
        {
            Event appEvent = CreateEvent();
            return View(appEvent);
        }

        // POST: Events/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost, ActionName("Create")]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "EventId,EventName,UserId,EventDateTime,EventStartDateTime,EventEndDateTime,OrderingStartDateTime,OrderingEndDateTime,Status,EventHtml,ContentList")] Event appEvent)
        {
            using (var db = new EntitiesContext())
            {
                if (ModelState.IsValid)
                {
                    db.Events.Add(appEvent);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
                return View(appEvent);
            }
        }

        // GET: Events/Edit/5
        public ActionResult Edit(int? id)
        {
            using (var db = new EntitiesContext())
            {
                if (id == null)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                }
                Event appEvent = db.Events.Find(id);
                if (appEvent == null)
                {
                    return HttpNotFound();
                }
                return View(appEvent);
            }
        }

        // POST: Events/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost, ActionName("Edit")]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "EventId,EventName,UserId,EventDateTime,EventStartDateTime,EventEndDateTime,OrderingStartDateTime,OrderingEndDateTime,Status,EventHtml,ContentList")] Event appEvent)
        {
            using (var db = new EntitiesContext())
            {
                if (ModelState.IsValid)
                {
                    var saveEvent = db.Events.FirstOrDefault(e => e.EventId == appEvent.EventId);
                    if (saveEvent != null)
                    {
                        saveEvent.EventName = appEvent.EventName;
                        saveEvent.UserId = appEvent.UserId;
                        saveEvent.EventDateTime = appEvent.EventDateTime;
                        saveEvent.EventStartDateTime = appEvent.EventStartDateTime;
                        saveEvent.EventEndDateTime = appEvent.EventEndDateTime;
                        saveEvent.OrderingStartDateTime = appEvent.OrderingStartDateTime;
                        saveEvent.OrderingEndDateTime = appEvent.OrderingEndDateTime;
                        saveEvent.Status = appEvent.Status;
                        saveEvent.EventHtml = appEvent.EventHtml;
                        saveEvent.ContentList = appEvent.ContentList;
                        db.Entry(saveEvent).State = EntityState.Modified;
                        db.SaveChanges();
                    }
                    return RedirectToAction("Index");
                }
                return View(appEvent);
            }
        }

        // GET: Events/Delete/5
        public ActionResult Delete(int? id)
        {
            using (var db = new EntitiesContext())
            {
                if (id == null)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                }
                Event appEvent = db.Events.Find(id);
                if (appEvent == null)
                {
                    return HttpNotFound();
                }
                return View(appEvent);
            }
        }

        // POST: Events/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            using (var db = new EntitiesContext())
            {
                Event appEvent = db.Events.Find(id);
                appEvent.Status = ActionStatus.Discontinued;
                db.Events.Remove(appEvent);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }

        //
        // GET: /Story/BuildNewsLetter

        [HttpPost, ActionName("BuildNewsLetter")]
        public ActionResult BuildNewsLetter(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                StringBuilder newsLetter = new StringBuilder();
                newsLetter.Append("<html>");
                newsLetter.Append("<p><b>Hello Everyone,</b></p>");
                newsLetter.Append("<p><b>Here is what is going on at Wren Thicket Market this week-</b></p>");
                var products =
                    db.Products.Include("Partner")
                        .Where(a => a.Status == ProductStatus.Active)
                        .Where(a => a.Highlighted == true)
                        .OrderBy(a => a.Partner.Name)
                        .ThenBy(a => a.Title)
                        .ToList();
                List<Partner> partners;
                partners = new List<Partner>();
                foreach (var product in products)
                {
                    var partner = product.Partner;
                    bool exists = partners.Exists(a => a.PartnerId == partner.PartnerId);
                    if (!exists)
                    {
                        partners.Add(partner);
                    }
                }
                foreach (var partner in partners)
                {
                    newsLetter.Append(String.Format("<p>{0} {1}</p>", partner.Owners, partner.Name));
                    var partnerProducts = products.Where(a => a.PartnerId == partner.PartnerId);
                    foreach (var product in partnerProducts)
                    {
                        // http://localhost:5928/Product/Details/281
                        newsLetter.Append(String.Format("<p>{0} {1}</p>", product.Title, product.Units));
                    }
                }
                newsLetter.Append(
                    "<p><b>See the attached order letter for a listing of all our products available this week as well as market information!</b></p>");
                newsLetter.Append(
                    "<p><b>Pre-ordering recommended! </b><b>We fill pre-orders first. Extras sold from the tables.</b></p>");
                newsLetter.Append(
                    "<p><b>Join us between 9am and 12 Noon on Saturday&rsquo;s</b><b> year around!</b></p>");
                newsLetter.Append("<p><b>Indoor market at 1041 S. School Ave., Fayetteville.</b></p>");
                newsLetter.Append("<p><b>Look for our banner signs out front.</b></p>");
                newsLetter.Append("<p><b>THANK-YOU!</b></p>");
                newsLetter.Append("<p><b>-The Partners and Partners of Wren Thicket Market</b></p>");
                newsLetter.Append("</html>");
                return Content(newsLetter.ToString());
            }
        }

        [HttpPost, ActionName("SendNewsLetter")]
        public ActionResult SendNewsLetter(int testFlag = 1)
        {
            using (var db = new EntitiesContext())
            {
                if (testFlag == 1)
                {
                    db.Database.ExecuteSqlCommand("UPDATE EmailLists Set EmailStatus = '' WHERE EmailType = 'Admin'");
                }
                else
                {
                    db.Database.ExecuteSqlCommand("UPDATE EmailLists Set EmailStatus = ''");
                }
            }
            // Retrieve storage account from connection string
            BlobServiceClient blobServiceClient = new BlobServiceClient(ConfigurationManager.AppSettings["CloudStorageConnectionString"]);

            // Create the queue client
            string queueName = "sample-queue";
            // Create the queue client
            QueueClient queue = new QueueClient("CloudStorageConnectionString", queueName);


            // Create the queue if it doesn't already exist.
            queue.CreateIfNotExists();

            // Create a message and add it to the queue.
            queue.SendMessage(String.Format($"SendNewsLetter-{testFlag}"));

            using (var db = new EntitiesContext())
            {
                Event appEvent = db.Events.FirstOrDefault();
                if (appEvent == null)
                {
                    return HttpNotFound();
                }
                return View("Edit", appEvent);
            }
        }
    }
}
