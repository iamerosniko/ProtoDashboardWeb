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
    
    public partial class WDSB_Favorites
    {
        public int FavID { get; set; }
        public int AppID { get; set; }
        public string UserName { get; set; }
        public bool IsActive { get; set; }
    
        public virtual WDSB_Applications WDSB_Applications { get; set; }
    }
}
