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
using System.Data.OleDb;
using System.Data.Odbc;
namespace BiztechDashboard.Controllers
{
    public class GetUsersController : ApiController
    {
        private TempDatabaseEntities db= new TempDatabaseEntities();
        private BiztechDashboardContext db2 = new BiztechDashboardContext();

        private OleDbConnection oledbConnection;
        private OdbcConnection odbcConnection; 
#region MSSQL
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
        private String BuildConnectionString(String dataSource, String database, String userId, String Password)
        {
            // Build the connection string from the provided datasource and database
            String connString = @"data source=" + dataSource + ";initial catalog=" + database + ";Persist Security Info=True;User ID=" + userId + ";Password=" + Password + ";MultipleActiveResultSets=True;application name=EntityFramework;";
    
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

        /*MSSQL DB*/
        [ResponseType(typeof(WDSB_AffectedUsers))]
        //public IHttpActionResult Getset_user(string ds,string dbase,string projectID,string userID,string password)
        public IHttpActionResult Getset_user(string ds, string dbase, string projectID, string userID, string password)
        {
            
            TempDatabaseEntities myDb = (userID==null||userID=="") 
                ? new TempDatabaseEntities(BuildConnectionString(ds, dbase))
                : new TempDatabaseEntities(BuildConnectionString(ds,dbase,userID,password));
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
                    return Ok(new WDSB_AffectedUsers { AffectedUsers = 0 }); //no user
                }
                else
                {
                    foreach (var a in users)
                    {
                        db2.Entry(a).State=EntityState.Added;
                        db2.SaveChanges();
                        ctr++;
                    }
                    return Ok(new WDSB_AffectedUsers { AffectedUsers = ctr }); //added users
                }
            }
            catch 
            {
                return Ok(new WDSB_AffectedUsers { AffectedUsers = -1 }); //unable to connect
            }
        }
#endregion
#region MSACCESS
        /*MSACCSS DB*/
        [Route("api/GetUsers/GetUserFromMSAccess")]
        [ResponseType(typeof(WDSB_AffectedUsers))]
        //public IHttpActionResult Getset_user(string ds,string dbase,string projectID,string userID,string password)
        public IHttpActionResult GetUserFromMSAccess(string filename, string projectID, string userID, string password)
        {
            
            string connStr = GetMSAccessConnectionString(filename, userID, password);
            string sql = "select user_name from set_user";

            if (connStr.Trim().Length == 0)
                return Ok(new WDSB_AffectedUsers { AffectedUsers = -3 }); //invalid ms access file
            else
            {
                odbcConnection = new OdbcConnection();
                odbcConnection.ConnectionString = connStr;
                DataSet ds = ExecuteQuery(sql);
                //query here
                try
                {
                    return Ok(new WDSB_AffectedUsers { AffectedUsers = ds.Tables[0].Rows.Count }); //unable to connect to ms access
                }
                catch
                {
                    return Ok(new WDSB_AffectedUsers { AffectedUsers = -2 }); //unable to connect to ms access
                }
            }
        }
        //msaccess getting connection string
        private string GetMSAccessConnectionString(string filename, string userID, string password)
        {
            if (filename.Contains("."))
            {
                if (filename.Substring(filename.LastIndexOf(".")) == ".accdb")
                {
                    //return "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + mdbFilePath + ";Persist Security Info=False;";
                    return @"Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=" + filename + ";";
                }
                else if (filename.Substring(filename.LastIndexOf(".")) == ".mdb")
                {
                    return "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + filename +
                        ";Persist Security Info=False;" +
                        ((userID.Trim().Length > 0 || userID != null) ? "User ID = " + userID + ";Password = " + password + ";" : "") +
                        "Jet OLEDB:System database= " + filename + "";
                }
                else
                    return "";
            }
            else
            {
                return "";
            }
        }

        protected internal DataSet ExecuteQuery(string sql)
        {
            try
            {
                DataSet ds = new DataSet();
                //modified by albert 05-30-17
                //OleDbDataAdapter adap = new OleDbDataAdapter(sql, oledbConnection);
                OdbcDataAdapter adap = new OdbcDataAdapter(sql, odbcConnection);
                adap.Fill(ds);

                return ds;
            }
            catch (Exception)
            {
                throw;
            }
        }
#endregion
        
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