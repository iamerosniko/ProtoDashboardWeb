import { Component,OnInit } from '@angular/core';
import { FnUser } from './../functions/fn-user';
import { Observable } from 'rxjs/Observable';
//entities
import { Project } from '../../../entities/project';
import { ProjectUsers } from '../../../entities/projectusers';
@Component({
    moduleId: module.id,
    selector: 'sync-comp',
    // template: `<h1>Hello {{name}}</h1>
    //     <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
    //     <i class="glyphicon glyphicon-refresh"></i>  Refresh
    //     </a>`,
    templateUrl: 'sync-user.component.html',
})
export class SyncUserComponent implements OnInit  { 
    name = 'Sync page';
    projects:ProjectUsers[]=[];
    constructor(
        private fnUser : FnUser,
    ){ }

    ngOnInit(){
        this.getProjects();
    }
    
    getProjects():void{
        this.fnUser.getProjectsWithBTSSAuthentication()
        .then(projs => {this.projects = projs;})
    }

    initUserSync():void{
        this.fnUser.deleteAllUsers();
    }

    // deleteOldUsers(appID: number):void {
    //     this.fnUser.deleteUsers(this.fnUser.getUsersFromWDSB(appID));
    // }

    // getNewUsers(app:Application):boolean{
    //     return (this.fnUser.postUsers(this.fnUser.getUsersFromApplications(app)));
    // } 
}