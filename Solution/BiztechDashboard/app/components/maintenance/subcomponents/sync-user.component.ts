import { Component,OnInit } from '@angular/core';
import { FnUser } from './../functions/fn-user';
import { Observable } from 'rxjs/Observable';
//entities
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
    progress:number=0;
    checkProgress:number=0;
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

    checkifComplete():void{
        var projectCount:number = this.projects.length;
        this.progress+=1;
        this.checkProgress=(this.progress/projectCount)*100;
        if (this.progress == projectCount){
            console.log("done");
            this.progress=0;
        }
    }


    initUserSync():void{
        this.progress=0;
        this.fnUser.deleteAllUsers();
        for (let proj of this.projects) {
            this.fnUser.getUsersFromApplications(proj)
            .then(num=>{
                proj.ProjectSyncStatus=num.AffectedUsers,
                //console.log(proj.ProjectName + ' = ' + proj.ProjectSyncStatus),
                this.checkifComplete();
            });
        }
    }

}