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
    public class TempProjectsController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET: api/TempProjects
        public IQueryable<WDSB_TempProjects> GetWDSB_TempProjects()
        {
            return db.WDSB_TempProjects;
        }

        // GET: api/TempProjects/5
        [ResponseType(typeof(WDSB_TempProjects))]
        public IHttpActionResult GetWDSB_TempProjects(string id)
        {
            WDSB_TempProjects wDSB_TempProjects = db.WDSB_TempProjects.Find(id);
            if (wDSB_TempProjects == null)
            {
                return NotFound();
            }

            return Ok(wDSB_TempProjects);
        }

        // PUT: api/TempProjects/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWDSB_TempProjects(string id, WDSB_TempProjects wDSB_TempProjects)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wDSB_TempProjects.ProjectID)
            {
                return BadRequest();
            }

            db.Entry(wDSB_TempProjects).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WDSB_TempProjectsExists(id))
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

        // POST: api/TempProjects
        [ResponseType(typeof(WDSB_TempProjects))]
        public IHttpActionResult PostWDSB_TempProjects(WDSB_TempProjects wDSB_TempProjects)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WDSB_TempProjects.Add(wDSB_TempProjects);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (WDSB_TempProjectsExists(wDSB_TempProjects.ProjectID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = wDSB_TempProjects.ProjectID }, wDSB_TempProjects);
        }

        // DELETE: api/TempProjects/5
        [ResponseType(typeof(WDSB_TempProjects))]
        public IHttpActionResult DeleteWDSB_TempProjects(string id)
        {
            WDSB_TempProjects wDSB_TempProjects = db.WDSB_TempProjects.Find(id);
            if (wDSB_TempProjects == null)
            {
                return NotFound();
            }

            db.WDSB_TempProjects.Remove(wDSB_TempProjects);
            db.SaveChanges();

            return Ok(wDSB_TempProjects);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WDSB_TempProjectsExists(string id)
        {
            return db.WDSB_TempProjects.Count(e => e.ProjectID == id) > 0;
        }
    }
}