﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace CoPilot.Source
{
	public static class ListExtensionMethods
	{
		public static ICollection<T> ShuffleList<T>(this ICollection<T> list)
		{
			return list.OrderBy( x => Guid.NewGuid()).ToList();
		}
	}
}