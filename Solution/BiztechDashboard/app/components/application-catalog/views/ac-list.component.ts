import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Application } from '../../../entities/application';
import { AppForClient } from '../../../entities/appforclient';
import { FnMainApp } from '../../maintenance/functions/fn-main-app';
import { Favorite } from '../../../entities/favorite';
import { FavoriteService } from '../../../services/favorite.service';
import { Router } from '@angular/router';
import { ACComponent } from '../ac-parent.component';
import { PaginationInstance } from 'ngx-pagination';
import { GetAuth } from '../../../entities/getauth';
@Component({
  moduleId: module.id,
  selector: 'ac-list',
  templateUrl:`ac-list.component.html`
})
export class ACListComponent  { 
  @Input() apps:AppForClient[]=[];
  @Input() thisParent:ACComponent;
  @Input() auth:GetAuth;
   constructor(
    private router: Router,
    private favService:FavoriteService
  ){}
  public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
  };
  public filter: string = '';
  //pagination
  onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }
  run(app:AppForClient){
    window.open(app.OpsFront);
  }
  myFav(app:AppForClient){
    var fav:Favorite = new Favorite(0,app.AppID,'',app.myFav);
     this.favService.postFavorite(fav).then(()=>{this.thisParent.refresh;});
  }
  
  gotoDetail(app:AppForClient){
      this.router.navigate(['/Applications', app.AppID]);
  }
  
}
