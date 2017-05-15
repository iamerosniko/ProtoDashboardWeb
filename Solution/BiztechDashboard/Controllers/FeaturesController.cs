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
    public class FeaturesController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET: api/Features
        public IQueryable<WDSB_Features> GetWDSB_Features()
        {
            return db.WDSB_Features;
        }

        // GET: api/Features/5
        [ResponseType(typeof(WDSB_Features))]
        public IHttpActionResult GetWDSB_Features(int id)
        {
            //WDSB_Features wDSB_Features = db.WDSB_Features.Find(id);
            IQueryable<WDSB_Features> wDSB_Features = db.WDSB_Features.Where(x => x.AppID == id);
            if (wDSB_Features == null)
            {
                return Ok(new List<WDSB_Features>());
            }
            return Ok(wDSB_Features);
        }

        // PUT: api/Features/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWDSB_Features(int id, WDSB_Features wDSB_Features)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wDSB_Features.FeatureID)
            {
                return BadRequest();
            }

            db.Entry(wDSB_Features).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WDSB_FeaturesExists(id))
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

        [Route("api/Features/PostWDSB_Features2")]
        public IHttpActionResult PostWDSB_Features2(List<WDSB_Features> wDSB_Features)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (wDSB_Features != null)
            {
                foreach (var feat in wDSB_Features)
                {
                    if (feat.FeatureID == 0)
                        PostWDSB_Features(feat);
                    else
                        PutWDSB_Features(feat.FeatureID, feat);
                }
            }
            return Ok();


        }

        // POST: api/Features
        [ResponseType(typeof(WDSB_Features))]
        public IHttpActionResult PostWDSB_Features(WDSB_Features wDSB_Features)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WDSB_Features.Add(wDSB_Features);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = wDSB_Features.FeatureID }, wDSB_Features);
        }

        // DELETE: api/Features/5
        [ResponseType(typeof(WDSB_Features))]
        public IHttpActionResult DeleteWDSB_Features(int id)
        {
            WDSB_Features wDSB_Features = db.WDSB_Features.Find(id);
            if (wDSB_Features == null)
            {
                return NotFound();
            }

            db.WDSB_Features.Remove(wDSB_Features);
            db.SaveChanges();

            return Ok(wDSB_Features);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WDSB_FeaturesExists(int id)
        {
            return db.WDSB_Features.Count(e => e.FeatureID == id) > 0;
        }
    }
}