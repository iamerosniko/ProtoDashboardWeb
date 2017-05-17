import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Comment } from '../../../entities/comment';
@Component({
  moduleId: module.id,
  selector: 'ac-comments',
  templateUrl:`ac-comments.component.html`
})
export class ACCommentsComponent  { 
   @Input() comments:Comment[]=[];
   public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: 10,
      currentPage: 1
   };
   //pass -1 to previous | +1 to next
   gotoPage(mypage:number){
     this.config.currentPage+=mypage;
   }

}
