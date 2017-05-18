using BiztechDashboard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace BiztechDashboard.Controllers
{
    public class GetAuthController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();
        // GET api/getauth/
        public WDSB_GetAuth_Result Get()
        {
            return (from i in db.WDSB_GetAuth(getMyuserName(),"Maintenance")
                   select i).First();
        }

        private string getMyuserName()
        {
            string currentDomainUser = HttpContext.Current.User.Identity.Name.ToString();
            //username only
            string currentUsername = currentDomainUser.Remove(0, currentDomainUser.IndexOf('\\') + 1);
            //int index = currentDomainUser.IndexOf("\\" + currentUsername);
            //Domain Name only
            //string currentDomainname = (index < 0) ? currentDomainUser : currentDomainUser.Remove(index, currentUsername.Length + 1);
            return currentUsername;
        }
    }
}
