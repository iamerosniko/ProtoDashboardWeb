//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Project
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Desc { get; set; }
        public string Version { get; set; }
        public bool IsActive { get; set; }
        public string BusinessOwner { get; set; }
        public string Tester { get; set; }
        public string OtherContact { get; set; }
        public string Provider { get; set; }
        public string File { get; set; }
        public bool EnableBypassKey { get; set; }
        public bool HasOtherDetails { get; set; }
        public string MDW { get; set; }
        public string Datasource { get; set; }
        public string DatabaseName { get; set; }
        public string UserID { get; set; }
        public string Password { get; set; }
        public string SharepointURL { get; set; }
        public string PathErrorLog { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public System.DateTime TimeStamp { get; set; }
    }
}
