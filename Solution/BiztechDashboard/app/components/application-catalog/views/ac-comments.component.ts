import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  moduleId: module.id,
  selector: 'ac-comments',
  templateUrl:`ac-comments.component.html`
})
export class ACCommentsComponent  { 
//   @Input() listApps:AppForClient[][]=[];
   public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: 10,
      currentPage: 1
   };
}
