using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using CoPilot.Models;
using WebMatrix.WebData;

namespace CoPilot
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            // WebApiConfig.Register(GlobalConfiguration.Configuration); // calls WebApiConfig.Register member function in App_Start\WebApiConfig.cs 
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters); // calls FilterConfig.RegisterGlobalFilters member function in App_Start\FilterConfig.cs
            RouteConfig.RegisterRoutes(RouteTable.Routes); // calls RouteConfig.RegisterRoutes member function in App_Start\RouteConfig.cs 
            BundleConfig.RegisterBundles(BundleTable.Bundles); // calls BundleConfig.RegisterBundles member function in App_Start\BundleConfig.cs
            AuthConfig.RegisterAuth(); // calls AuthConfig.RegisterAuth() member funtion in App_Start\AuthConfig.sys

            // Ensure ASP.NET Simple Membership is initialized only once per app start
            // Database.SetInitializer<EntitiesContext>(new SampleData());
            // System.Data.Entity.Database.SetInitializer(new CoPilot.Models.SampleData());
            using (var context = new EntitiesContext())
            {
                context.Database.Initialize(false);
                // DbInterception.Add(new NLogCommandInterceptor());
                if (!WebSecurity.Initialized)
                    WebSecurity.InitializeDatabaseConnection("EntitiesConnection", "UserProfiles", "UserId", "UserName", autoCreateTables: true);
                AppConfig.Configure(); // calls AppConfig.Configure() member funtion in App_Start\AppConfig.sys
            }
        }
    }
}
