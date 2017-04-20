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
using System.Data.Entity.Core.Metadata.Edm;
using System.Reflection;
using System.Data.SqlClient;
using System.Data.Entity.Core.EntityClient;

namespace BiztechDashboard.Controllers
{
    public class GetUsersController : ApiController
    {
        private TempDatabaseEntities db= new TempDatabaseEntities();
        private BiztechDashboardContext db2 = new BiztechDashboardContext(); 

        private String BuildConnectionString(String dataSource, String database)
        {
            // Build the connection string from the provided datasource and database
            String connString = @"data source=" + dataSource + ";initial catalog=" + database + ";integrated security=True;MultipleActiveResultSets=True;App=EntityFramework;multipleactiveresultsets=True;application name=EntityFramework;";

            // Build the MetaData... feel free to copy/paste it from the connection string in the config file.
            EntityConnectionStringBuilder esb = new EntityConnectionStringBuilder();
            //esb.Metadata = "res://*/AW_Model.csdl|res://*/AW_Model.ssdl|res://*/AW_Model.msl";
            //esb.Metadata = "res://*/";
            esb.Metadata = "res://*/Models.TempDatabaseModel.csdl|res://*/Models.TempDatabaseModel.ssdl|res://*/Models.TempDatabaseModel.msl";
            esb.Provider = "System.Data.SqlClient";
            esb.ProviderConnectionString = connString;

            // Generate the full string and return it
            return esb.ToString();
        }

        [ResponseType(typeof(int))]
        public IHttpActionResult Getset_user(string ds,string dbase,string projectID)
        {
            TempDatabaseEntities myDb = new TempDatabaseEntities(BuildConnectionString(ds, dbase));
            int ctr = 0;
            try
            {
                IQueryable<WDSB_AppUsers> users = from l in myDb.set_user
                                                      select new WDSB_AppUsers
                                                      {
                                                          AppUserID = Guid.NewGuid(),
                                                          UserName = l.user_name,
                                                          ProjectID = projectID
                                                      };
                //set_user set_user = db.set_user.Find(id);
                if (users == null)
                {
                    return Ok(0); //no user
                }
                else
                {
                    foreach (var a in users)
                    {
                        db2.Entry(a).State=EntityState.Added;
                        db2.SaveChanges();
                        ctr++;
                    }
                    return Ok(ctr); //added users
                }
            }
            catch 
            { 
                return Ok(-1); //unable to connect
            }
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