
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace CvCreator.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        public CustomersController()
        {
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        public IEnumerable<string> GetEnumerable() => new string[] { "John Doe", "Jane Doe" };


    }
}