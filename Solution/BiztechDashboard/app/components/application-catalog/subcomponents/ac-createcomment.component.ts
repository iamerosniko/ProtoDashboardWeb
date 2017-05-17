import { Component,OnInit,Input } from '@angular/core';
import { Comment } from '../../../entities/comment';
import { CommentService } from '../../../services/comment.service';

@Component({
  moduleId: module.id,
  selector: 'ac-createcomment',
  templateUrl:`ac-createcomment.component.html`
})
export class ACCreateCommentComponent  { 
  @Input() appid:number;
  comment=new Comment(0,this.appid,'','',new Date(),'');

  constructor(
    private commentService:CommentService
  ){
    
  }

  submitComment(){
    this.comment.AppID=this.appid;
    this.commentService.postComment(this.comment)
    .then(()=>{
      alert('success');
      //refresh comment from parent
    })
  }

  closeComment(){
    this.comment=new Comment(0,this.appid,'','',new Date(),'');
  }
}
