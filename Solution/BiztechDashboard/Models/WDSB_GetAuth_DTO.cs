using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BiztechDashboard.Models
{
    public class WDSB_GetAuth_DTO
    {
        public string UserName { get; set; }
        public string FullName { get; set; }
        public Nullable<bool> CanAdd { get; set; }
        public Nullable<bool> CanDelete { get; set; }
        public Nullable<bool> CanEdit { get; set; }
        public Nullable<bool> CanView { get; set; }
    }
}