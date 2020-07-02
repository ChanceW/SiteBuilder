using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SiteBuilder.Models.Admin;
using SiteBuilder.Data.Context;
using SiteBuilder.Services.Interfaces;
using SiteBuilder.Infrastructure.Factories;
using SiteBuilder.Models.Messages;

namespace SiteBuilder.Controllers 
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase 
    {
        private readonly IAuthService _authService;
        private readonly MessageRequestFactory requestFactory;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
            this.requestFactory = new MessageRequestFactory();
        }

        [HttpGet]
        public List<Account> Get()
        {
            var getRequest = (GetAccountsRequest)this.requestFactory.Create<GetAccountsRequest>();
            return _authService.Get();
        }

        [HttpPost]
        [Route("[action]")]
        public ActionResult<bool> Login([Bind("Email, Password")] Account account)
        {
           return _authService.TryLogin(account);
        }

        [HttpPost]
        [Route("[action]")]
        public ActionResult<bool> Save([Bind("Id, Email, Password")] Account account)
        {
           var saveRequest = (SaveAccountsRequest)this.requestFactory.Create<SaveAccountsRequest>();
           saveRequest.SetRequestItems(new List<Account> { account });
           _authService.Save(saveRequest);

           return true;
        }
    }
}