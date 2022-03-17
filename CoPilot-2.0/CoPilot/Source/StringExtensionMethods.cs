using System.Text.RegularExpressions;

namespace RFWebApp.Extensions
{
	public static class StringExtensionMethods
	{
		public static string PascalCaseToPrettyString(this string s)
		{
			return Regex.Replace(s, @"(\B[A-Z]|[0-9]+)", " $1");
		}
	}
}