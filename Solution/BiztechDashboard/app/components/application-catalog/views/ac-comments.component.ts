import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { GetAuth } from '../../../entities/getauth';
import { Comment } from '../../../entities/comment';
import { GetAuthService } from '../../../services/getauth.service';
@Component({
  moduleId: module.id,
  selector: 'ac-comments',
  templateUrl:`ac-comments.component.html`
})
export class ACCommentsComponent  { 
   @Input() thiscomment:Comment;
   @Input() thisIndex:number;

   constructor(private ga:GetAuthService){

   }

   getFullName(username:string):string{
      var temp :GetAuth;
      this.ga.getFullName(username)
      .then(t=>temp=t);
      return temp.FullName ;
   }
}
