using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Xml;
using RFApplication.DAL;
using RFApplication.Helpers;
using RFApplication.Models;
using SpreadsheetGear;

namespace RFUnitTestProject
{
    [TestClass]
    public class DataUnitTest
    {
/*
        [TestMethod]
        public void LoadAreas()
        {
            using (ApplicationDbContext sqlContext = new ApplicationDbContext())
            {
                string sSqlCommand = "TRUNCATE TABLE Areas";
                try
                {
                    sqlContext.Database.ExecuteSqlCommand(sSqlCommand);
                }
                catch (DbEntityValidationException ex)
                {
                    Debug.WriteLine(ex.Message);
                }
                var areas = new List<Area>
                {
                    // Areas
                    new Area { AreaId = 33, AreaName = "Donalsonville", City = "Donalsonville", State = "GA", Abbrev = "DGA", WeatherArea = "DGA", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/GA/Donalsonville.json" },
                    new Area { AreaId = 37, AreaName = "Live Oak", City = "Live Oak", State = "FL", Abbrev = "FL", WeatherArea = "FL", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/FL/Live_Oak.json" },
                    new Area { AreaId = 40, AreaName = "Plainfield", City = "Plainfield",State = "WI", Abbrev = "CSW", WeatherArea = "CSW", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/WI/Plainfield.json"},
                    new Area { AreaId = 42, AreaName = "Clear Lake", City = "Clear Lake",State = "MN", Abbrev = "MN", WeatherArea = "MN", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/MN/Clear_Lake.json"},
                    new Area { AreaId = 50, AreaName = "Scott", City = "Cabot", State = "AR", Abbrev = "ADS", WeatherArea = "ADS", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/AR/Cabot.json"},
                    new Area { AreaId = 51, AreaName = "Searcy", City = "Cabot", State = "AR", Abbrev = "ADF", WeatherArea = "ADS", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/AR/Cabot.json"},
                    new Area { AreaId = 60, AreaName = "Manito", City = "Manito", State = "IL", Abbrev = "MIL", WeatherArea = "MIL", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/IL/Manito.json"},
                    new Area { AreaId = 65, AreaName = "Upper Wabash Valley(Spring)", City = "Palestine", State = "IL", Abbrev = "WVS", WeatherArea = "WVS", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/IL/Palestine.json"},
                    new Area { AreaId = 69, AreaName = "Upper Wabash Valley(Fall)", City = "Palestine", State = "IL", Abbrev = "WVF", WeatherArea = "WVS", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/IL/Palestine.json"},
                    new Area { AreaId = 70, AreaName = "NW Arkansas", City = "Springdale", State = "AR", Abbrev = "NWA", WeatherArea = "NWA", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/AR/Springdale.json"},
                    new Area { AreaId = 75, AreaName = "SW Missouri", City = "Stark City", State = "MO", Abbrev = "SWM", WeatherArea = "SWM", Latitude = 36.50, Longitude = -96.50, WuUrl = "http://api.wunderground.com/api/b01c614a0e970cc7/yesterday/q/MO/Stark_City.json"}
                };

                areas.ForEach(s => sqlContext.Areas.Add(s));
                sqlContext.SaveChanges();
            }
        }

        [TestMethod]
        public void LoadPlantingSchedules()
        {
            using (ApplicationDbContext sqlContext = new ApplicationDbContext())
            {
                string sSqlCommand = "TRUNCATE TABLE Plantings";
                try
                {
                    sqlContext.Database.ExecuteSqlCommand(sSqlCommand);
                }
                catch (DbEntityValidationException ex)
                {
                    Debug.WriteLine(ex.Message);
                }
            }
            using (ApplicationDbContext sqlContext = new ApplicationDbContext())
            {
                try
                {
                    string tableName = "AreaGrowers";
                    // Fetch the table records dynamically
                    var tableData = sqlContext.GetType()
                                    .GetProperty(tableName)
                                    .GetValue(sqlContext, null);
                }
                catch (DbEntityValidationException ex)
                {
                    Debug.WriteLine(ex.Message);
                }
            }
        }


        [TestMethod]
        public void LoadGrowers()
        {
            using (ApplicationDbContext sqlContext = new ApplicationDbContext())
            {
                string sSqlCommand = "TRUNCATE TABLE Growers";
                try
                {
                    sqlContext.Database.ExecuteSqlCommand(sSqlCommand);
                }
                catch (DbEntityValidationException ex)
                {
                    Debug.WriteLine(ex.Message);
                }
            }
            string filename = @"C:\Projects\PersonalTelemetry\RFApplication\RFDataFiles\Growers.xlsx";
            IWorkbook workbook = Factory.GetWorkbook(filename);
            if (workbook != null)
            {
                IWorksheet worksheet = workbook.Worksheets["Growers"];
                if (worksheet != null)
                {
                    int iRow, iMaxRow;
                    List<string> columnNames = new List<string>();
                    iMaxRow = worksheet.UsedRange.RowCount;
                    Debug.WriteLine($"Worksheet: {iMaxRow}");
                    using (ApplicationDbContext sqlContext = new ApplicationDbContext())
                    {
                        for (iRow = 2; iRow <= iMaxRow; iRow++)
                        {
                            var area = worksheet.Cells["A" + iRow.ToString()].Value.ToString();
                            var growerName = worksheet.Cells["B" + iRow.ToString()].Value.ToString();
                            var growerId = worksheet.Cells["C" + iRow.ToString()].Value.ToString();
                            try
                            {
                                Grower g = new Grower();
                                g.AreaName = area;
                                g.GrowerName = growerName;
                                g.GrowerId = growerId;
                                sqlContext.Growers.Add(g);
                                sqlContext.SaveChanges();
                            }
                            catch (DbEntityValidationException ex)
                            {
                                Debug.WriteLine(ex.Message);
                            }
                        }
                    }
                }
            }
        }


        [TestMethod]
        public void LoadADSFieldGrades()
        {
            List<string> fieldUpdatesList = new List<string>();
            fieldUpdatesList.Add("2016-06-01 field_update.xlsx");
            fieldUpdatesList.Add("2016-06-02 field_update.xlsx");
            fieldUpdatesList.Add("2016-06-03 field_update.xlsx");
            fieldUpdatesList.Add("2016-06-04 field_update.xlsx");
            fieldUpdatesList.Add("2016-06-05 field_update.xlsx");
            fieldUpdatesList.Add("2016-06-06 field_update.xlsx");
            fieldUpdatesList.Add("2016-06-07 field_update.xlsx");
            fieldUpdatesList.Add("2016-06-08 field_update.xlsx");
            fieldUpdatesList.Add("2016-06-09 field_update.xlsx");
            fieldUpdatesList.Add("2016-06-10 field_update.xlsx");
            fieldUpdatesList.Add("2016-06-11 field_update.xlsx");
            using (ApplicationDbContext sqlContext = new ApplicationDbContext())
            {
                string sSqlCommand = "TRUNCATE TABLE BeanGrades";
                try
                {
                    sqlContext.Database.ExecuteSqlCommand(sSqlCommand);
                }
                catch (DbEntityValidationException ex)
                {
                    Debug.WriteLine(ex.Message);
                }
            }
            foreach (var filename in fieldUpdatesList)
            {
                string fullFilePath = @"C:\Projects\PersonalTelemetry\RFApplication\RFTestFiles\" + filename;
                bool success = BeanGradeRepository.LoadGradeReport(fullFilePath);
                if (!success)
                {
                    Debug.WriteLine($"Error Loading Grade File: {fullFilePath}");
                }
            }
        }

        [TestMethod]
        public void LoadAreaGrowers()
        {
            using (ApplicationDbContext sqlContext = new ApplicationDbContext())
            {
                string sSqlCommand = "TRUNCATE TABLE AreaGrowers";
                try
                {
                    sqlContext.Database.ExecuteSqlCommand(sSqlCommand);
                }
                catch (DbEntityValidationException ex)
                {
                    Debug.WriteLine(ex.Message);
                }
            }
            string filename = @"C:\Projects\PersonalTelemetry\RFApplication\RFDataFiles\Area-Grower-Field-Master.xlsx";
            IWorkbook workbook = Factory.GetWorkbook(filename);
            if (workbook != null)
            {
                IWorksheet worksheet = workbook.Worksheets["Area Growers"];
                if (worksheet != null)
                {
                    int iRow, iMaxRow, iCol, iMaxCol;
                    List<string> columnNames = new List<string>();
                    iMaxRow = worksheet.UsedRange.RowCount;
                    iMaxCol = worksheet.UsedRange.ColumnCount;
                    var sSqlStatement = @"insert into AreaGrowers(";
                    string dataValues = "";
                    Debug.WriteLine($"Worksheet: {iMaxRow}, {iMaxCol}");
                    for (int i = 0; i < 19; i++)
                    {
                        var header = worksheet.Cells[ExcelHelper.GetColumnName(i) + "1"].Value.ToString().Trim();
                        sSqlStatement += "[" + header + "]";
                        columnNames.Add(header);
                        if (i < 18)
                        {
                            sSqlStatement += ", ";
                        }
                        else { sSqlStatement += ") values("; }
                        // System.Diagnostics.Debug.WriteLine($"Header: {i}, [{header}]");
                    }
                    Debug.WriteLine($"SQL Statement: {sSqlStatement}");
                    using (ApplicationDbContext sqlContext = new ApplicationDbContext())
                    {
                        for (iRow = 2; iRow <= iMaxRow; iRow++)
                        {
                            dataValues = "";
                            for (iCol = 0; iCol < iMaxCol; iCol++)
                            {
                                string value = "";
                                if (worksheet.Cells[ExcelHelper.GetColumnName(iCol) + iRow.ToString()].Value != null)
                                {
                                    if (columnNames[iCol].ToLower().Contains("date"))
                                    {
                                        value = DateTime.FromOADate(Convert.ToDouble(worksheet.Cells[ExcelHelper.GetColumnName(iCol) + iRow.ToString()].Value)).ToShortDateString();
                                    }
                                    else
                                    {
                                        value = worksheet.Cells[ExcelHelper.GetColumnName(iCol) + iRow.ToString()].Value.ToString().Trim();
                                        value = value.Replace("'", "''");
                                    }
                                }
                                if (iCol < 18)
                                {
                                    dataValues += "'" + value + "',";
                                }
                                else { dataValues += "'" + value + "'" + ")"; }
                            }
                            string sSqlCommand = sSqlStatement + dataValues;
                            try
                            {
                                sqlContext.Database.ExecuteSqlCommand(sSqlCommand);
                            }
                            catch (DbEntityValidationException ex)
                            {
                                Debug.WriteLine(ex.Message);
                            }
                        }
                    }
                }
            }
        }

        [TestMethod]
        public void LoadAreaVarietyMetrics()
        {
            using (ApplicationDbContext sqlContext = new ApplicationDbContext())
            {
                string sSqlCommand = "TRUNCATE TABLE AreaVarietyMetrics";
                try
                {
                    sqlContext.Database.ExecuteSqlCommand(sSqlCommand);
                }
                catch (DbEntityValidationException ex)
                {
                    Debug.WriteLine(ex.Message);
                }
            }
            string filename = @"C:\Projects\PersonalTelemetry\RFApplication\RFDataFiles\AreaVarietyMetrics.xlsx";
            IWorkbook workbook = Factory.GetWorkbook(filename);
            if (workbook != null)
            {
                IWorksheet worksheet = workbook.Worksheets["Metrics"];
                if (worksheet != null)
                {
                    int iRow, iMaxRow, iCol, iMaxCol;
                    List<string> columnNames = new List<string>();
                    iMaxRow = worksheet.UsedRange.RowCount;
                    iMaxCol = worksheet.UsedRange.ColumnCount;
                    var sSqlStatement =
                        @"INSERT INTO [dbo].[AreaVarietyMetrics] ([Area], [Variety], [DaysToMaturity2014], [DaysToMaturity2015], [DaysToMaturityAvg], [HuToMaturity2014], [HuToMaturity2015], [HuToMaturityAvg]) VALUES (";
                    Debug.WriteLine($"Worksheet: {iMaxRow}, {iMaxCol}");
                    using (ApplicationDbContext sqlContext = new ApplicationDbContext())
                    {
                        for (iRow = 2; iRow <= iMaxRow; iRow++)
                        {
                            var area = worksheet.Cells["A" + iRow.ToString()].Value.ToString();
                            var variety = worksheet.Cells["B" + iRow.ToString()].Value.ToString();
                            var daysToMaturity2014 = Convert.ToInt32(worksheet.Cells["C" + iRow.ToString()].Value);
                            var daysToMaturity2015 = Convert.ToInt32(worksheet.Cells["E" + iRow.ToString()].Value);
                            var daysToMaturityAvg = Convert.ToInt32(worksheet.Cells["G" + iRow.ToString()].Value);
                            var huToMaturity2014 = Convert.ToDouble(worksheet.Cells["D" + iRow.ToString()].Value);
                            var huToMaturity2015 = Convert.ToDouble(worksheet.Cells["F" + iRow.ToString()].Value);
                            var huToMaturityAvg = Convert.ToDouble(worksheet.Cells["H" + iRow.ToString()].Value);
                            string sSqlCommand = sSqlStatement + $"'{area}','{variety}',{daysToMaturity2014},{daysToMaturity2015},{daysToMaturityAvg},{huToMaturity2014},{huToMaturity2015},{huToMaturityAvg})";
                            try
                            {
                                sqlContext.Database.ExecuteSqlCommand(sSqlCommand);
                            }
                            catch (DbEntityValidationException ex)
                            {
                                Debug.WriteLine(ex.Message);
                            }
                        }
                    }
                }
            }
        }
*/
    }
}