// import { Component,Input,Output,EventEmitter } from '@angular/core';
// @Component({
//   moduleId: module.id,
//   selector: 'ac-thumbnail',
//   templateUrl:`ac-thumbnail.component.html`
// })
// export class ACThumbnailComponent  { 
//   @Input() app: AppForClient;
//   @Output() refreshFav = new EventEmitter();
//   constructor(
//     private favService:FavoriteService
//   ){}
  
//   run(){
//     window.open(this.app.OpsFront);
//   }

//   myFav(app:AppForClient){
//     var fav:Favorite = new Favorite(0,app.AppID,'',app.myFav);
//     this.favService.postFavorite(fav).then(()=>{this.refreshFav.emit();});
    
//   }
// }
