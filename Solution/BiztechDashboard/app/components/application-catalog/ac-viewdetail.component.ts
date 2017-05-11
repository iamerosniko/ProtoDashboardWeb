import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FnMainApp } from '../maintenance/functions/fn-main-app';
import { AppForClient } from '../../entities/appforclient';
@Component({
  moduleId: module.id,
  selector: 'ac-viewdetail',
  templateUrl:`ac-viewdetail.component.html`
})
export class ACDetail implements OnInit { 
  selectedID:number=0;
  app:AppForClient;
  constructor(
        private route: ActivatedRoute,
        private fnMainApp : FnMainApp,
        private router: Router
  ){ }
  ngOnInit(){
    this.getselectedID();
    this.getDetail();
  }
  getselectedID(){
    this.route.params.subscribe(params => {
        this.selectedID = params['id'];});    
  }
  getDetail(){
    this.fnMainApp.getAppDetail(this.selectedID)
      .then(detail => this.app = detail[0]);
  }
}
