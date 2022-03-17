using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using WebMatrix.WebData;
using System.IO;
using CoPilot.Models;
using CoPilot.ViewModels;
using System.Data.Entity;
using Azure.Storage.Blobs;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.Azure.Cosmos.Table;
using Microsoft.WindowsAzure.Storage.Queue;
using Azure.Storage.Queues;
using Azure.Storage.Sas;
using Azure.Storage.Blobs.Models;
using Azure;

namespace CoPilot.Controllers
{
    public class ImageBrowser
    {

        public string image { get; set; }
        public string thumb { get; set; }
        public string folder { get; set; }
    }

    public class BaseController : Controller
    {
        public const string CartSessionKey = "CartId";
        public UserSettings Settings { get; set; }
        public Event AppEvent { get; set; }
        public StoreFrontViewModel StoreFrontViewModel { get; set; }

        // public CultureInfo enUSCultureInfo = new CultureInfo("en-US");

        public BaseController()
        {
            UserProfile user = null;
            bool administrator = false;
            bool authenticated = false;
            int userId = 0;
            string userName = null;
            string userRole = null;

            StoreFrontViewModel = new StoreFrontViewModel();

            using (var db = new EntitiesContext())
            {
                Settings = GetSettingsFromCookie();

                // ViewBag.HomeController
                if (WebSecurity.IsAuthenticated)
                {
                    userId = WebSecurity.CurrentUserId;
                    user = db.UserProfiles.Find(userId);
                    if (user != null)
                    {
                        userName = user.UserName;
                        authenticated = true;
                    }
                }
                if ((user != null) && (WebSecurity.UserExists(userName)))
                {
                    if ((WebSecurity.IsAuthenticated) && (Roles.GetRolesForUser(userName).Contains("Administrator")))
                    {
                        userRole = Roles.GetRolesForUser(userName)[0];
                        administrator = true;
                    }
                    else if ((WebSecurity.IsAuthenticated) && (Roles.GetRolesForUser(userName).Contains("Partner")))
                    {
                        userRole = Roles.GetRolesForUser(userName)[0];
                    }
                    else if ((WebSecurity.IsAuthenticated) && (Roles.GetRolesForUser(userName).Contains("Customer")))
                    {
                        userRole = Roles.GetRolesForUser(userName)[0];
                    }
                    else if (WebSecurity.IsAuthenticated)
                    {
                        userRole = Roles.GetRolesForUser(userName)[0];
                    }
                }

                // Session variables: - By using session variables we can maintain data until the browser closes. 
                // set
                System.Web.HttpContext.Current.Session["sessionString"] = "UntilBrowserCloses";
                // read
                ViewData["sessionString"] = (String) System.Web.HttpContext.Current.Session["sessionString"];
                // Temp data: -Helps to maintain data on redirects for a single request and response. Now the redirects can be from controller to controller or from controller to view.
                TempData["FortheFullRequest"] = "FortheFullRequest";
                // View data: - Helps to maintain data when you move from controller to view. 
                ViewData["MyVal"] = "ControllertoView";
                ViewBag.MyVal = "ControllertoView";
                //public string AppName { get; set; }
                //public string AppCodeName { get; set; }
                //public string UserAgent { get; set; }
                //public int MediaWidth { get; set; }
                //public int MediaHeight { get; set; }
                AppEvent = CreateEvent();
                // AppEvent = db.Events.FirstOrDefault(e => e.EventId == 1039);
                AppSetting appSettings = db.AppSettings.Find(1);
                AppViewModel vm = new AppViewModel();
                vm.UserId = userId;
                vm.UserName = userName;
                vm.UserRole = userRole;
                vm.Authenticated = authenticated.ToString();
                vm.BusinessOpen = IsBusinessOpen().ToString();
                vm.DebugEnabled = appSettings.StoreOpen.ToString();
                vm.LoggingEnabled = appSettings.StoreClosed.ToString();
                //vm.ShowHidden = appSettings.ShowHidden;
                if (IsBusinessOpen() && (authenticated))
                {
                    vm.MarketEnabled = "True";
                }
                else if ((IsBusinessOpen()) && (authenticated == false))
                {
                    vm.MarketEnabled = "False";
                    vm.BusinessOpen = "True";
                }
                else if ((appSettings.StoreOpen) && (authenticated))
                {
                    vm.MarketEnabled = "True";
                    vm.BusinessOpen = "True";
                }
                else
                {
                    vm.MarketEnabled = "False";
                }
                // get the previous url and store it with view model
                if (System.Web.HttpContext.Current.Request.UrlReferrer != null)
                {
                    Debug.WriteLine("{0}", System.Web.HttpContext.Current.Request.UrlReferrer.ToString());
                }
                // Table of Contents 
                vm.ContentItems = MartketCotentItems(administrator, authenticated, userName);
                // Get ShowHidden from cookies
                UserSettings settings = GetSettingsFromCookie();
                vm.ShowHidden = settings.ShowHidden;
                // used in jquery.cp.cs to manage the app
                ViewBag.AppViewModel = vm;
                // ASP.NET: HttpContext vs HttpContextBase
                // ASP.NET Core infrastructure is built around HttpApplication class which has a reference to 
                // System.Web.HttpContext (System.Web) class's instance in its Context property.
                // ASP.NET MVC on the other hand uses System.Web.HttpContextBase. Controller class has Context 
                // property of type System.Web.HttpContextBase.
                // Idea behind introducing the new HttpContextBase instead of HttpContext is to allow 
                // unit-testing due to HttpContextBase is an abstract class.
                // But sometimes we may need to convert HttpContext into HttpContextBase and vice versa. 
                // E.g. when we have common logic which is being used from HttpApplication and from MVC controllers.
                // Getting HttpContext from HttpContextBase's instance is easy:
                // HttpContext httpContext = httpContextBase.ApplicationInstance.Context;
                // To get HttpContextBase from HttpContext we have to wrap it in HttpContextWrapper:
                HttpContextBase abstractContext = new HttpContextWrapper(System.Web.HttpContext.Current);
                if (WebSecurity.IsAuthenticated)
                {
                    var cart = ShoppingCart.GetCart(db, abstractContext);
                    if ((cart != null) && (abstractContext.Session != null))
                    {
                        if (cart.GetCount() > 0)
                        {
                            var cartItems = cart.GetCartItems();
                            List<ProductSummary> products = new List<ProductSummary>();
                            foreach (var cartItem in cartItems)
                            {
                                products.Add(new ProductSummary
                                {
                                    RecordId = cartItem.RecordId,
                                    ProductId = cartItem.ProductId,
                                    PartnerId = cartItem.Product.PartnerId,
                                    SoldByWeight = cartItem.Product.SoldByWeight,
                                    Title = cartItem.Product.Title,
                                    PartnerName = cartItem.Product.Partner.Name,
                                    Count = cartItem.Count,
                                    Units = cartItem.Product.Units,
                                    Price = cartItem.Product.Price,
                                    Total = (cartItem.Count * cartItem.Product.Price)
                                });
                            }
                            var cartModel = new ShoppingCartViewModel
                            {
                                CartId = cart.ShoppingCartId,
                                OrderId = 0,
                                DateCreated = DateTime.Now,
                                CartCount = cartItems.Count(),
                                CartSummary = userName + ": " + "Cart",
                                CartTotal = cart.GetTotal(),
                                CartItems = products
                            };
                            ViewBag.ShoppingCartViewModel = cartModel;
                            Debug.WriteLine("{0},{1},{2}", CartSessionKey.ToString(),
                                abstractContext.Session[CartSessionKey].ToString(),
                                abstractContext.User.Identity.Name.ToString());
                        }
                        else
                        {
                            var cartModel = new ShoppingCartViewModel
                            {
                                OrderId = 0,
                                CartItems = { },
                                DateCreated = DateTime.Now,
                                CartCount = 0,
                                CartSummary = "Cart Empty",
                                CartTotal = 0
                            };
                            ViewBag.ShoppingCartViewModel = cartModel;
                            Debug.WriteLine("{0},{1},{2}", CartSessionKey.ToString(),
                                abstractContext.Session[CartSessionKey].ToString(),
                                abstractContext.User.Identity.Name.ToString());
                        }
                    }
                }
                else
                {
                    var cartModel = new ShoppingCartViewModel
                    {
                        CartItems = { },
                        CartCount = 0,
                        CartSummary = "Cart Empty",
                        CartTotal = 0
                    };
                    ViewBag.ShoppingCartViewModel = cartModel;
                }
                ViewBag.StatusMessage = "";
                // save Settings to cookie
                Settings.UserId = userId;
                Settings.UserName = userName;
                Settings.UserRole = userRole;
                SaveSettingsToCookie(Settings);
            }
        }

