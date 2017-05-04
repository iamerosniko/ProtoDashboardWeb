using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BiztechDashboard.Models
{
    public class WDSB_Applications_DTO
    {
        public int AppID { get; set; }
        public string AppName { get; set; }
        public int AppBU { get; set; }
        public string FrontTechnology { get; set; }
        public string BackTechnology { get; set; }
        public int AppLifespan { get; set; }
        public int PrimaryBUContact { get; set; }
        public int SecondaryBUContact { get; set; }
        public bool AppIsActive { get; set; }
        public bool AppPII { get; set; }
        public string AppSecurity { get; set; }
        public Nullable<System.DateTime> DateImplemented { get; set; }
        public Nullable<System.DateTime> LastProdDate { get; set; }
        public string AppVersion { get; set; }
        public string AppDesc { get; set; }
        public bool AppIsWeb { get; set; }
        public string ProjectDevID { get; set; }
        public string ProjectModID { get; set; }
        public string ProjectOpsID { get; set; }
        public string AppIconPath { get; set; }
        public bool IsUatAvail { get; set; }
    }
}