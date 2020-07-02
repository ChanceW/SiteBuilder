using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using SiteBuilder.Data.Context;
using SiteBuilder.Models.Admin;

namespace SiteBuilder.Helpers
{
    public static class DbHelper
    {
        public static void SeedAccounts(IServiceProvider service)
        {
            using(var scope = service.CreateScope())
            {
                using(var ctx = scope.ServiceProvider.GetRequiredService<AdminContext>())
                {
                    if(!ctx.Accounts.Any())
                    {
                        ctx.Accounts.Add(new Account {Email = "admin@admin.com", Password = "12345"});

                        var dummyAccounts = createAccounts();
                        ctx.Accounts.AddRange(dummyAccounts);

                        ctx.SaveChanges();
                    }
                }
            }
        }

        private static IEnumerable<Account> createAccounts()
        {
            for(int i = 0; i < 20; i++)
            {
                yield return new Account {Email = $"test{i}@site.com", Password = "12345"};
            }
        }
    }
}