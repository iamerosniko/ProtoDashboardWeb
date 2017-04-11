import { Component,OnInit } from '@angular/core';
import { FnMain } from './functions/fn-main';
//entities
import { Application } from '../../entities/application';
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
    newApps:Application[]=null;
    constructor(
        private fnMain : FnMain,
    ){ }

    ngOnInit(){
        this.initAppSync();
    }

    initAppSync(){
        this.removeAppFromTemp(); // 1 and 2 
        this.getAppToTemp(); // 3 and 4
        //this.fnMain.getTempProjects();
        //this.fnMain.postProjectsToTempProjects(this.fnMain.getProjectsFromBTSS());
        
        //this.newApps=this.fnMain.getNewApplications();
    }
    removeAppFromTemp():void{
        /* this method is to delete temporary data in wdsb.tempProjects */       
        this.fnMain.getTempProjects()
        .then(tp=>{
            this.fnMain.deleteProjectsToTempProject(tp);
        });
        console.log('done-removeAppFromTemp');
    }

    getAppToTemp():void{
        /* this method is to add all applications found in btss to wdsb.tempProjects */
        this.fnMain.getProjectsFromBTSS()
        .then(tp=>{
            console.log(tp.length);
            this.fnMain.postProjectsToTempProjects(tp);
        });
        console.log('done-getAppToTemp');
    }

    getNewAppFromTemp():void{
        /*this method is to check if there's a new applications found in btss*/
        this.newApps=this.fnMain.getNewApplications();
    }

    saveNewApplications(apps:Application[]){
        //this method is to save new applications to wdsb.applications
        this.fnMain.postApplications(apps);
    }
    //this method is to get users in every database / applications
    //also saves all users in one repository called wdsb.appusers
    initAppUserSync(apps:Application[]):void{
        var status:boolean[];
        (apps).forEach(app => {
            this.deleteOldUsers(app.AppID); 
            status.push(this.getNewUsers(app)); // gives an status if the 
        });
        //TODO : Get users per database/applications
    }

    deleteOldUsers(appID: number):void {
        this.fnMain.deleteUsers(this.fnMain.getUsersFromWDSB(appID));
    }

    getNewUsers(app:Application):boolean{
        return (this.fnMain.postUsers(this.fnMain.getUsersFromApplications(app)));
    }   
}