        public static bool IsDebug()
        {
#if DEBUG
            return true;
#else
            return false;
#endif
        }

        public Event CreateEvent()
        {
            using (var db = new EntitiesContext())
            {
                // TODO - make date lookup live
                int eventYear = DateTime.Now.Year;
                int eventMonth = DateTime.Now.Month;
                int eventDayOfWeek = 6;
                int eventDayOfMonth = 14;
                int eventHour = 9; // based on 24 hour clock (add 12 for PM :)
                int eventMin = 0;
                int eventSec = 0;

                SqlParameter[] parameters1 =
                {
                    new SqlParameter("aDate", DateTime.Now),
                    new SqlParameter("dayofweek", eventDayOfWeek)
                };
                eventDayOfMonth = this.SqlScalarResult<int>(db, "func_GetSaturdayDOM", parameters1);

                SqlParameter[] parameters2 =
                {
                    new SqlParameter("Year", eventYear),
                    new SqlParameter("Month", eventMonth),
                    new SqlParameter("DayOfMonth", eventDayOfMonth),
                    new SqlParameter("Hour", eventHour),
                    new SqlParameter("Min", eventMin),
                    new SqlParameter("Sec", eventSec)
                };
                var eventDateTime = this.SqlScalarResult<DateTime>(db, "func_DateFromParts", parameters2);

                Event appEvent = db.Events.FirstOrDefault(e => e.EventDateTime == eventDateTime);
                // Event appEvent = db.Events.FirstOrDefault(e => e.EventId == 34);
                if (appEvent == null)
                {
                    appEvent = db.Events.Create();
                    appEvent.UserId = this.Settings.UserId;
                    appEvent.EventName = "Wren Thicket Market " + String.Format("{0:F}", eventDateTime);
                    appEvent.EventDateTime = eventDateTime;
                    appEvent.OrderingStartDateTime =
                        db.Database.SqlQuery<DateTime>(
                            "SELECT DATEADD(HOUR, +8, DATEADD(WEEK, DATEDIFF(WEEK, 0, GETDATE()), 0))").FirstOrDefault();
                    appEvent.OrderingEndDateTime =
                        db.Database.SqlQuery<DateTime>(
                            "SELECT DATEADD(HOUR, +12, DATEADD(DAY, +3, DATEADD(WEEK, DATEDIFF(WEEK, 0, GETDATE()), 0)))")
                            .FirstOrDefault();
                    appEvent.EventStartDateTime =
                        db.Database.SqlQuery<DateTime>(
                            "SELECT DATEADD(HOUR, +8, DATEADD(DAY, +5, DATEADD(WEEK, DATEDIFF(WEEK, 0, GETDATE()), 0)))")
                            .FirstOrDefault();
                    appEvent.EventEndDateTime =
                        db.Database.SqlQuery<DateTime>(
                            "SELECT DATEADD(HOUR, +12, DATEADD(DAY, +5, DATEADD(WEEK, DATEDIFF(WEEK, 0, GETDATE()), 0)))")
                            .FirstOrDefault();
                    db.Entry(appEvent).State = EntityState.Added;
                }
                db.SaveChanges();
                return appEvent;
            }
        }

