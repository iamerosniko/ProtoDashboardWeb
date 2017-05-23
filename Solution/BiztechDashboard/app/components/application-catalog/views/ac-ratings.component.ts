import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RatingService } from '../../../services/rating.service';
import { Ratings } from '../../../entities/ratings';
@Component({
  moduleId: module.id,
  selector: 'ac-ratings',
  templateUrl: 'ac-ratings.component.html'
})
export class ACRatingsComponent implements OnInit { 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ratingService:RatingService
  ){}

  selectedID:number;
  ratings:Ratings=new Ratings(0,0,'',0);
  avgRatings:Ratings=new Ratings(0,0,'',0);

  ngOnInit(){
    this.getselectedID();
    this.getRating();
    this.getAverage();
  }
  getselectedID(){
    this.route.params.subscribe(params => {
        this.selectedID = params['id'];});    
  }
  getRating(){
    this.ratingService.getRating(this.selectedID)
      .then(rat=>this.ratings=new Ratings(
        rat.RatingID,rat.AppID,rat.UserName,rat.Rating
      ));
  }
  getAverage(){
    this.ratingService.getAverageRating(this.selectedID)
      .then(rat=>this.avgRatings=new Ratings(
        rat.RatingID,rat.AppID,rat.UserName,rat.Rating
      ));
  }
  postRating(){
    this.ratingService.postRating(this.ratings)
      .then(()=>{
        this.getRating();
        this.getAverage();
      });
  }
  getFeed():string{
    if(this.avgRatings.Rating==5)
      return "Wow, this app got perfect score from our users!";
    else if(this.avgRatings.Rating==0)
      return "How much would you rate this app?";
  }
}
