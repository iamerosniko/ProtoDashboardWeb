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
    public class FavoritesController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET: api/Favorites
        public IQueryable<WDSB_Favorites> GetWDSB_Favorites()
        {
            return db.WDSB_Favorites;
        }

        // GET: api/Favorites/5
        [ResponseType(typeof(WDSB_Favorites))]
        public IHttpActionResult GetWDSB_Favorites(int id)
        {
            WDSB_Favorites wDSB_Favorites = db.WDSB_Favorites.Find(id);
            if (wDSB_Favorites == null)
            {
                return NotFound();
            }

            return Ok(wDSB_Favorites);
        }

        // PUT: api/Favorites/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWDSB_Favorites(int id, WDSB_Favorites wDSB_Favorites)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wDSB_Favorites.FavID)
            {
                return BadRequest();
            }
            wDSB_Favorites.IsActive = !wDSB_Favorites.IsActive;
            db.Entry(wDSB_Favorites).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WDSB_FavoritesExists(id))
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

        // POST: api/Favorites
        [ResponseType(typeof(WDSB_Favorites))]
        public IHttpActionResult PostWDSB_Favorites(WDSB_Favorites wDSB_Favorites)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //check if exists
            var username = getMyuserName();
            var a =db.WDSB_Favorites.Where(e => e.AppID == wDSB_Favorites.AppID && e.UserName==username);

            if(a.Count()>0)
            {
                a.First().UserName = getMyuserName();
                PutWDSB_Favorites(a.First().FavID, a.First());
            }
            else if (wDSB_Favorites.AppID == 0)
            {
                return Ok();
            }
            else
            {
                wDSB_Favorites.UserName = getMyuserName();
                wDSB_Favorites.IsActive = true;
                db.WDSB_Favorites.Add(wDSB_Favorites);
                db.SaveChanges();
            }


            return CreatedAtRoute("DefaultApi", new { id = wDSB_Favorites.FavID }, wDSB_Favorites);
        }

        // DELETE: api/Favorites/5
        [ResponseType(typeof(WDSB_Favorites))]
        public IHttpActionResult DeleteWDSB_Favorites(int id)
        {
            WDSB_Favorites wDSB_Favorites = db.WDSB_Favorites.Find(id);
            if (wDSB_Favorites == null)
            {
                return NotFound();
            }

            db.WDSB_Favorites.Remove(wDSB_Favorites);
            db.SaveChanges();

            return Ok(wDSB_Favorites);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WDSB_FavoritesExists(int id)
        {
            return db.WDSB_Favorites.Count(e => e.FavID == id) > 0;
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
    }
}