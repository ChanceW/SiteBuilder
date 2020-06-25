namespace SiteBuilder.Models 
{
    public class Account
    {
        public Account()
        {
            Email = string.Empty;
            Password = string.Empty;
        }

        public int Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }
    }
}