using System;
using System.Collections.Generic;
using System.Linq;

namespace CoPilot.Source
{
    public static class LinqHelper
    {
        public static IEnumerable<T> Randomize<T>(this IEnumerable<T> pCol)
        {
            List<T> lResults = new List<T>();
            List<T> iList = pCol.ToList();
            Random lRandom = new Random();
            int iPos = 0;

            while (iList.Count > 0)
            {
                iPos = lRandom.Next(iList.Count);
                lResults.Add(iList[iPos]);
                iList.RemoveAt(iPos);
            }

            return lResults;
        }
    }
}