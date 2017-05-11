import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'ac-viewdetail',
  templateUrl:`ac-viewdetail.component.html`
})
export class ACDetail  { 
  constructor(
        private route: ActivatedRoute,
        private router: Router
  ){ }
  selectedID:number=0;
  getselectedDetailID(){
      this.route.params.subscribe(params => {
          this.selectedID = params['id'];});    
  }
}