        public T SqlScalarResult<T>(System.Data.Entity.DbContext db, string function, System.Data.SqlClient.SqlParameter[] parameters)
        {

            List<string> functionArgs = new List<string>();
            foreach (System.Data.SqlClient.SqlParameter parameter in parameters)
            {
                functionArgs.Add("@" + parameter.ParameterName);
            }
            string sql = string.Format("SELECT dbo.{0}({1});", function, string.Join(",", functionArgs));

            return (T)db.Database.SqlQuery<T>(sql, parameters).FirstOrDefault();

        }
        public void SaveSettingsToCookie(UserSettings settings)
        {
            if (settings != null)
            {
                // StoreFrontViewModel
                this.StoreFrontViewModel.SearchTypeId = settings.SearchTypeId;
                this.StoreFrontViewModel.CategoryId = settings.CategoryId;
                this.StoreFrontViewModel.PartnerId = settings.PartnerId;
                ViewBag.StoreFrontViewModel = this.StoreFrontViewModel;
                HttpCookie usCookie = new HttpCookie("UserSettings");
                usCookie.Values["UserId"] = settings.UserId.ToString();
                usCookie.Values["UserName"] = settings.UserName;
                usCookie.Values["UserRole"] = settings.UserRole;
                usCookie.Values["LastVisit"] = DateTime.Now.ToString();
                usCookie.Values["SearchTypeId"] = settings.SearchTypeId.ToString();
                usCookie.Values["CategoryId"] = settings.CategoryId.ToString();
                usCookie.Values["PartnerId"] = settings.PartnerId.ToString();
                usCookie.Values["ProductId"] = settings.ProductId.ToString();
                usCookie.Values["StoryId"] = settings.StoryId.ToString();
                usCookie.Values["EditTypeId"] = settings.EditTypeId.ToString();
                usCookie.Values["EditCategoryId"] = settings.EditCategoryId.ToString();
                usCookie.Values["EditPartnerId"] = settings.EditPartnerId.ToString();
                usCookie.Values["EditProductId"] = settings.EditProductId.ToString();
                usCookie.Values["ShowHidden"] = settings.ShowHidden.ToString();
                usCookie.Values["EditUserIndex"] = settings.EditUserIndex;
                usCookie.Values["EditProductIndex"] = settings.EditProductIndex;
                usCookie.Expires = DateTime.Now.AddDays(365);
                HttpContextBase abstractContext = new HttpContextWrapper(System.Web.HttpContext.Current);
                HttpResponseBase response = abstractContext.Response;
                response.Cookies.Add(usCookie);
                // write session
                var searchList = new List<string> { settings.SearchTypeId.ToString(), settings.CategoryId.ToString(), settings.PartnerId.ToString() };
                System.Web.HttpContext.Current.Session["UserSettings"] = searchList;
            }
        }

