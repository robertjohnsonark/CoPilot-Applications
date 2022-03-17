// =============================
// Email: admin@iotmap.net
// www.iotmap.net
// =============================

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using QuickApp.Pro.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QuickApp.Pro.Controllers
{
    public interface ICustomerController
    {
        IEnumerable<CustomerViewModel> Throw { get; }

        void Delete(int id);
        
        Task<string> Email();
        
        IActionResult Get();
        string Get(int id);
        
        IActionResult Get(Mapper mapper);
        void Post([FromBody] string value);
        
        void Put(int id, [FromBody] string value);
        
        
    }
}