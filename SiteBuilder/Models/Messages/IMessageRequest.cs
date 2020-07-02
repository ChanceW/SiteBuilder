using System.Collections.Generic;
using SiteBuilder.Models;

namespace SiteBuilder.Models.Messages
{
    public interface IMessageRequest
    {
        void SetRequestItems(IEnumerable<IModel> items);
    }
}