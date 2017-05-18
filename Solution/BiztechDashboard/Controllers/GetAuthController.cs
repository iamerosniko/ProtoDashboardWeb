using BiztechDashboard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;
namespace BiztechDashboard.Controllers
{
    public class GetAuthController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();
        // GET api/getauth/
        public WDSB_GetAuth_DTO Get()
        {
            string givenName = System.DirectoryServices.AccountManagement.UserPrincipal.Current.GivenName;
            string surname = System.DirectoryServices.AccountManagement.UserPrincipal.Current.Surname;
            string fullname = givenName.Trim() + " " + surname.Trim();
            var tempList = (from i in db.WDSB_GetAuth(getMyuserName(),"Maintenance")
                   select i).ToList();
            if (tempList.Count() == 0)
                return new WDSB_GetAuth_DTO
                {
                    CanAdd = false,
                    CanDelete = false,
                    CanEdit = false,
                    CanView = false,
                    FullName = fullname,
                    UserName=getMyuserName(),
                    Module=""
                };
            var temp = tempList[0];
            return new WDSB_GetAuth_DTO
            {
                CanAdd = temp.CanAdd,
                CanDelete = temp.CanDelete,
                CanEdit = temp.CanEdit,
                CanView = temp.CanView,
                FullName = fullname,
                UserName = temp.UserName,
                Module = temp.Module
            };
        }

        private string getMyuserName()
        {
            string currentDomainUser = HttpContext.Current.User.Identity.Name.ToString();
            //username only
            string currentUsername = currentDomainUser.Remove(0, currentDomainUser.IndexOf('\\') + 1);
                //WindowsIdentity.GetCurrent().Name;
            //Console.WriteLine(WindowsIdentity.GetCurrent().Name);
            //int index = currentDomainUser.IndexOf("\\" + currentUsername);
            //Domain Name only
            //string currentDomainname = (index < 0) ? currentDomainUser : currentDomainUser.Remove(index, currentUsername.Length + 1);
            return currentUsername;
        }
    }
}
