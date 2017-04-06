import { Component } from '@angular/core';
import { FnMain } from './functions/fn-main';
//entities
import { Application } from '../../entities/application';
@Component({
    moduleId: module.id,
    selector: 'sync-comp',
  template: `<h1>Hello {{name}}</h1>
    <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
      <i class="glyphicon glyphicon-refresh"></i>  Refresh
    </a>`,
    // templateUrl: 'sync-main.component.html',
})
export class SyncMainComponent  { 
    name = 'Sync page';
    constructor(
        private fnMain : FnMain,
    ){ }

    // getSample():void{
    //     this.name=this.fnMain.changeStringSmple();
    // }

    initAppSync(){
        //this method is to delete temporary data in wdsb.tempProjects
        this.fnMain.deleteProjectsToTempProject(this.fnMain.getTempProjects());
        //this method is to add all applications found in btss to wdsb.tempProjects
        this.fnMain.postProjectsToTempProjects(this.fnMain.getProjectsFromBTSS());
        //this method is to check if there's a new applications found in btss
        //NOTE: this is connected to fn-main number 5 tag
    }

    saveNewApplications(apps:Application[]){
        //this method is to save new applications to wdsb.applications
        this.fnMain.postApplications(apps);
    }
    //this method is to get users in every database / applications
    //also saves all users in one repository called wdsb.appusers
    initAppUserSync(){
        //TODO : Get users per database/applications
    }

}