        public UserSettings GetSettingsFromCookie()
        {
            UserSettings settings = new UserSettings();
            HttpContextBase abstractContext = new HttpContextWrapper(System.Web.HttpContext.Current);
            HttpRequestBase request = abstractContext.Request;
            HttpServerUtilityBase server = abstractContext.Server;
            if (request != null)
            {
                if (request.Cookies["UserSettings"] != null)
                {
                    settings.UserId = Convert.ToInt32(server.HtmlEncode(request.Cookies["UserSettings"]["UserId"]));
                    settings.UserName = server.HtmlEncode(request.Cookies["UserSettings"]["UserName"]);
                    settings.UserRole = server.HtmlEncode(request.Cookies["UserSettings"]["UserRole"]);
                    settings.LastVisit = Convert.ToDateTime(server.HtmlEncode(request.Cookies["UserSettings"]["LastVisit"]));
                    settings.SearchTypeId = Convert.ToInt32(server.HtmlEncode(request.Cookies["UserSettings"]["SearchTypeId"]));
                    settings.CategoryId = Convert.ToInt32(server.HtmlEncode(request.Cookies["UserSettings"]["CategoryId"]));
                    settings.PartnerId = Convert.ToInt32(server.HtmlEncode(request.Cookies["UserSettings"]["PartnerId"]));
                    settings.ProductId = Convert.ToInt32(server.HtmlEncode(request.Cookies["UserSettings"]["ProductId"]));
                    settings.StoryId = Convert.ToInt32(server.HtmlEncode(request.Cookies["UserSettings"]["StoryId"]));
                    settings.EditTypeId = Convert.ToInt32(server.HtmlEncode(request.Cookies["UserSettings"]["EditTypeId"]));
                    settings.EditCategoryId = Convert.ToInt32(server.HtmlEncode(request.Cookies["UserSettings"]["EditCategoryId"]));
                    settings.EditPartnerId = Convert.ToInt32(server.HtmlEncode(request.Cookies["UserSettings"]["EditPartnerId"]));
                    settings.EditProductId = Convert.ToInt32(server.HtmlEncode(request.Cookies["UserSettings"]["EditProductId"]));
                    settings.ShowHidden = Convert.ToBoolean(server.HtmlEncode(request.Cookies["UserSettings"]["ShowHidden"]));
                    settings.EditUserIndex = server.HtmlEncode(request.Cookies["UserSettings"]["EditUserIndex"]);
                    settings.EditProductIndex = server.HtmlEncode(request.Cookies["UserSettings"]["EditProductIndex"]);
                }
                else
                {
                    settings.UserId = 0;
                    settings.UserName = "";
                    settings.UserRole = "";
                    settings.SearchTypeId = -1;
                    settings.CategoryId = 1;
                    settings.PartnerId = 1;
                    settings.ProductId = 0;
                    settings.StoryId = 0;
                    settings.EditTypeId = 0;
                    settings.EditCategoryId = 0;
                    settings.EditPartnerId = 0;
                    settings.EditProductId = 0;
                    settings.ShowHidden = false;
                    settings.EditUserIndex = "A";
                    settings.EditProductIndex = "A";
                }
            }
            // read
            if (System.Web.HttpContext.Current.Session["UserSettings"] == null)
            {
                settings.SearchTypeId = -1;
                settings.CategoryId = 1;
                settings.PartnerId = 1;
            }
            else
            {
                var searchList = (List<string>)System.Web.HttpContext.Current.Session["UserSettings"];
                settings.SearchTypeId = Convert.ToInt32(searchList[0]);
                settings.CategoryId = Convert.ToInt32(searchList[1]);
                settings.PartnerId = Convert.ToInt32(searchList[2]);
            }
            Debug.WriteLine("GetSettings");
            using (var db = new EntitiesContext())
            {
                // StoreFrontViewModel
                this.StoreFrontViewModel.SearchTypeId = settings.SearchTypeId;
                this.StoreFrontViewModel.CategoryId = settings.CategoryId;
                this.StoreFrontViewModel.PartnerId = settings.PartnerId;
                this.StoreFrontViewModel.Categories = null;
                this.StoreFrontViewModel.Partners = null;
                this.StoreFrontViewModel.Stories = null;
                this.StoreFrontViewModel.Categories = new List<ContentItem>();
                int sortOrder = 1;
                var categories = db.Categories.Where(a => a.Status == PartnerStatus.Active).OrderBy(a => a.Name).ToList();
                foreach (var category in categories)
                {
                    this.StoreFrontViewModel.Categories.Add(new ContentItem
                    {
                        Id = category.CategoryId,
                        Name = category.Name,
                        ParentId = 0,
                        SortOrder = sortOrder++,
                        View = "GetProducts",
                        Controller = "Home"
                    });
                }
                this.StoreFrontViewModel.Partners = new List<ContentItem>();
                sortOrder = 1;
                var partners =
                    db.Partners.Where(p => p.PartnerType == PartnerType.Partner)
                        .Where(p => p.Status == PartnerStatus.Active)
                        .OrderBy(a => a.Name)
                        .ToList();
                foreach (var partner in partners)
                {
                    this.StoreFrontViewModel.Partners.Add(new ContentItem
                    {
                        Id = partner.PartnerId,
                        Name = partner.Name,
                        ParentId = 1,
                        SortOrder = sortOrder++,
                        View = "GetProducts",
                        Controller = "Home"
                    });
                }
                this.StoreFrontViewModel.Stories = new List<ContentItem>();
                sortOrder = 1;
                int storyId = 0;
                var stories = db.Stories
                    .Where(s => s.Status == PartnerStatus.Active)
                    .OrderByDescending(s => s.StoryDateTime).ToList();
                foreach (var story in stories)
                {
                    this.StoreFrontViewModel.Stories.Add(new ContentItem
                    {
                        Id = story.StoryId,
                        Name = story.Headline,
                        ParentId = 1,
                        SortOrder = sortOrder++,
                        View = "GetStory",
                        Controller = "Home"
                    });
                    if (storyId < story.StoryId) storyId = story.StoryId;
                }
                this.StoreFrontViewModel.CurrentPost = db.Stories.Find(storyId);
                return settings;
            }
        }

