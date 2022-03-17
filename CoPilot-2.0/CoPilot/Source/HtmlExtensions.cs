using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web.Mvc;
using System.Web.Mvc.Html;

namespace CoPilot.Source
{
    public static class HtmlExtensions
    {
        public static MvcHtmlString File(this HtmlHelper html, string name)
        {
            var tb = new TagBuilder("input");
            tb.Attributes.Add("type", "file");
            tb.Attributes.Add("name", name);
            tb.GenerateId(name);
            return MvcHtmlString.Create(tb.ToString(TagRenderMode.SelfClosing));
        }

        public static MvcHtmlString FileFor<TModel, TProperty>(this HtmlHelper<TModel> html, Expression<Func<TModel, TProperty>> expression)
        {
            string name = GetFullPropertyName(expression);
            return html.File(name);
        }

        static string GetFullPropertyName<T, TProperty>(Expression<Func<T, TProperty>> exp)
        {
            MemberExpression memberExp;

            if (!TryFindMemberExpression(exp.Body, out memberExp))
                return string.Empty;

            var memberNames = new Stack<string>();

            do
            {
                memberNames.Push(memberExp.Member.Name);
            }
            while (TryFindMemberExpression(memberExp.Expression, out memberExp));

            return string.Join(".", memberNames.ToArray());
        }

        static bool TryFindMemberExpression(Expression exp, out MemberExpression memberExp)
        {
            memberExp = exp as MemberExpression;

            if (memberExp != null)
                return true;

            if (IsConversion(exp) && exp is UnaryExpression)
            {
                memberExp = ((UnaryExpression)exp).Operand as MemberExpression;

                if (memberExp != null)
                    return true;
            }

            return false;
        }

        static bool IsConversion(Expression exp)
        {
            return (exp.NodeType == ExpressionType.Convert || exp.NodeType == ExpressionType.ConvertChecked);
        }

        public static MvcHtmlString StateDropDownListFor<TModel, TValue>(this HtmlHelper<TModel> html, Expression<Func<TModel, TValue>> expression)
        {
            Dictionary<string, string> stateList = new Dictionary<string, string>()
            {
                {"AL"," Alabama"},
                {"AK"," Alaska"},
                {"AZ"," Arizona"},
                {"AR"," Arkansas"},
                {"CA"," California"},
                {"CO"," Colorado"},
                {"CT"," Connecticut"},
                {"DE"," Delaware"},
                {"FL"," Florida"},
                {"GA"," Georgia"},
                {"HI"," Hawaii"},
                {"ID"," Idaho"},
                {"IL"," Illinois"},
                {"IN"," Indiana"},
                {"IA"," Iowa"},
                {"KS"," Kansas"},
                {"KY"," Kentucky"},
                {"LA"," Louisiana"},
                {"ME"," Maine"},
                {"MD"," Maryland"},
                {"MA"," Massachusetts"},
                {"MI"," Michigan"},
                {"MN"," Minnesota"},
                {"MS"," Mississippi"},
                {"MO"," Missouri"},
                {"MT"," Montana"},
                {"NE"," Nebraska"},
                {"NV"," Nevada"},
                {"NH"," New Hampshire"},
                {"NJ"," New Jersey"},
                {"NM"," New Mexico"},
                {"NY"," New York"},
                {"NC"," North Carolina"},
                {"ND"," North Dakota"},
                {"OH"," Ohio"},
                {"OK"," Oklahoma"},
                {"OR"," Oregon"},
                {"PA"," Pennsylvania"},
                {"RI"," Rhode Island"},
                {"SC"," South Carolina"},
                {"SD"," South Dakota"},
                {"TN"," Tennessee"},
                {"TX"," Texas"},
                {"UT"," Utah"},
                {"VT"," Vermont"},
                {"VA"," Virginia"},
                {"WA"," Washington"},
                {"WV"," West Virginia"},
                {"WI"," Wisconsin"},
                {"WY"," Wyoming"},
                {"AS"," American Samoa"},
                {"DC"," District of Columbia"},
                {"FM"," Federated States of Micronesia"},
                {"MH"," Marshall Islands"},
                {"MP"," Northern Mariana Islands"},
                {"PW"," Palau"},
                {"PR"," Puerto Rico"},
                {"VI"," Virgin Islands"},
                {"GU"," Guam"}
            };
            return html.DropDownListFor(expression, new SelectList(stateList, "key", "value"));
        }

       public static MvcHtmlString SubmitButton(this HtmlHelper helper, string name, string text, object htmlAttributes = null)
       {
            var attributes = HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttributes);
            var builder = new TagBuilder("input");

            if (htmlAttributes != null)
                builder.MergeAttributes(attributes);

            builder.Attributes.Add("type", "submit");
            builder.Attributes.Add("value", text);
            builder.Attributes.Add("name", name);
            builder.Attributes.Add("id", name);
            builder.AddCssClass("submit");
            return new MvcHtmlString(builder.ToString(TagRenderMode.SelfClosing));
        }
    
        public static MvcHtmlString EnumDropDownList<TEnum>(this HtmlHelper htmlHelper, string name, TEnum selectedValue)
        {
           IEnumerable<TEnum> values = Enum.GetValues(typeof(TEnum)).Cast<TEnum>();

           IEnumerable<SelectListItem> items = 
               from value in values
               select new SelectListItem
               {
                   Text = value.ToString(),
                   Value = value.ToString(),
                   Selected = (value.Equals(selectedValue))
               };

           return htmlHelper.DropDownList(
               name,
               items
               );
        }
    }
}