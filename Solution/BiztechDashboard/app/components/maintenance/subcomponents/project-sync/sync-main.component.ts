import { Component,OnInit } from '@angular/core';
import { FnMain } from '../../functions/fn-main';
import { Observable } from 'rxjs/Observable';
//entities
import { Application } from '../../../../entities/application';

import { Project } from '../../../../entities/project';
@Component({
    moduleId: module.id,
    selector: 'proj-sync',
    // template: `<h1>Hello {{name}}</h1>
    //     <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
    //     <i class="glyphicon glyphicon-refresh"></i>  Refresh
    //     </a>`,
    templateUrl: 'sync-main.component.html',
})
export class SyncMainComponent implements OnInit  { 
    appLength:number=0;
    appDetailCompleted:number=0;
    newApps:Project[]=[];
    constructor(
        private fnMain : FnMain,
        
    ){ 
    //     setInterval(() => {
    //         this.checkComplete();
    //  }, 1000);
    }

    checkComplete():boolean{
        this.appLength=this.newApps.length;
        if(this.appLength==0){
            return true;
        }
        else{
            this.appDetailCompleted=0;
            for (let app of this.newApps) {
                var a = app.BackEndPath;
                var b = app.FrontEndPath;
                if(!(a==null || b==null)){
                    if(a.trim().length>0 && b.trim().length>0)
                    {
                        this.appDetailCompleted += 1;
                    }
                }
            }
            return this.appLength == this.appDetailCompleted;
        }
    }

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
        // console.log('done-removeAppFromTemp');
    }
    //2
    getAppToTemp():void{
        /* this method is to add all applications found in btss to wdsb.tempProjects */
        this.fnMain.getProjectsFromBTSS()
        .then(tp=>{
            // console.log(tp.length),
            this.fnMain.postProjectsToTempProjects(tp)
        });
        // console.log('done-getAppToTemp');

    }
    //3
    getNewAppFromTemp():void{
        /*this method is to check if there's a new applications found in btss*/
        this.fnMain.getNewApplications()
            .then(apps =>{
                this.newApps=apps;
                this.checkComplete();
                // console.log('done-getNewAppFromTemp');
            });
    }

    saveNewApplications(apps:Project[]){
        //this method is to save new applications to wdsb.applications
            this.fnMain.postApplications(apps).then(()=>{
                this.initAppSync();
            });
        // var result = confirm("Confirm Add?");
        // if (result == true) {
        //     this.fnMain.postApplications(apps);  
        //     alert("Successfully saved!");
        // }
        // else {
        // //Do nothing
        // } 
    }
      
}
