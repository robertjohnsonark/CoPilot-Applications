using System;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;
using CoPilot.Models;

namespace CoPilot.Controllers
{
    [Authorize]
    public class AppSettingsController : BaseController
    {

        //
        // GET: /AppSettings/Edit/5

        public ActionResult Edit()
        {
            using (var db = new EntitiesContext())
            {
                AppSetting settings = db.AppSettings.FirstOrDefault();
                if (settings == null)
                {
                    return HttpNotFound();
                }
                settings.OpenStore = DateTime.SpecifyKind(AppEvent.OrderingStartDateTime, DateTimeKind.Local);
                settings.CloseStore = DateTime.SpecifyKind(AppEvent.OrderingEndDateTime, DateTimeKind.Local);
                if (IsDebug()) // running on local dev machine
                {
                    ViewBag.CurrentServerTime = DateTime.Now;
                    ViewBag.CurrentTime = DateTime.Now;
                }
                else // running in azure
                {
                    ViewBag.CurrentServerTime = DateTime.UtcNow;
                    ViewBag.CurrentTime = UtcToCentral(DateTime.UtcNow);
                }
                return View(settings);
            }
        }

        //
        // POST: /AppSettings/Edit/5

        [HttpPost]
        public ActionResult Edit(AppSetting model)
        {
            using (var db = new EntitiesContext())
            {
                try
                {
                    if (ModelState.IsValid)
                    {
                        AppSetting settings = db.AppSettings.FirstOrDefault();
                        if (settings != null)
                        {
                            settings.OpenStore = model.OpenStore;
                            settings.CloseStore = model.CloseStore;
                            settings.StoreOpen = model.StoreOpen;
                            settings.StoreClosed = model.StoreClosed;
                            db.Entry(settings).State = EntityState.Modified;
                            db.SaveChanges();
                        }
                    }
                    return RedirectToAction("Edit");
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return RedirectToAction("Edit");
                }
            }
        }
    }
}
