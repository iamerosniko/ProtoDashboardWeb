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
  apps:AppForClient[]=[];
  listApps:AppForClient[][]=[];
  constructor(
      private fn: FnMainApp,
  ){ }
  ngOnInit(){
    this.fn.getAppsClient()
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });
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
