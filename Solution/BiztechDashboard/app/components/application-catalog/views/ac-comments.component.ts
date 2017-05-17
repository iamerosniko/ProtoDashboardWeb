import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Comment } from '../../../entities/comment';
@Component({
  moduleId: module.id,
  selector: 'ac-comments',
  templateUrl:`ac-comments.component.html`
})
export class ACCommentsComponent  { 
   @Input() thiscomment:Comment;
   @Input() thisIndex:number;
}
