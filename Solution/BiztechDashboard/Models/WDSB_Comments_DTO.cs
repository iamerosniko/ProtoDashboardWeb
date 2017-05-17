using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BiztechDashboard.Models
{
    public class WDSB_Comments_DTO
    {
        public int CommentID { get; set; }
        public int AppID { get; set; }
        public string Comment { get; set; }
        public string UserName { get; set; }
        public System.DateTime DatePosted { get; set; }
        public string Subject { get; set; }
    }
}