using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BiztechDashboard.Models
{
    public class WDSB_ProjectUsers
    {
        public string ProjectID { get; set; }
        public string ProjectName { get; set; }
        public string ProjectDatasource { get; set; }
        public string ProjectDatabaseName { get; set; }
        public string ProjectUserID { get; set; }
        public string ProjectPassword { get; set; }
        public Nullable<bool> ProjectIsActive { get; set; }
        public int ProjectSyncStatus { get; set; }
    }
}