import { Component,OnInit,Input } from '@angular/core';
import { FnUser } from '../../functions/fn-user';
import { Observable } from 'rxjs/Observable';
//entities
import { MaintenanceComponent } from '../../maintenance.component';
import { ProjectUsers } from '../../../../entities/projectusers';
@Component({
    moduleId: module.id,
    selector: 'user-sync',
    // template: `<h1>Hello {{name}}</h1>
    //     <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
    //     <i class="glyphicon glyphicon-refresh"></i>  Refresh
    //     </a>`,
    templateUrl: 'sync-user.component.html',
})
export class SyncUserComponent implements OnInit  {
    @Input() mainView:MaintenanceComponent;
    name = 'Sync page';
    progress:number=0;
    checkProgress:number=0;
    projects:ProjectUsers[]=[];
    constructor(
        private fnUser : FnUser,
    ){ }

    ngOnInit(){
        this.viewLoading();
        this.getProjects();
    }

    getProjects():void{
        this.fnUser.getProjectsWithBTSSAuthentication()
        .then(projs => {
          this.projects = projs;
          this.viewLoading();
        })
    }

    viewLoading(){
      this.mainView.showLoad=!this.mainView.showLoad;
    }

    checkifComplete():void{
        var projectCount:number = this.projects.length;
        this.progress+=1;
        this.checkProgress=Math.round((this.progress/projectCount)*100);
        if (this.progress == projectCount){
            console.log("done");
            this.progress=0;
            this.viewLoading();
        }
    }

    initUserSync():void{
        this.viewLoading();
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

    getUser(userCount:number){
        if(userCount==-1){
          return "Can't connect to sql database";
        }
        else if(userCount==-2){
          return "Can't connect to MSACCESS database";
        }
        else if(userCount==-3){
          return "Invalid Filename";
        }
        else return userCount;
    }
}
