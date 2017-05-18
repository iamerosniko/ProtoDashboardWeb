import { Component,OnInit } from '@angular/core';
import { AppForClient } from '../../entities/appforclient';
import { FnMainApp } from '../maintenance/functions/fn-main-app';
import { PaginationInstance } from 'ngx-pagination';
import { GetAuthService } from '../../services/getauth.service';
import { GetAuth } from '../../entities/getauth';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:`ac-parent.component.html`
})
export class ACComponent implements OnInit { 
  viewtype:number=0;
  tabselected:number=0;
  apps:AppForClient[]=[];
  listApps:AppForClient[][]=[];
  myAuth:GetAuth=new GetAuth('','',false,false,false,false)
  
  public selected:string;
  constructor(
      private fn: FnMainApp,
      private getAuthService:GetAuthService
  ){ }

  ngOnInit(){
    this.getAllApps();
    this.getAuthService.getAuth().then(auth => this.myAuth=auth);
  }
  //all biztech apps
  getAllApps(){
    this.apps=[];
    this.fn.getAppsClient()
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });
      this.tabselected=0;
  }
  //my available app
  getMyAvailApps(){
    this.apps=[];
    this.fn.getAvailAppsClient()
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });
      this.tabselected=1
  }
  //favorites
  getMyFavApps(){
    this.apps=[];
    this.fn.getFavAppsClient()
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });
      this.tabselected=2;
  }

  refresh(){
    if(this.tabselected==0)
      this.getAllApps();
    else if(this.tabselected==1)
      this.getMyAvailApps();
    else 
      this.getMyFavApps();
  }

  sliceToFour(){
    this.listApps=[];
    var ctr=0,listCtr=0;
    var tempList:AppForClient[]=[];
    for (let app of this.apps) {
      tempList.push(app);
      ctr+=1;
      listCtr+=1;
      if(ctr==4 || listCtr==this.apps.length){
        this.listApps.push(tempList);
        ctr=0;
        tempList=[];
      }
    }
  }
}
