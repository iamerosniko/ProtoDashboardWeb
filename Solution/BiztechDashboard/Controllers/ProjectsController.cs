﻿using System;
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

        //get all projects
        // GET api/Projects
        public IQueryable<WDSB_Projects> GetWDSB_Projects()
        {
            return db.WDSB_Projects.OrderBy(x=>x.ProjectName);
        }

        //gets projects with integration with btss only

        [Route("api/Projects/GetWDSB_Projects2")]
        public IQueryable<WDSB_ProjectUsers> GetWDSB_Projects2()
        {
            var projects = from i in db.WDSB_Projects
                          // where i.ProjectDatasource != ""
                           select new WDSB_ProjectUsers
                           {
                               ProjectDb=i.ProjectDatabaseName,
                               ProjectDatasource=i.ProjectDatasource,
                               ProjectID=i.ProjectID,
                               ProjectIsActive=i.ProjectIsActive,
                               ProjectName=i.ProjectName,
                               ProjectPassword=i.ProjectPassword,
                               ProjectUserID=i.ProjectUserID,
                               ProjectFrontEnd=i.FrontEndPath,
                               ProjectBackEnd=i.BackEndPath
                           };

            return projects.OrderBy(x=>x.ProjectName);

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

        [Route("api/Projects/PutWDSB_Projects2")]
        public IHttpActionResult PutWDSB_Projects2(List<WDSB_Projects> wdsb_projects)
        {
            int good = 0;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            foreach (var temp in wdsb_projects)
            {
                temp.BackEndPath = (temp.BackEndPath == null) ? "" : temp.BackEndPath;
                temp.FrontEndPath = (temp.FrontEndPath == null) ? "" : temp.FrontEndPath;
                if (temp.FrontEndPath.Trim().Length > 0 && temp.BackEndPath.Trim().Length > 0)
                {
                    db.Entry(temp).State = EntityState.Modified;

                    try
                    {
                        db.SaveChanges();
                        good += 1;
                    }
                    catch (DbUpdateException)
                    {

                    }
                }
            }
            return Ok("Good: " + good + "Error: " + (wdsb_projects.Count() - good).ToString());
        }

        // POST api/Projects
        [ResponseType(typeof(string))]
        public IHttpActionResult PostWDSB_Projects(List<WDSB_Projects> wdsb_projects)
        {
            int good = 0;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            foreach (var temp in wdsb_projects)
            {
                temp.BackEndPath = (temp.BackEndPath == null) ? "" : temp.BackEndPath;
                temp.FrontEndPath = (temp.FrontEndPath == null) ? "" : temp.FrontEndPath;
                if (temp.FrontEndPath.Trim().Length > 0 && temp.BackEndPath.Trim().Length > 0)
                {
                    db.WDSB_Projects.Add(temp);

                    try
                    {
                        db.SaveChanges();
                        good += 1;
                    }
                    catch (DbUpdateException)
                    {

                    }
                }
                
            }
            return Ok("Good: " + good + "Error: " + (wdsb_projects.Count() - good).ToString());
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