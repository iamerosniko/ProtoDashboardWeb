import { Component,OnInit } from '@angular/core';
import { Application } from '../../entities/application';
import { FnMainApp } from '../maintenance/functions/fn-main-app';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:`ac-parent.component.html`
})
export class ACComponent implements OnInit { 
  viewtype:number=0;
  apps:Application[]=[];
  listApps:Application[][]=[];
  constructor(
        private fn: FnMainApp
  ){ }
  ngOnInit(){
    this.fn.getApps()
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });
  }

  sliceToFour(){
    var ctr=0;
    var tempList:Application[]=[];
    for (let app of this.apps) {
      tempList.push(app);
      ctr+=1;
      if(ctr==4){
        this.listApps.push(tempList);
        ctr=0;
        tempList=[];
      }
    }
  }
  
}