        public bool AddContainerAsync(string containerName, int partnerId)
        {
            BlobServiceClient blobServiceClient = new BlobServiceClient(
                                    ConfigurationManager.AppSettings["CloudStorageConnectionString"]);

            // Retrieve a reference to a container. 
            BlobContainerClient container = blobServiceClient.GetBlobContainerClient(containerName);
            container.CreateIfNotExists();

            if (container.Name == containerName)
            {
                return true;
            }
            return false;
        }

        public string CheckContainer(string containerName, int partnerId)
        {
            BlobServiceClient blobServiceClient = new BlobServiceClient(
                                    ConfigurationManager.AppSettings["CloudStorageConnectionString"]);

            // Retrieve a reference to a container. 
            BlobContainerClient container = blobServiceClient.GetBlobContainerClient(containerName);
             container.CreateIfNotExists();
            
            BlobContainerPermissions blobContainerPermissions = new BlobContainerPermissions();
            blobContainerPermissions.PublicAccess = BlobContainerPublicAccessType.Container;
            IEnumerable<BlobItem> blobItems = container.GetBlobs(traits: BlobTraits.Metadata);
            

                 if(blobItems.Any())
                {
                    
                        // Gets the base URI for the Blob service client at the primary location.
                        string srcUri = blobServiceClient.Uri.ToString();
                        string srcDnsSafeHost = blobServiceClient.Uri.DnsSafeHost;
                        Debug.WriteLine(string.Format("CloudBlobClient {0}, {1}", srcDnsSafeHost, srcUri));
                        Debug.WriteLine(string.Format("CloudBlobClient IsLoopback: {0}, IsDefaultPort: {1}, IsAbsoluteUri: {2}, IsFile: {3}, IsUnc: {4}", blobServiceClient.Uri.IsLoopback, blobServiceClient.Uri.IsDefaultPort, blobServiceClient.Uri.IsAbsoluteUri, blobServiceClient.Uri.IsFile, blobServiceClient.Uri.IsUnc));
                        return srcUri;
                    
                }
                else
                {
                    return null;
                }

        }

        public List<int> GetContentListIds(string contentList)
        {
            List<int> idList = new List<int>();

            if ((!string.IsNullOrEmpty(contentList) && (!string.IsNullOrEmpty(contentList))))
            {
                contentList = contentList.Replace("ContentList: ", "");
                String[] contentPhotosList = contentList.Split(Convert.ToChar(";"));
                for (int i = 0; i < contentPhotosList.Length - 1; i++)
                {
                    String[] temp = contentPhotosList[i].Split(Convert.ToChar(","));
                    int tempId = Convert.ToInt32(temp[0]);
                    idList.Add(tempId);
                }
            }

            return idList;
        }

