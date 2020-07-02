using System.Collections.Generic;
using System.Linq;
using SiteBuilder.Models.Admin;

namespace SiteBuilder.Models.Messages
{
    public class GetAccountsRequest : MessageRequest<Account>
    {
        public GetAccountsRequest() : base()
        {
        }
    }
}