// =============================
// Email: admin@iotmap.net
// www.iotmap.net
// =============================

using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QuickApp.Pro.Helpers;
using QuickApp.Pro.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QuickApp.Pro.Controllers
{
    [Route("api/[controller]")]
    public class CustomerControllers : Controller
    {
        private readonly IUnitOfWork workUnit;
        private readonly ILogger log;
        private readonly IEmailSender emailSend;

        public CustomerControllers(ILogger<CustomerControllers> logger, IUnitOfWork unitOfWork, IEmailSender emailer)
        {
            workUnit = unitOfWork;
            log = logger;
            emailSend = emailer;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get(Mapper mapper)
        {
            var allCustomers = workUnit.Customers.GetAllCustomersData();
            return Ok(value: mapper.Map<IEnumerable<CustomerViewModel>>(allCustomers));
        }

        [HttpGet("throw")]
        public IEnumerable<CustomerViewModel> Throw()
        {
            throw new InvalidOperationException("This is a test exception: " + DateTime.Now);
        }

        [HttpGet("email")]
        public async Task<string> Email()
        {
            string recepientName = "QickApp Tester"; //         <===== Put the recepient's name here
            string recepientEmail = "test@ebenmonney.com"; //   <===== Put the recepient's email here

            string message = EmailTemplates.GetTestEmail(recepientName, DateTime.UtcNow);

            (bool success, string errorMsg) = await emailSend.SendEmailAsync(recepientName, recepientEmail, "Test Email from QuickApp", message);

            if (success)
                return "Success";

            return "Error: " + errorMsg;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value: " + id;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}