import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Application } from '../../../entities/application';
import { AppForClient } from '../../../entities/appforclient';
import { FnMainApp } from '../../maintenance/functions/fn-main-app';
import { Favorite } from '../../../entities/favorite';
import { FavoriteService } from '../../../services/favorite.service';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'ac-list',
  templateUrl:`ac-list.component.html`
})
export class ACListComponent  { 
  @Input() apps:AppForClient[]=[];
  @Output() refreshFav = new EventEmitter();
   constructor(
    private router: Router,
    private favService:FavoriteService
  ){}
  run(app:AppForClient){
    window.open(app.OpsFront);
  }
  myFav(app:AppForClient){
    var fav:Favorite = new Favorite(0,app.AppID,'',app.myFav);
     this.favService.postFavorite(fav).then(()=>{this.refreshFav.emit();});
  }
  
  gotoDetail(app:AppForClient){
      this.router.navigate(['/Applications', app.AppID]);
  }
}
