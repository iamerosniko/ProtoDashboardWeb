using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Common;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BiztechDashboard.Models;

namespace BiztechDashboard.Controllers
{
    public class GetUsersController : ApiController
    {
        private TempDatabaseEntities db = new TempDatabaseEntities();

        private String BuildConnectionString(String DataSource, String Database)
        {
            // Build the connection string from the provided datasource and database
            String connString = @"data source=" + DataSource + ";initial catalog=" + Database + ";integrated security=True;MultipleActiveResultSets=True;App=EntityFramework;";

            // Build the MetaData... feel free to copy/paste it from the connection string in the config file.
            EntityConnectionStringBuilder esb = new EntityConnectionStringBuilder();
            esb.Metadata = "res://*/AW_Model.csdl|res://*/AW_Model.ssdl|res://*/AW_Model.msl";
            esb.Provider = "System.Data.SqlClient";
            esb.ProviderConnectionString = connString;

            // Generate the full string and return it
            return esb.ToString();
        }


        // GET api/GetUsers
        public IQueryable<set_user> Getset_user()
        {
            return db.set_user;
        }

        // GET api/GetUsers/5
        [ResponseType(typeof(set_user))]
        public IHttpActionResult Getset_user(string id)
        {
            set_user set_user = db.set_user.Find(id);
            if (set_user == null)
            {
                return NotFound();
            }

            return Ok(set_user);
        }

        // PUT api/GetUsers/5
        public IHttpActionResult Putset_user(string id, set_user set_user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != set_user.user_id)
            {
                return BadRequest();
            }

            db.Entry(set_user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!set_userExists(id))
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

        // POST api/GetUsers
        [ResponseType(typeof(set_user))]
        public IHttpActionResult Postset_user(set_user set_user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.set_user.Add(set_user);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (set_userExists(set_user.user_id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = set_user.user_id }, set_user);
        }

        // DELETE api/GetUsers/5
        [ResponseType(typeof(set_user))]
        public IHttpActionResult Deleteset_user(string id)
        {
            set_user set_user = db.set_user.Find(id);
            if (set_user == null)
            {
                return NotFound();
            }

            db.set_user.Remove(set_user);
            db.SaveChanges();

            return Ok(set_user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool set_userExists(string id)
        {
            return db.set_user.Count(e => e.user_id == id) > 0;
        }

        
    }
}