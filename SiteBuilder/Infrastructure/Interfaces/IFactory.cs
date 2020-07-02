namespace SiteBuilder.Infrastructure.Interfaces
{
    public interface IFactory<T>
    {
        T Create<TType>() where TType : class;
    }
}