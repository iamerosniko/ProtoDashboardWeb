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

  ngOnInit(){
    this.getselectedID();
    this.getRating();
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
  postRating(){
    this.ratingService.postRating(this.ratings);
  }
  getFeed():string{
    if(this.ratings.Rating==5)
      return "Wow, this app got perfect score from our users!";
    else if(this.ratings.Rating==0)
      return "How much would you rate this app?";
  }
}
