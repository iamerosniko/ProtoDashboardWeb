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
    public class BUContactsController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET: api/BUContacts
        public IQueryable<WDSB_BUContacts> GetWDSB_BUContacts()
        {
            return db.WDSB_BUContacts;
        }

        // GET: api/BUContacts/5
        [ResponseType(typeof(WDSB_BUContacts))]
        public IHttpActionResult GetWDSB_BUContacts(int id)
        {
            WDSB_BUContacts wDSB_BUContacts = db.WDSB_BUContacts.Find(id);
            if (wDSB_BUContacts == null)
            {
                return NotFound();
            }

            return Ok(wDSB_BUContacts);
        }

        // PUT: api/BUContacts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWDSB_BUContacts(int id, WDSB_BUContacts wDSB_BUContacts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wDSB_BUContacts.ContactID)
            {
                return BadRequest();
            }

            db.Entry(wDSB_BUContacts).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WDSB_BUContactsExists(id))
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

        // POST: api/BUContacts
        [ResponseType(typeof(WDSB_BUContacts))]
        public IHttpActionResult PostWDSB_BUContacts(WDSB_BUContacts wDSB_BUContacts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WDSB_BUContacts.Add(wDSB_BUContacts);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = wDSB_BUContacts.ContactID }, wDSB_BUContacts);
        }

        // DELETE: api/BUContacts/5
        [ResponseType(typeof(WDSB_BUContacts))]
        public IHttpActionResult DeleteWDSB_BUContacts(int id)
        {
            WDSB_BUContacts wDSB_BUContacts = db.WDSB_BUContacts.Find(id);
            if (wDSB_BUContacts == null)
            {
                return NotFound();
            }

            db.WDSB_BUContacts.Remove(wDSB_BUContacts);
            db.SaveChanges();

            return Ok(wDSB_BUContacts);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WDSB_BUContactsExists(int id)
        {
            return db.WDSB_BUContacts.Count(e => e.ContactID == id) > 0;
        }
    }
}