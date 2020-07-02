using SiteBuilder.Infrastructure.Interfaces;
using SiteBuilder.Models.Messages;
using System;

namespace SiteBuilder.Infrastructure.Factories
{
    public class MessageRequestFactory : IFactory<IMessageRequest>
    {
        public MessageRequestFactory()
        {
        }

        public IMessageRequest Create<TType>() where TType : class
        {
            if(typeof(TType) == typeof(GetAccountsRequest))
            {
                return (IMessageRequest)new GetAccountsRequest();
            }
            if(typeof(TType) == typeof(SaveAccountsRequest))
            {
                return (IMessageRequest)new SaveAccountsRequest();
            }

            throw new NotImplementedException($"Type {typeof(TType)} has not been implemented in this factory.");
        }
    }
}