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
    public class BusinessUnitsController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET: api/BusinessUnits
        public IQueryable<WDSB_BusinessUnits> GetWDSB_BusinessUnits()
        {
            return db.WDSB_BusinessUnits;
        }

        // GET: api/BusinessUnits/5
        [ResponseType(typeof(WDSB_BusinessUnits))]
        public IHttpActionResult GetWDSB_BusinessUnits(int id)
        {
            WDSB_BusinessUnits wDSB_BusinessUnits = db.WDSB_BusinessUnits.Find(id);
            if (wDSB_BusinessUnits == null)
            {
                return NotFound();
            }

            return Ok(wDSB_BusinessUnits);
        }

        // PUT: api/BusinessUnits/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWDSB_BusinessUnits(int id, WDSB_BusinessUnits wDSB_BusinessUnits)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wDSB_BusinessUnits.BUID)
            {
                return BadRequest();
            }

            db.Entry(wDSB_BusinessUnits).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WDSB_BusinessUnitsExists(id))
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

        // POST: api/BusinessUnits
        [ResponseType(typeof(WDSB_BusinessUnits))]
        public IHttpActionResult PostWDSB_BusinessUnits(WDSB_BusinessUnits wDSB_BusinessUnits)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WDSB_BusinessUnits.Add(wDSB_BusinessUnits);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = wDSB_BusinessUnits.BUID }, wDSB_BusinessUnits);
        }

        // DELETE: api/BusinessUnits/5
        [ResponseType(typeof(WDSB_BusinessUnits))]
        public IHttpActionResult DeleteWDSB_BusinessUnits(int id)
        {
            WDSB_BusinessUnits wDSB_BusinessUnits = db.WDSB_BusinessUnits.Find(id);
            if (wDSB_BusinessUnits == null)
            {
                return NotFound();
            }

            db.WDSB_BusinessUnits.Remove(wDSB_BusinessUnits);
            db.SaveChanges();

            return Ok(wDSB_BusinessUnits);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WDSB_BusinessUnitsExists(int id)
        {
            return db.WDSB_BusinessUnits.Count(e => e.BUID == id) > 0;
        }
    }
}