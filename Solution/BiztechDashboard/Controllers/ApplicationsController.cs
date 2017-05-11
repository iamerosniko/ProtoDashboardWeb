using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BiztechDashboard.Models;
using System.Web;

namespace BiztechDashboard.Controllers
{
    public class ApplicationsController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();
        #region Admin Side
        public List<WDSB_Applications_DTO> GetWDSB_Applications()
        {
            //return db.WDSB_Applications;
            var a = from i in db.WDSB_Applications
                    select i;
            List<WDSB_Applications_DTO> apps = new List<WDSB_Applications_DTO>();

            foreach (var app in a)
            {
                apps.Add(new WDSB_Applications_DTO
                {
                    AppBU = app.AppBU,
                    AppDesc = app.AppDesc,
                    AppIconPath = app.AppIconPath,
                    AppID = app.AppID,
                    AppIsActive = app.AppIsActive,
                    AppIsWeb = (bool)app.AppIsWeb,
                    AppLifespan = (int)app.AppLifespan,
                    AppName = app.AppName,
                    AppPII = (bool)app.AppPII,
                    AppSecurity = app.AppSecurity,
                    AppVersion = app.AppVersion,
                    BackTechnology = app.BackTechnology,
                    DateImplemented = app.DateImplemented,
                    FrontTechnology = app.FrontTechnology,
                    IsUatAvail = (bool)app.IsUatAvail,
                    LastProdDate = app.LastProdDate,
                    PrimaryBUContact = app.PrimaryBUContact,
                    ProjectDevID = app.ProjectDevID,
                    ProjectModID = app.ProjectModID,
                    ProjectOpsID = app.ProjectOpsID,
                    SecondaryBUContact = app.SecondaryBUContact
                });
            }
            return apps;
        }

        // GET: api/Applications/5
        [ResponseType(typeof(WDSB_Applications_DTO))]
        public IHttpActionResult GetWDSB_Applications(int id)
        {
            WDSB_Applications wDSB_Applications = db.WDSB_Applications.Find(id);
            if (wDSB_Applications == null)
            {
                return Ok(new WDSB_Applications_DTO
                {
                    AppName = "",
                    FrontTechnology = "",
                    BackTechnology = "",
                    AppSecurity = "",
                    AppVersion = "",
                    AppDesc = "",
                    ProjectDevID = "",
                    ProjectModID = "",
                    ProjectOpsID = "",
                    AppIconPath = "",
                    AppIsActive = true,
                    SecondaryBUContact = null
                });
            }

            return Ok(wDSB_Applications);
        }

        // PUT: api/Applications/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWDSB_Applications(int id, WDSB_Applications wDSB_Applications)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wDSB_Applications.AppID)
            {
                return BadRequest();
            }

            db.Entry(wDSB_Applications).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WDSB_ApplicationsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Applications
        [ResponseType(typeof(WDSB_Applications))]
        public IHttpActionResult PostWDSB_Applications(WDSB_Applications wDSB_Applications)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WDSB_Applications.Add(wDSB_Applications);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = wDSB_Applications.AppID }, wDSB_Applications);
        }

        // DELETE: api/Applications/5
        [ResponseType(typeof(WDSB_Applications))]
        public IHttpActionResult DeleteWDSB_Applications(int id)
        {
            WDSB_Applications wDSB_Applications = db.WDSB_Applications.Find(id);
            if (wDSB_Applications == null)
            {
                return NotFound();
            }

            db.WDSB_Applications.Remove(wDSB_Applications);
            db.SaveChanges();

            return Ok(wDSB_Applications);
        }
        #endregion
       
        #region Client interface
        //gets all applications
        [Route("api/Applications/GetWDSB_ApplicationsClient")]
        public IOrderedEnumerable<WDSB_AppClient_VW_Result> GetWDSB_ApplicationsClient()
        {
            var a = from i in db.WDSB_AppClient_VW(getMyuserName())
                    select i;

            return a.OrderBy(x => x.AppName);
        }
        //gets your favorite app
        [Route("api/Applications/GetWDSB_FavApp")]
        public IOrderedEnumerable<WDSB_FavApp_VW_Result> GetWDSB_FavApp()
        {
            var a = from i in db.WDSB_FavApp_VW(getMyuserName())
                    select i;

            return a.OrderBy(x => x.AppName);
        }
        //gets your available apps only
        [Route("api/Applications/GetWDSB_AvailApp")]
        public IOrderedEnumerable<WDSB_AvailApp_VW_Result> GetWDSB_AvailApp()
        {
            var a = from i in db.WDSB_AvailApp_VW(getMyuserName())
                    select i;

            return a.OrderBy(x => x.AppName);
        }
        //gets your available apps only
        [Route("api/Applications/GetWDSB_AppDetail")]
        public IEnumerable<WDSB_AppDetails_VW_Result> GetWDSB_AppDetail(int appID)
        {
            var a = from i in db.WDSB_AppDetails_VW(getMyuserName(), appID)
                    select i;
            return a;
        }
        //gets the current user's username
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
        #endregion




        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WDSB_ApplicationsExists(int id)
        {
            return db.WDSB_Applications.Count(e => e.AppID == id) > 0;
        }
    }
}