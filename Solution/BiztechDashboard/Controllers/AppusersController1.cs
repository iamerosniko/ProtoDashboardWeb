//using System;
//using System.Collections.Generic;
//using System.Data;
//using System.Data.Entity;
//using System.Data.Entity.Infrastructure;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using System.Web.Http.Description;
//using BiztechDashboard.Models;

//namespace BiztechDashboard.Controllers
//{
//    public class AppusersController1 : ApiController
//    {
//        private BiztechDashboardContext db = new BiztechDashboardContext();

//        // GET api/Appusers
//        public IQueryable<WDSB_AppUsers> GetWDSB_AppUsers()
//        {
//            return db.WDSB_AppUsers;
//        }

//        // GET api/Appusers/5
//        [ResponseType(typeof(WDSB_AppUsers))]
//        public IHttpActionResult GetWDSB_AppUsers(Guid id)
//        {
//            WDSB_AppUsers wdsb_appusers = db.WDSB_AppUsers.Find(id);
//            if (wdsb_appusers == null)
//            {
//                return NotFound();
//            }

//            return Ok(wdsb_appusers);
//        }

//        // PUT api/Appusers/5
//        public IHttpActionResult PutWDSB_AppUsers(Guid id, WDSB_AppUsers wdsb_appusers)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (id != wdsb_appusers.AppUserID)
//            {
//                return BadRequest();
//            }

//            db.Entry(wdsb_appusers).State = EntityState.Modified;

//            try
//            {
//                db.SaveChanges();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!WDSB_AppUsersExists(id))
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    throw;
//                }
//            }

//            return StatusCode(HttpStatusCode.NoContent);
//        }

//        // POST api/Appusers
//        [ResponseType(typeof(WDSB_AppUsers))]
//        public IHttpActionResult PostWDSB_AppUsers(WDSB_AppUsers wdsb_appusers)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            db.WDSB_AppUsers.Add(wdsb_appusers);

//            try
//            {
//                db.SaveChanges();
//            }
//            catch (DbUpdateException)
//            {
//                if (WDSB_AppUsersExists(wdsb_appusers.AppUserID))
//                {
//                    return Conflict();
//                }
//                else
//                {
//                    throw;
//                }
//            }

//            return CreatedAtRoute("DefaultApi", new { id = wdsb_appusers.AppUserID }, wdsb_appusers);
//        }
//        //test
//        [Route("api/Appusers/DeleteUsers")]
//        public void DeleteUsers(List<WDSB_AppUsers>wdsb_appusers)
//        {
//            foreach (var a in wdsb_appusers)
//            {
//                try
//                {
//                    db.WDSB_AppUsers.Remove(a);
//                    db.SaveChanges();
//                }
//                catch
//                {

//                }
//            }
//        }


//        // DELETE api/Appusers/5
//        [ResponseType(typeof(WDSB_AppUsers))]
//        public IHttpActionResult DeleteWDSB_AppUsers(Guid id)
//        {
//            WDSB_AppUsers wdsb_appusers = db.WDSB_AppUsers.Find(id);
//            if (wdsb_appusers == null)
//            {
//                return NotFound();
//            }

//            db.WDSB_AppUsers.Remove(wdsb_appusers);
//            db.SaveChanges();

//            return Ok(wdsb_appusers);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool WDSB_AppUsersExists(Guid id)
//        {
//            return db.WDSB_AppUsers.Count(e => e.AppUserID == id) > 0;
//        }
//    }
//}