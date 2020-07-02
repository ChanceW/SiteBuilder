using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace SiteBuilder.Models.Admin 
{
    public class Account : IModel
    {
        public Account()
        {
            Email = string.Empty;
            Password = string.Empty;
        }

        public int GetId()
        {
            return this.Id;
        }

        public int Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }
    }
}