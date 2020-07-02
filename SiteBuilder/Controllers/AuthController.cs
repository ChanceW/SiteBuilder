using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SiteBuilder.Models;

namespace SiteBuilder.Controllers 
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase 
    {
        private readonly AccountContext _context;

        public AuthController(AccountContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("[action]")]
        public ActionResult<bool> Login([FromBody] Account account)
        {
            return account != null 
                && _context.Accounts.Any(a => a.Email.Equals(account.Email) && a.Password.Equals(account.Password));
        }
    }
}