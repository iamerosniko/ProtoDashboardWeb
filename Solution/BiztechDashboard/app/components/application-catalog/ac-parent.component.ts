import { Component,OnInit } from '@angular/core';
import { AppForClient } from '../../entities/appforclient';
import { FnMainApp } from '../maintenance/functions/fn-main-app';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:`ac-parent.component.html`
})
export class ACComponent { 
  viewtype:number=0;
  tabselected:number=0;
  apps:AppForClient[]=[];
  listApps:AppForClient[][]=[];
  public selected:string;
  constructor(
      private fn: FnMainApp,
  ){ }

  ngOnInit(){
    this.getAllApps();
  }
  //all biztech apps
  getAllApps(){
    this.fn.getAppsClient()
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });
      this.tabselected=0;
  }
  //my available app
  getMyAvailApps(){
    this.fn.getAvailAppsClient()
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });
      this.tabselected=1
  }
  //favorites
  getMyFavApps(){
    this.fn.getFavAppsClient()
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });
      this.tabselected=2;
  }

  sliceToFour(){
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
