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
    
    public partial class WDSB_Projects
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public WDSB_Projects()
        {
            this.WDSB_Applications = new HashSet<WDSB_Applications>();
            this.WDSB_Applications1 = new HashSet<WDSB_Applications>();
            this.WDSB_Applications2 = new HashSet<WDSB_Applications>();
        }
    
        public string ProjectID { get; set; }
        public string ProjectName { get; set; }
        public string ProjectDatasource { get; set; }
        public string ProjectDatabaseName { get; set; }
        public string ProjectUserID { get; set; }
        public string ProjectPassword { get; set; }
        public Nullable<bool> ProjectIsActive { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<WDSB_Applications> WDSB_Applications { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<WDSB_Applications> WDSB_Applications1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<WDSB_Applications> WDSB_Applications2 { get; set; }
    }
}
