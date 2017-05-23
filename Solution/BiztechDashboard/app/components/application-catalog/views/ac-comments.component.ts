import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { GetAuth } from '../../../entities/getauth';
import { Comment } from '../../../entities/comment';
import { GetAuthService } from '../../../services/getauth.service';
@Component({
  moduleId: module.id,
  selector: 'ac-comments',
  templateUrl:`ac-comments.component.html`
})
export class ACCommentsComponent implements OnInit  { 
   @Input() thiscomment:Comment=new Comment(0,0,'','',new Date(),'');
   @Input() thisIndex:number;
   fullname:string='';
   constructor(private ga:GetAuthService){
      
   }

   ngOnInit(){
     console.log(this.thiscomment);
     this.getFullName(this.thiscomment.UserName);
   }

   getFullName(username:string){
      this.ga.getFullName(username)
      .then(t=>this.fullname=t.FullName);
   }
}
