using SiteBuilder.Models;
using System.Collections.Generic;
using System.Linq;

namespace SiteBuilder.Models.Messages
{
    public class MessageRequest<T> : IMessageRequest where T : IModel, new()
    {
        public MessageRequest()
        {
            this.Items = new List<T>();
        }

        public List<T> Items { get; private set; }

        public void SetRequestItems(IEnumerable<IModel> items)
        {
            this.Items = items as List<T>;
        }
    }
}