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
    public class NewApplicationsController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET api/NewApplications
        public IQueryable<VW_WDSB_GetNewApp> GetVW_WDSB_GetNewApp()
        {
            return db.VW_WDSB_GetNewApp;
        }

    }
}