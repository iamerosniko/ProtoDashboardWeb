import { Component,Input } from '@angular/core';
import { AppForClient } from '../../../entities/appforclient';
import { Favorite } from '../../../entities/favorite';
import { FavoriteService } from '../../../services/favorite.service';
@Component({
  moduleId: module.id,
  selector: 'ac-thumbnail',
  templateUrl:`ac-thumbnail.component.html`
})
export class ACThumbnailComponent  { 
  @Input() app: AppForClient;
  constructor(
    private favService:FavoriteService
  ){}
  
  run(){
    window.open(this.app.OpsFront);
  }

  myFav(app:AppForClient){
    var fav:Favorite = new Favorite(0,app.AppID,'');
    this.favService.postFavorite(fav);
    //pass to service
  }
}
