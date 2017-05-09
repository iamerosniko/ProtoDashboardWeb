import { Component,OnInit } from '@angular/core';
import { Application } from '../../../entities/application';
import { AppForClient } from '../../../entities/appforclient';
import { FnMainApp } from '../../maintenance/functions/fn-main-app';
@Component({
  moduleId: module.id,
  selector: 'ac-grid',
  templateUrl:`ac-grid.component.html`
})
export class ACGridComponent  { 
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
  //populating list
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