        public List<DisplayPhotoModel> GetDisplayPhotoList(IQueryable<Photo> photos, string blobSrcUri, string containerName, bool partnerPhoto = false)
        {
            List<DisplayPhotoModel> photoList = new List<DisplayPhotoModel>();
            int i = 1;
            foreach (var p in photos)
            {
                if (partnerPhoto == true)
                {
                    if (p.PartnerPhoto == true)
                    {
                        DisplayPhotoModel dp = new DisplayPhotoModel
                        {
                            Id = p.Id,
                            PartnerId = p.PartnerId,
                            DisplayOrder = p.DisplayOrder,
                            PartnerPhoto = p.PartnerPhoto,
                            ContainerName = containerName,
                            FileName = p.FileName,
                            FileTimeStamp = p.FileTimeStamp,
                            LongDescription = p.LongDescription,
                            ShortDescription = p.ShortDescription,
                            Uri = blobSrcUri + containerName + "/" + p.FileName
                        };
                        photoList.Add(dp);
                        Debug.WriteLine(string.Format("DisplayPhoto: {0}, {1}, {2}, {3}", i++, dp.Uri, dp.FileName, dp.Id));
                    }
                }
                else
                {
                    DisplayPhotoModel dp = new DisplayPhotoModel
                    {
                        Id = p.Id,
                        PartnerId = p.PartnerId,
                        DisplayOrder = p.DisplayOrder,
                        PartnerPhoto = p.PartnerPhoto,
                        ContainerName = containerName,
                        FileName = p.FileName,
                        FileTimeStamp = p.FileTimeStamp,
                        LongDescription = p.LongDescription,
                        ShortDescription = p.ShortDescription,
                        Uri = blobSrcUri + containerName + "/" + p.FileName
                    };
                    photoList.Add(dp);
                    Debug.WriteLine(string.Format("DisplayPhoto: {0}, {1}, {2}, {3}", i++, dp.Uri, dp.FileName, dp.Id));
                }
            }
            return photoList;
        }

        public List<string> GetBlobFileList(string containerName, int partnerId)
        {
            //Parse a connection string and return a reference to the storage account.
            BlobServiceClient blobServiceClient = new BlobServiceClient(ConfigurationManager.AppSettings["CloudStorageConnectionString"]);
  
            // Retrieve reference to a previously created container.
            string srcUri;
            srcUri = blobServiceClient.Uri + containerName + "/" + "blob.Name";
            Debug.WriteLine("BaseController::srcUri {0}", srcUri);
            BlobContainerClient container = blobServiceClient.GetBlobContainerClient(containerName);
            // useFlatBlobListing is true to ensure loading all files in
            // virtual blob sub-folders as a plain list
            var blobItems = container.GetBlobs(traits: BlobTraits.Metadata);
            var listOfFileNames = new List<string>();

            foreach (var blob in blobItems)
            {
                var blobFileName = blobServiceClient.Uri.Segments.Last().Replace("%20", " ");
                listOfFileNames.Add(blobFileName);
            }

            List<string> photosList = container.GetBlobs().Select(b => blobServiceClient.Uri.ToString()).ToList();

            // get photo records names

            return photosList;
        }

        public void SynchPhotosSetAndStorageBlobs()
        {
            using (var db = new EntitiesContext())
            {
                int id = 1;
                Product product = db.Products.Find(id);
                if (product == null)
                {
                }
                ViewBag.CategoryNames = new SelectList(db.Categories, "CategoryId", "Name");
                ViewBag.PartnerNames = new SelectList(db.Partners, "PartnerId", "Name");
                // TODO cleanup photo handling here
                Partner partner = db.Partners.Find(product.PartnerId);
                string containerName = partner.ContainerName;
                
                // get blob names
                List<string> blobPhotosList = this.GetBlobFileList(containerName, product.Partner.PartnerId);
                // get photo records names
                List<Photo> partnerPhotos = (from p in db.Photos where p.PartnerId > 0 select p).ToList();
                List<DisplayPhotoModel> storePhotos = new List<DisplayPhotoModel>();
                foreach (var photoRec in partnerPhotos)
                {
                    foreach (var blobName in blobPhotosList)
                    {
                        if (blobName == photoRec.Uri)
                        {
                            DisplayPhotoModel sp = new DisplayPhotoModel();
                            sp.Id = photoRec.Id;
                            sp.PartnerId = photoRec.PartnerId;
                            sp.ProductId = id;
                            sp.PartnerPhoto = false;
                            sp.ContainerName = containerName;
                            sp.FileName = photoRec.FileName;
                            sp.FileTimeStamp = photoRec.FileTimeStamp;
                            sp.LongDescription = photoRec.LongDescription;
                            sp.ShortDescription = photoRec.ShortDescription;
                            sp.Uri = photoRec.Uri;
                            storePhotos.Add(sp);
                        }
                    }
                }
                var model = new ProductPhotosViewModel
                {
                    Product = product,
                    Photos = storePhotos
                };
            }
        }

