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
    public class CommentsController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        // GET: api/Comments
        public IQueryable<WDSB_Comments> GetWDSB_Comments()
        {
            return db.WDSB_Comments;
        }

        // GET: api/Comments/5
        [ResponseType(typeof(WDSB_Comments))]
        public IHttpActionResult GetWDSB_Comments(int id)
        {
            WDSB_Comments wDSB_Comments = db.WDSB_Comments.Find(id);
            if (wDSB_Comments == null)
            {
                return NotFound();
            }

            return Ok(wDSB_Comments);
        }

        // PUT: api/Comments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWDSB_Comments(int id, WDSB_Comments wDSB_Comments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wDSB_Comments.CommentID)
            {
                return BadRequest();
            }

            db.Entry(wDSB_Comments).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WDSB_CommentsExists(id))
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

        // POST: api/Comments
        [ResponseType(typeof(WDSB_Comments))]
        public IHttpActionResult PostWDSB_Comments(WDSB_Comments wDSB_Comments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WDSB_Comments.Add(wDSB_Comments);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = wDSB_Comments.CommentID }, wDSB_Comments);
        }

        // DELETE: api/Comments/5
        [ResponseType(typeof(WDSB_Comments))]
        public IHttpActionResult DeleteWDSB_Comments(int id)
        {
            WDSB_Comments wDSB_Comments = db.WDSB_Comments.Find(id);
            if (wDSB_Comments == null)
            {
                return NotFound();
            }

            db.WDSB_Comments.Remove(wDSB_Comments);
            db.SaveChanges();

            return Ok(wDSB_Comments);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WDSB_CommentsExists(int id)
        {
            return db.WDSB_Comments.Count(e => e.CommentID == id) > 0;
        }
    }
}