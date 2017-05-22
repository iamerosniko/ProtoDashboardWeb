﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BiztechDashboard.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class BiztechDashboardContext : DbContext
    {
        public BiztechDashboardContext()
            : base("name=BiztechDashboardContext")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<WDSB_BUContacts> WDSB_BUContacts { get; set; }
        public virtual DbSet<WDSB_BusinessUnits> WDSB_BusinessUnits { get; set; }
        public virtual DbSet<WDSB_Comments> WDSB_Comments { get; set; }
        public virtual DbSet<WDSB_Favorites> WDSB_Favorites { get; set; }
        public virtual DbSet<WDSB_TempProjects> WDSB_TempProjects { get; set; }
        public virtual DbSet<VW_WDSB_GetNewApp> VW_WDSB_GetNewApp { get; set; }
        public virtual DbSet<WDSB_AppUsers> WDSB_AppUsers { get; set; }
        public virtual DbSet<WDSB_Projects> WDSB_Projects { get; set; }
        public virtual DbSet<WDSB_VW_ApplicationsDB> WDSB_VW_ApplicationsDB { get; set; }
        public virtual DbSet<WDSB_Applications> WDSB_Applications { get; set; }
        public virtual DbSet<WDSB_Features> WDSB_Features { get; set; }
        public virtual DbSet<WDSB_Ratings> WDSB_Ratings { get; set; }
    
        public virtual ObjectResult<WDSB_GetAuth_Result> WDSB_GetAuth(string username, string moduleName)
        {
            var usernameParameter = username != null ?
                new ObjectParameter("username", username) :
                new ObjectParameter("username", typeof(string));
    
            var moduleNameParameter = moduleName != null ?
                new ObjectParameter("moduleName", moduleName) :
                new ObjectParameter("moduleName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<WDSB_GetAuth_Result>("WDSB_GetAuth", usernameParameter, moduleNameParameter);
        }
    
        public virtual ObjectResult<WDSB_AppClient_VW_Result> WDSB_AppClient_VW(string myusername, string appName)
        {
            var myusernameParameter = myusername != null ?
                new ObjectParameter("myusername", myusername) :
                new ObjectParameter("myusername", typeof(string));
    
            var appNameParameter = appName != null ?
                new ObjectParameter("appName", appName) :
                new ObjectParameter("appName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<WDSB_AppClient_VW_Result>("WDSB_AppClient_VW", myusernameParameter, appNameParameter);
        }
    
        public virtual ObjectResult<WDSB_AppDetails_VW_Result> WDSB_AppDetails_VW(string myusername, Nullable<int> appID)
        {
            var myusernameParameter = myusername != null ?
                new ObjectParameter("myusername", myusername) :
                new ObjectParameter("myusername", typeof(string));
    
            var appIDParameter = appID.HasValue ?
                new ObjectParameter("appID", appID) :
                new ObjectParameter("appID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<WDSB_AppDetails_VW_Result>("WDSB_AppDetails_VW", myusernameParameter, appIDParameter);
        }
    
        public virtual ObjectResult<WDSB_AvailApp_VW_Result> WDSB_AvailApp_VW(string myname, string appName)
        {
            var mynameParameter = myname != null ?
                new ObjectParameter("myname", myname) :
                new ObjectParameter("myname", typeof(string));
    
            var appNameParameter = appName != null ?
                new ObjectParameter("appName", appName) :
                new ObjectParameter("appName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<WDSB_AvailApp_VW_Result>("WDSB_AvailApp_VW", mynameParameter, appNameParameter);
        }
    
        public virtual ObjectResult<WDSB_FavApp_VW_Result> WDSB_FavApp_VW(string myname, string appName)
        {
            var mynameParameter = myname != null ?
                new ObjectParameter("myname", myname) :
                new ObjectParameter("myname", typeof(string));
    
            var appNameParameter = appName != null ?
                new ObjectParameter("appName", appName) :
                new ObjectParameter("appName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<WDSB_FavApp_VW_Result>("WDSB_FavApp_VW", mynameParameter, appNameParameter);
        }
    }
}
