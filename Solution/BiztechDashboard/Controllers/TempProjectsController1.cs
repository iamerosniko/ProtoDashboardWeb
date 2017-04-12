using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using BiztechDashboard.Models;

namespace BiztechDashboard.Controllers
{
    public class TempProjectsController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET api/TempProjects
        public IQueryable<WDSB_TempProjects> GetWDSB_TempProjects()
        {
            return db.WDSB_TempProjects;
        }

        // GET api/TempProjects/5
        [ResponseType(typeof(WDSB_TempProjects))]
        public async Task<IHttpActionResult> GetWDSB_TempProjects(string id)
        {
            WDSB_TempProjects wdsb_tempprojects = await db.WDSB_TempProjects.FindAsync(id);
            if (wdsb_tempprojects == null)
            {
                return NotFound();
            }

            return Ok(wdsb_tempprojects);
        }

        // PUT api/TempProjects/5
        public async Task<IHttpActionResult> PutWDSB_TempProjects(string id, WDSB_TempProjects wdsb_tempprojects)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wdsb_tempprojects.ProjectID)
            {
                return BadRequest();
            }

            db.Entry(wdsb_tempprojects).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
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

        // POST api/TempProjects
        [ResponseType(typeof(WDSB_TempProjects))]
        public async Task<IHttpActionResult> PostWDSB_TempProjects(WDSB_TempProjects wdsb_tempprojects)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WDSB_TempProjects.Add(wdsb_tempprojects);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (WDSB_TempProjectsExists(wdsb_tempprojects.ProjectID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = wdsb_tempprojects.ProjectID }, wdsb_tempprojects);
        }

        // DELETE api/TempProjects/5
        [ResponseType(typeof(WDSB_TempProjects))]
        public async Task<IHttpActionResult> DeleteWDSB_TempProjects(string id)
        {
            WDSB_TempProjects wdsb_tempprojects = await db.WDSB_TempProjects.FindAsync(id);
            if (wdsb_tempprojects == null)
            {
                return NotFound();
            }

            db.WDSB_TempProjects.Remove(wdsb_tempprojects);
            await db.SaveChangesAsync();

            return Ok(wdsb_tempprojects);
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