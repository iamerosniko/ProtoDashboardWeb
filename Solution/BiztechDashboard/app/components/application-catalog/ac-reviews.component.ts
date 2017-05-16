import { Component,OnInit,Input} from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'ac-reviews',
  templateUrl:`ac-reviews.component.html`
})
export class ACReviewsComponent  { 
  @Input() appID:number;
}
