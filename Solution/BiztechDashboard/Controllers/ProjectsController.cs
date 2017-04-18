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
    public class ProjectsController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET api/Projects
        public IQueryable<WDSB_Projects> GetWDSB_Projects()
        {
            return db.WDSB_Projects;
        }

        // GET api/Projects/5
        [ResponseType(typeof(WDSB_Projects))]
        public IHttpActionResult GetWDSB_Projects(string id)
        {
            WDSB_Projects wdsb_projects = db.WDSB_Projects.Find(id);
            if (wdsb_projects == null)
            {
                return NotFound();
            }

            return Ok(wdsb_projects);
        }

        // PUT api/Projects/5
        public IHttpActionResult PutWDSB_Projects(string id, WDSB_Projects wdsb_projects)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wdsb_projects.ProjectID)
            {
                return BadRequest();
            }

            db.Entry(wdsb_projects).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WDSB_ProjectsExists(id))
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

        // POST api/Projects
        [ResponseType(typeof(WDSB_Projects))]
        public IHttpActionResult PostWDSB_Projects(WDSB_Projects wdsb_projects)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WDSB_Projects.Add(wdsb_projects);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (WDSB_ProjectsExists(wdsb_projects.ProjectID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = wdsb_projects.ProjectID }, wdsb_projects);
        }

        // DELETE api/Projects/5
        [ResponseType(typeof(WDSB_Projects))]
        public IHttpActionResult DeleteWDSB_Projects(string id)
        {
            WDSB_Projects wdsb_projects = db.WDSB_Projects.Find(id);
            if (wdsb_projects == null)
            {
                return NotFound();
            }

            db.WDSB_Projects.Remove(wdsb_projects);
            db.SaveChanges();

            return Ok(wdsb_projects);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WDSB_ProjectsExists(string id)
        {
            return db.WDSB_Projects.Count(e => e.ProjectID == id) > 0;
        }
    }
}