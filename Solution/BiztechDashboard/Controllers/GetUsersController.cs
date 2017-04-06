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
        private TempDatabaseEntities db = new TempDatabaseEntities();

        private String BuildConnectionString(String DataSource, String Database)
        {
            // Build the connection string from the provided datasource and database
            String connString = @"data source=" + DataSource + ";initial catalog=" + Database + ";integrated security=True;MultipleActiveResultSets=True;App=EntityFramework;multipleactiveresultsets=True;application name=EntityFramework;";

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
        //Custom 1
        public IQueryable<set_user> Getset_user()
        {
            string DataSource = @"JHJHST59\JHS1D";
            string Database = "dbbtLCTp1";
            TempDatabaseEntities myDb = new TempDatabaseEntities(BuildConnectionString(DataSource, Database));
            return myDb.set_user;
            //return db.set_user;
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

        //CUSTOM2
        // GET api/GetUsers
        //public List<Users_DTO> Getset_user()
        //{
        //    string DataSource = @"JHJHST59\JHS1D";
        //    string Database = "dbbtLTCRCLMp1";
        //    List<Users_DTO> users = new List<Users_DTO>();

        //    SqlConnection con = new SqlConnection(@"data source=" + DataSource + ";initial catalog=" + Database + ";integrated security=True;");
        //    SqlCommand cmd = new SqlCommand("Select * from set_user;",con);
        //    using (con)
        //    {
        //        con.Open();
        //        SqlDataReader rdr = null;
        //        rdr = cmd.ExecuteReader();
        //        while (rdr.Read())
        //        {

        //            users.Add(new Users_DTO
        //            {
        //                user_name = (string)rdr["user_name"]
        //            });
        //        }
        //        con.Close();
        //    }
        //    return users;

        //    //TempDatabaseEntities myDb = new TempDatabaseEntities(BuildConnectionString(DataSource, Database));
        //    //return myDb.set_user;
        //    //return db.set_user;
        //}

        //NORMAL
        //public IQueryable<set_user> Getset_user()
        //{
        //    //string DataSource = @"JHJHST59\JHS1D";
        //    //string Database = "dbbtLTCRCLMp1";
        //    //TempDatabaseEntities myDb = new TempDatabaseEntities(BuildConnectionString(DataSource, Database));
        //    //return myDb.set_user;
        //    return db.set_user;
        //}
        
        
    }
}