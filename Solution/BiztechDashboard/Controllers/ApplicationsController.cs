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

namespace BiztechDashboard.Controllers
{
    public class ApplicationsController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET: api/Applications
        public IQueryable<WDSB_Applications> GetWDSB_Applications()
        {
            return db.WDSB_Applications;
        }

        // GET: api/Applications/5
        [ResponseType(typeof(WDSB_Applications_DTO))]
        public IHttpActionResult GetWDSB_Applications(int id)
        {
            WDSB_Applications wDSB_Applications = db.WDSB_Applications.Find(id);
            if (wDSB_Applications == null)
            {
                return Ok(new WDSB_Applications_DTO());
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