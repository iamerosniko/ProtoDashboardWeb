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
    public class AppusersController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET api/Appusers
        public IQueryable<WDSB_AppUsers> GetWDSB_AppUsers()
        {
            return db.WDSB_AppUsers;
        }

        // GET api/Appusers/5
        [ResponseType(typeof(WDSB_AppUsers))]
        public IHttpActionResult GetWDSB_AppUsers(Guid id)
        {
            WDSB_AppUsers wdsb_appusers = db.WDSB_AppUsers.Find(id);
            if (wdsb_appusers == null)
            {
                return NotFound();
            }

            return Ok(wdsb_appusers);
        }

        [Route("api/Appusers/GetAuth")]
        public WDSB_Auth GetAuth(string projectID)
        {
            string currentDomainUser = HttpContext.Current.User.Identity.Name.ToString();
            //username only
            string currentUsername = currentDomainUser.Remove(0, currentDomainUser.IndexOf('\\') + 1);
            int index = currentDomainUser.IndexOf("\\" + currentUsername);
            //Domain Name only
            string currentDomainname = (index < 0) ? currentDomainUser : currentDomainUser.Remove(index, currentUsername.Length + 1);
            bool isAuth = false;
            var appUsers = from i in db.WDSB_AppUsers
                           where i.ProjectID == projectID
                           where i.UserName == currentUsername
                           select i;
            if (appUsers.Count() > 0)
                isAuth = true;
            return new WDSB_Auth
            {
                isAuth = isAuth
            };
        }


        // PUT api/Appusers/5
        public IHttpActionResult PutWDSB_AppUsers(Guid id, WDSB_AppUsers wdsb_appusers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wdsb_appusers.AppUserID)
            {
                return BadRequest();
            }

            db.Entry(wdsb_appusers).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WDSB_AppUsersExists(id))
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

        // POST api/Appusers
        [ResponseType(typeof(WDSB_AppUsers))]
        public IHttpActionResult PostWDSB_AppUsers(WDSB_AppUsers wdsb_appusers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WDSB_AppUsers.Add(wdsb_appusers);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (WDSB_AppUsersExists(wdsb_appusers.AppUserID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = wdsb_appusers.AppUserID }, wdsb_appusers);
        }

        // DELETE api/Appusers/5
        [ResponseType(typeof(WDSB_AppUsers))]
        public void DeleteWDSB_AppUsers()
        {
            List<WDSB_AppUsers> wdsb_appusers = db.WDSB_AppUsers.ToList();
            foreach (var a in wdsb_appusers)
            {
                try
                {
                    db.WDSB_AppUsers.Remove(a);
                    db.SaveChanges();
                }
                catch { }
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WDSB_AppUsersExists(Guid id)
        {
            return db.WDSB_AppUsers.Count(e => e.AppUserID == id) > 0;
        }
    }
}