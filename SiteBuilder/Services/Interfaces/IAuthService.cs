using System.Collections.Generic;
using SiteBuilder.Models.Admin;
using SiteBuilder.Models.Messages;

namespace SiteBuilder.Services.Interfaces
{
    public interface IAuthService
    {
        List<Account> Get();
        List<Account> Get(GetAccountsRequest request);
        void Save(SaveAccountsRequest request);
        bool TryLogin(Account account);
    }
}