        // New Personal Telmetry Home Page WebApp ContentItems
        private static List<ContentItem> DefaultContentItems(EntitiesContext context, bool on = true)
        {
            if (on)
            {
                /*
                var contents = new List<ContentItem>
                {
                    // Main menu
                    new ContentItem { Id = 1, Name = "Home", ParentId = 0, SortOrder = 1, View = "Home", Controller = "Company", ContentType = 0 },
                    new ContentItem { Id = 11, Name = "People", ParentId = 1, SortOrder = 1, View = "People", Controller = "Company", ContentType = 0 },
                    new ContentItem { Id = 12, Name = "Technology", ParentId = 1, SortOrder = 2, View = "Technology", Controller = "Company", ContentType = 0 },
                    new ContentItem { Id = 13, Name = "Services", ParentId = 1, SortOrder = 3, View = "Services", Controller = "Company", ContentType = 0 },
                    new ContentItem { Id = 2, Name = "OpenLayers Demos", ParentId = 0, SortOrder = 2, View = "OpenLayersDemos", Controller = "Company", ContentType = CoPilot.Models.ContentType.Html },
                    new ContentItem { Id = 21, Name = "OpenLayers Demo One", ParentId = 2, SortOrder = 1, View = "OpenLayersDemoOne", Controller = "Company", ContentType = CoPilot.Models.ContentType.OpenLayers }
                };
                 */
            }
            var contents = context.ContentItems.ToList();
            return contents;
        }

        public IList<ContentItem> MartketCotentItems(bool administrator, bool authenticated, string username)
        {
            IList<ContentItem> actions = new List<ContentItem>();
            // Main menu
            actions.Add(new ContentItem { Id = 1, Name = "Home", ParentId = 0, SortOrder = 1, View = "Index", Controller = "Home" });
            actions.Add(new ContentItem { Id = 2, Name = "About", ParentId = 0, SortOrder = 2, View = "About", Controller = "Home" });
            actions.Add(new ContentItem { Id = 4, Name = "Account", ParentId = 0, SortOrder = 4, View = "Index", Controller = "Home" });
            // Home child menu
            /*
            actions.Add(new ContentItem { Id = 11, Name = "Home", ParentId = 1, SortOrder = 1, View = "Home", Controller = "Company" });
            actions.Add(new ContentItem { Id = 12, Name = "People", ParentId = 1, SortOrder = 2, View = "People", Controller = "Company" });
            actions.Add(new ContentItem { Id = 13, Name = "Technology", ParentId = 1, SortOrder = 3, View = "Technology", Controller = "Company" });
            actions.Add(new ContentItem { Id = 15, Name = "Services", ParentId = 1, SortOrder = 4, View = "Services", Controller = "Company" });
            */
            // About child menu
            actions.Add(new ContentItem { Id = 21, Name = "Market", ParentId = 2, SortOrder = 1, View = "About", Controller = "Home" });
            actions.Add(new ContentItem { Id = 23, Name = "Partners", ParentId = 2, SortOrder = 3, View = "Partners", Controller = "Home" });
            actions.Add(new ContentItem { Id = 24, Name = "FAQs", ParentId = 2, SortOrder = 4, View = "FAQs", Controller = "Home" });
            actions.Add(new ContentItem { Id = 25, Name = "Contact", ParentId = 2, SortOrder = 5, View = "Contact", Controller = "Home" });
            // Account child menu
            if (!authenticated)
            { // if we are not authenticated then Account Registration is our ownly option
                actions.Add(new ContentItem { Id = 42, Name = "Register", ParentId = 4, SortOrder = 1, View = "Register", Controller = "Account" });
                actions.Add(new ContentItem { Id = 42, Name = "Lost Password", ParentId = 4, SortOrder = 2, View = "LostPassword", Controller = "Account" });
            }
            else
            { // if we are authenticated then the Account can log off, manage itself, edit orders or see their cart
                actions.Add(new ContentItem { Id = 42, Name = "Edit Account", ParentId = 4, SortOrder = 1, View = "Edit", Controller = "Account" });
                actions.Add(new ContentItem { Id = 42, Name = "Change Password", ParentId = 4, SortOrder = 2, View = "ChangePassword", Controller = "Account" });
                actions.Add(new ContentItem { Id = 42, Name = "Lost Password", ParentId = 4, SortOrder = 2, View = "LostPassword", Controller = "Account" });
                actions.Add(new ContentItem { Id = 43, Name = "Orders", ParentId = 4, SortOrder = 3, View = "Index", Controller = "Order" });
                actions.Add(new ContentItem { Id = 45, Name = "Market Basket", ParentId = 4, SortOrder = 4, View = "Review", Controller = "Order" });
            }
            // Administration child menu
            if (administrator)
            { // if the user is an administrator they can edit the application data
                actions.Add(new ContentItem { Id = 5, Name = "Operations", ParentId = 0, SortOrder = 6, View = "Edit", Controller = "AppSettings" });
            }
            return actions;
        }

