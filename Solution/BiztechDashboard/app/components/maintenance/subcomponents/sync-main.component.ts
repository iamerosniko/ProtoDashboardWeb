import { Component,OnInit } from '@angular/core';
import { FnMain } from './../functions/fn-main';
import { Observable } from 'rxjs/Observable';
//entities
import { Application } from '../../../entities/application';

import { Project } from '../../../entities/project';
@Component({
    moduleId: module.id,
    selector: 'sync-comp',
    // template: `<h1>Hello {{name}}</h1>
    //     <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
    //     <i class="glyphicon glyphicon-refresh"></i>  Refresh
    //     </a>`,
    templateUrl: 'sync-main.component.html',
})
export class SyncMainComponent implements OnInit  { 
    name = 'Sync page';
    newApps:Project[]=[];
    constructor(
        private fnMain : FnMain,
    ){ }

    ngOnInit(){
        this.initAppSync();
    }
    initAppSync(){
    
        this.removeAppFromTemp(); // 1 and 2 
        this.getAppToTemp(); // 3 and 4    
        this.getNewAppFromTemp();
    }
    //1
    removeAppFromTemp():void{
        /* this method is to delete temporary data in wdsb.tempProjects */       
        this.fnMain.getTempProjects()
        .then(tp=>{
            this.fnMain.deleteProjectsToTempProject(tp);
        });
        console.log('done-removeAppFromTemp');
    }
    //2
    getAppToTemp():void{
        /* this method is to add all applications found in btss to wdsb.tempProjects */
        this.fnMain.getProjectsFromBTSS()
        .then(tp=>{
            console.log(tp.length),
            this.fnMain.postProjectsToTempProjects(tp)
        });
        console.log('done-getAppToTemp');

    }
    //3
    getNewAppFromTemp():void{
        /*this method is to check if there's a new applications found in btss*/
        this.fnMain.getNewApplications()
            .then(apps =>{
                this.newApps=apps;
                console.log('done-getNewAppFromTemp');
            });
    }
/*                     OTHERS                         */
    // saveNewApplications(apps:Project[]){
    //     //this method is to save new applications to wdsb.applications
    //     this.fnMain.postApplications(apps);
    // }
      
}
