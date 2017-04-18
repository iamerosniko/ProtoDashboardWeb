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
    public class BTSSProjectsController : ApiController
    {
        private BTSSEntities db = new BTSSEntities();

        // GET api/BTSSProjects
        public IQueryable<WDSB_TempProjects> GetProjects()
        {
            //return db.Projects;
            return from i in db.Projects
                   select new WDSB_TempProjects
                   {
                       ProjectDatabaseName = i.DatabaseName,
                       ProjectDatasource = i.Datasource,
                       //ProjectDesc = i.Desc,
                       ProjectID = i.Id,
                       ProjectIsActive = i.IsActive,
                       ProjectName = i.Name,
                       ProjectPassword = i.Password,
                       ProjectUserID = i.UserID
                       //,
                       //ProjectVersion = i.Version
                   };
        }

        // GET api/BTSSProjects/5
        [ResponseType(typeof(Project))]
        public IHttpActionResult GetProject(string id)
        {
            Project project = db.Projects.Find(id);
            if (project == null)
            {
                return NotFound();
            }

            return Ok(project);
        }

        // PUT api/BTSSProjects/5
        public IHttpActionResult PutProject(string id, Project project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != project.Id)
            {
                return BadRequest();
            }

            db.Entry(project).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(id))
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

        // POST api/BTSSProjects
        [ResponseType(typeof(Project))]
        public IHttpActionResult PostProject(Project project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Projects.Add(project);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ProjectExists(project.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = project.Id }, project);
        }

        // DELETE api/BTSSProjects/5
        [ResponseType(typeof(Project))]
        public IHttpActionResult DeleteProject(string id)
        {
            Project project = db.Projects.Find(id);
            if (project == null)
            {
                return NotFound();
            }

            db.Projects.Remove(project);
            db.SaveChanges();

            return Ok(project);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProjectExists(string id)
        {
            return db.Projects.Count(e => e.Id == id) > 0;
        }
    }
}