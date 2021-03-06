﻿using System;
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
using System.Web;

namespace BiztechDashboard.Controllers
{
    public class RatingsController : ApiController
    {
        private BiztechDashboardContext db = new BiztechDashboardContext();

        [Route("api/Ratings/Get_RatingAverage")]
        public WDSB_AverageRating Get_RatingAverage(int id)
        {
            var a = db.WDSB_AppAvgRating_VW.Where(i => i.AppID == id).ToList();
            if (a.Count() > 0)
            {
                return new WDSB_AverageRating
                {
                    Rating =(double) a[0].AvgRating
                };
            }
            return new WDSB_AverageRating{
                Rating=(double)0
            };
        }

        // GET api/Ratings/5
        [ResponseType(typeof(WDSB_Ratings))]
        public IHttpActionResult GetWDSB_Ratings(int id)
        {
            var un = getMyuserName();
            //WDSB_Ratings wdsb_ratings = db.WDSB_Ratings.Find(id);
            var wdsb_ratings = db.WDSB_Ratings.Where(x => x.AppID == id && x.UserName == un);
            if (wdsb_ratings.Count()==0)
            {
                return Ok(new WDSB_Ratings{
                    AppID=id,
                    Rating=0,
                    UserName = un,
                    RatingID=0
                });
            }

            return Ok(wdsb_ratings.First());
        }

        // PUT api/Ratings/5
        public IHttpActionResult PutWDSB_Ratings(int id, WDSB_Ratings wdsb_ratings)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wdsb_ratings.RatingID)
            {
                return BadRequest();
            }

            db.Entry(wdsb_ratings).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WDSB_RatingsExists(id))
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

        // POST api/Ratings
        [ResponseType(typeof(WDSB_Ratings))]
        public IHttpActionResult PostWDSB_Ratings(WDSB_Ratings wdsb_ratings)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //var a = db.WDSB_Ratings.Where(e => e.AppID == wdsb_ratings.AppID && e.UserName == username);
            if (wdsb_ratings.RatingID==0) // means new entry
            {
                db.WDSB_Ratings.Add(wdsb_ratings);
                db.SaveChanges();
            }
            else
            {
                PutWDSB_Ratings(wdsb_ratings.RatingID, wdsb_ratings);
            }

            return CreatedAtRoute("DefaultApi", new { id = wdsb_ratings.RatingID }, wdsb_ratings);
        }

        // DELETE api/Ratings/5
        [ResponseType(typeof(WDSB_Ratings))]
        public IHttpActionResult DeleteWDSB_Ratings(int id)
        {
            WDSB_Ratings wdsb_ratings = db.WDSB_Ratings.Find(id);
            if (wdsb_ratings == null)
            {
                return NotFound();
            }

            db.WDSB_Ratings.Remove(wdsb_ratings);
            db.SaveChanges();

            return Ok(wdsb_ratings);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WDSB_RatingsExists(int id)
        {
            return db.WDSB_Ratings.Count(e => e.RatingID == id) > 0;
        }//gets the current user's username
        private string getMyuserName()
        {
            string currentDomainUser = HttpContext.Current.User.Identity.Name.ToString();
            //username only
            string currentUsername = currentDomainUser.Remove(0, currentDomainUser.IndexOf('\\') + 1);
            //int index = currentDomainUser.IndexOf("\\" + currentUsername);
            //Domain Name only
            //string currentDomainname = (index < 0) ? currentDomainUser : currentDomainUser.Remove(index, currentUsername.Length + 1);
            return currentUsername;
        }
    }
}