        public string CreateNewsLetter(int id)
        {
            // Retrieve storage account from connection string
            BlobServiceClient blobServiceClient = new BlobServiceClient(ConfigurationManager.AppSettings["CloudStorageConnectionString"]);
            string queueName = "sample-queue";
            // Create the queue client
            QueueClient queue = new QueueClient("CloudStorageConnectionString", queueName);

           
            // Create the queue if it doesn't already exist.
            queue.CreateIfNotExists();

            // Create a message and add it to the queue.
            queue.SendMessage(String.Format("NewsLetter-{0}", id));

            return "";
        }

        //ac
        // GET: /TestMenu/

        [AllowAnonymous]
        public ActionResult TestMenu()
        {
            List<object> movies;
            movies = new List<object>();

            movies.Add(new { Title = "Ghostbusters", Genre = "Comedy", Year = 1984 });
            movies.Add(new { Title = "Gone with Wind", Genre = "Drama", Year = 1939 });
            movies.Add(new { Title = "Star Wars", Genre = "Science Fiction", Year = 1977 });

            return Json(movies, JsonRequestBehavior.AllowGet);
        }

        public static DateTime CentralToUtc(DateTime dateTime)
        {
            return TimeZoneInfo.ConvertTimeToUtc(dateTime, TimeZoneInfo.Local);
        }

        public static DateTime UtcToCentral(DateTime dateTime)
        {
            return TimeZoneInfo.ConvertTimeFromUtc(dateTime, TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time"));
        }

        public static DateTime UtcToPacific(DateTime dateTime)
        {
            return TimeZoneInfo.ConvertTimeFromUtc(dateTime, TimeZoneInfo.FindSystemTimeZoneById("Pacific Standard Time"));
        }

        public bool IsBusinessOpen()
        {
            DateTime openDateTime = AppEvent.OrderingStartDateTime;
            DateTime closeDateTime = AppEvent.OrderingEndDateTime;
            DateTime workDateTime;
            if (IsDebug())
            {
                workDateTime = DateTime.Now;
            }
            else
            {
                workDateTime = UtcToCentral(DateTime.UtcNow);
            }
            if ((openDateTime <= workDateTime) && (workDateTime <= closeDateTime))
            {
                return true;
            }
            return false;
        }

        protected void SendEmail(string recipient, string subject, string body, string attachmentFilename, byte[] binaryFile = null, string mimeType = "")
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
                if ((binaryFile != null) && (mimeType != ""))
                {
                    MemoryStream memoryStream = new MemoryStream(binaryFile);
                    m.Attachments.Add(new Attachment(memoryStream, attachmentFilename, mimeType));
                    // FileStream fs = new FileStream(@"C:\Projects\Email Files\Wren Thicket Order Letter 2014-10-11-original.pdf", FileMode.Open, FileAccess.Read);
                    // Attachment a = new Attachment(fs, "Wren Thicket Order Letter 2014-10-11.pdf", MediaTypeNames.Application.Pdf);
                    // m.Attachments.Add(a);
                }
                // Create credentials, specifying your user name and password.
                sc.Credentials = new NetworkCredential(@"Wren Thicket", @"WtM@@2050");
                sc.Host = @"smtp.sendgrid.net";
                sc.Send(m);
                Debug.WriteLine($"Email send to {recipient} sucessfully");
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Email send failed {ex.Message.ToString()}");
            }
        }

        //
        // GET: /Story/ImageList

        public JsonResult ImageList()
        {
            List<ImageBrowser> imageList = new List<ImageBrowser>();
            using (var db = new EntitiesContext())
            {
                IEnumerable<Photo> photos = db.Photos.Include("Partner").OrderBy(p => p.Partner.Name).ThenBy(p => p.FileName).ToList();
                foreach (var photo in photos)
                {
                    ImageBrowser imageObject = new ImageBrowser();
                    string containerName = photo.ContainerName;
                    string folderName = photo.Partner.Name;
                    var outfileName = photo.Uri.ToString();
                    imageObject.image = $"{outfileName}";
                    outfileName = photo.Uri.ToString().Replace(photo.FileName, "thumb_" + photo.FileName);
                    imageObject.thumb = $"{outfileName}";
                    imageObject.folder = folderName;
                    imageList.Add(imageObject);
                }
            }
            return Json(imageList, JsonRequestBehavior.AllowGet);
        }
    }
}
