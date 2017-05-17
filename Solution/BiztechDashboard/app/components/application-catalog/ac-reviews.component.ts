import { Component,OnInit,Input} from '@angular/core';
import { Comment } from '../../entities/comment';
import { CommentService } from '../../services/comment.service';
@Component({
  moduleId: module.id,
  selector: 'ac-reviews',
  templateUrl:`ac-reviews.component.html`
})
export class ACReviewsComponent  { 
  @Input() appID:number;
  comments:Comment[]=[];
  
  constructor(
    private commentService:CommentService
  ){
    this.getComments();
  }

  getComments(){
    this.commentService.getComment(this.appID)
      .then(comments=>this.comments=comments);
  }
}
