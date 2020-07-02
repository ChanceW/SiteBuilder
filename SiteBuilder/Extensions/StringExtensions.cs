namespace SiteBuilder.Extensions
{
    public static class StringExtensions
    {
        public static bool ProperEquals(this string input, string stringToCompareWith)
        {
            return string.Equals(input, stringToCompareWith, System.StringComparison.OrdinalIgnoreCase);
        }
    }
}