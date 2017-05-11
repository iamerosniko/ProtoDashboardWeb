import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Favorite } from '../../entities/favorite';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FnMainApp } from '../maintenance/functions/fn-main-app';
import { AppForClient } from '../../entities/appforclient';
@Component({
  moduleId: module.id,
  selector: 'ac-viewdetail',
  templateUrl:`ac-viewdetail.component.html`
})
export class ACDetail implements OnInit { 
  selectedID:number=0;
  app:AppForClient=new AppForClient(0,'',0,'','',0,0,0,false,
    false,'',null,null,null,null,null,null,null,null,null,null,null,
    null,null,null,0,0,null);
  constructor(
    private route: ActivatedRoute,
    private fnMainApp : FnMainApp,
    private router: Router,

    private favService:FavoriteService
  ){ }
  ngOnInit(){
    this.getselectedID();
    this.getDetail();
  }
  getselectedID(){
    this.route.params.subscribe(params => {
        this.selectedID = params['id'];});    
  }
  getDetail(){
    this.fnMainApp.getAppDetail(this.selectedID)
      .then(detail => this.app = detail[0]);
  }
  getStatus(status:boolean):string{
    return status? "Active" : "Inactive";
  }
  isPii(pii:boolean):string{
    return pii? "Yes" : "No";
  }
  run(path:string){
    window.open(path);
  }
  myFav(app:AppForClient){
    var fav:Favorite = new Favorite(0,app.AppID,'',app.myFav);
    this.favService.postFavorite(fav);
  }

}
