using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BiztechDashboard.Models
{
    public class WDSB_Features_DTO
    {
        public int FeatureID { get; set; }
        public int AppID { get; set; }
        public string Description { get; set; }
        public string FeatFunction { get; set; }
        public string ScreenshotPath { get; set; }
    }
}