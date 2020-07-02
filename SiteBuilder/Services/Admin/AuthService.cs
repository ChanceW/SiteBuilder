using SiteBuilder.Services.Interfaces;
using SiteBuilder.Data.Context;
using SiteBuilder.Models.Messages;
using SiteBuilder.Models.Admin;
using SiteBuilder.Extensions;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace SiteBuilder.Services.Admin
{
    public class AuthService : IAuthService
    {
        private readonly IServiceScopeFactory scopeFactory;

        public AuthService(IServiceScopeFactory scopeFactory)
        {
            this.scopeFactory = scopeFactory;
        }

        public List<Account> Get()
        {
            using (var scope = this.scopeFactory.CreateScope())
            {
                var adminCtx = scope.ServiceProvider.GetRequiredService<AdminContext>();
                return adminCtx.Accounts.ToList();
            }
        }

        public List<Account> Get(GetAccountsRequest request)
        {
            if(!request.Items.Any())
            {
                return this.Get();
            }

            using (var scope = this.scopeFactory.CreateScope())
            {
                var adminCtx = scope.ServiceProvider.GetRequiredService<AdminContext>();
                var accounts =  from acct in adminCtx.Accounts.AsNoTracking()
                                join item in request.Items on acct.Id equals item.Id
                                select acct;
                return accounts.ToList();
            }
        }

        public void Save(SaveAccountsRequest request)
        {
            using(var scope = this.scopeFactory.CreateScope())
            {
                var ctx = scope.ServiceProvider.GetRequiredService<AdminContext>();

                foreach(var acctToSave in request.Items)
                {
                    var acctEntity = ctx.Find<Account>(acctToSave.Id);
                    if(acctEntity == null)
                    {
                        continue;
                    }

                    acctEntity.Email = acctToSave.Email;
                    acctEntity.Password = acctToSave.Password;
                }

                ctx.SaveChanges();
            }

        }

        public bool TryLogin(Account account)
        {
            if (account == null)
            {
                return false;
            }

            using (var scope = this.scopeFactory.CreateScope())
            {
                var adminCtx = scope.ServiceProvider.GetRequiredService<AdminContext>();
                var acct = adminCtx.Accounts.AsNoTracking().FirstOrDefault(a => a.Email.ProperEquals(account.Email) && a.Password.ProperEquals(account.Password));

                return acct != null;
            }
        }
    }
}