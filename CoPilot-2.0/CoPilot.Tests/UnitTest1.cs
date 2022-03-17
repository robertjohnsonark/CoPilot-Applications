using System;
using NUnit.Framework;

namespace CoPilot.Tests
{
    [SetUpFixture]
    class TestHost
    {
        [OneTimeSetUp]
        public static void SetUp()
        {
            System.Diagnostics.Debug.WriteLine("Config SetUp");
        }

        [OneTimeTearDown]
        public static void TearDown()
        {
            System.Diagnostics.Debug.WriteLine("Config TearDown");
        }
    }

    [TestFixture]
    public class UnitTest1
    {
        [Test]
        public void TestMethod1()
        {
            int[] array = new int[] { 1, 2, 3 };
            Assert.That(array, Has.Exactly(0).EqualTo(4));
            Assert.That(array, Has.Exactly(2).GreaterThan(1));
            Assert.That(array, Has.Exactly(3).LessThan(100));
        }

        [Test]
        public void TestMethod2()
        {
            Assert.AreEqual(4, 2 + 2);
            Assert.That(2 + 2, Is.EqualTo(4));
            int[] iarray = new int[] { 1, 2, 3 };
            string[] sarray = new string[] { "a", "b", "c" };
            Assert.That(iarray, Is.All.Not.Null);
            Assert.That(sarray, Is.All.InstanceOf<string>());
            Assert.That(iarray, Is.All.GreaterThan(0));
            Assert.That(iarray, Has.All.GreaterThan(0));
        }
    }
}
