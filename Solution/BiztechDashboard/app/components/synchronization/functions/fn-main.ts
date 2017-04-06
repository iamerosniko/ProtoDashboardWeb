import { Injectable } from '@angular/core';
//services
import { TempProjectService } from '../../../services/temp-project.service';
import { BTSSWDSBService } from    '../../../services/btss-wdsb.service';
import { ApplicationService } from '../../../services/application.service';
//entities
import { TempProject } from '../../../entities/tempproject';
import { Application } from '../../../entities/application';
import { AppUsers } from '../../../entities/appusers';
@Injectable()
export class FnMain  { 
    constructor(
        private tempProjectService: TempProjectService,
        private btssWdsbService : BTSSWDSBService,
        private applicationService : ApplicationService
    ){ }

    tempProject : TempProject[];
//Part 1 : Clear Temporary Table  > wdsb.tempProjects
    //1.from wdsb.temprojects 
    getTempProjects():TempProject[]{
        var tmpProj:TempProject[];
        this.tempProjectService.getProjects()
            .then(tp => {
                tmpProj = tp;
                //this.deleteProjectsToTempProject(tmpProj); //uncomment if not working as synchronous
            });
        return tmpProj;
    }
    //2.delete to tempprojects
    deleteProjectsToTempProject(tp:TempProject[]){
        (tp).forEach(element => {
            this.tempProjectService.DeleteProject(element.ProjectID);
        });
    }
//Part 2 : Insert list of applications from btss
    //3.from btss.project to wdsb.tempprojects
    getProjectsFromBTSS():TempProject[]{
        var tmpProj:TempProject[];
        this.btssWdsbService.getProjects()
            .then(tp => {
                tmpProj = tp;
                //this.postProjectsToTempProjects(tmpProj); //uncomment if not working as synchronous
            });
        return tmpProj;
    }
    //4.add to wdsb.tempprojects
    postProjectsToTempProjects(tp:TempProject[]){
        (tp).forEach(element => {
            this.tempProjectService.postProject(element);
        });
    }
/*Part 3 : Compare if already exists to wdsb.Applcation
 * if not exists > ADD 
 * (use VIEW in MSSQL right outer join + null)
*/
    //5.Compare wdsb.tempProjects and wdsb.Application
    //TODO : Create a service that gets a resultset of comparison between
    //       wdsb.tempProjects and wdsb.Application
    getNewApplications() : void{ //:Application[]{
        //return new Application[];
    }
    //6.add to wdsb.Applications
    postApplications(app:Application[]): void{
        (app).forEach(element => {
            this.applicationService.postApplication(element);
        });
    }

    //7.getUsers
    getUsers(app:Application) : AppUsers[]{
        var appUsers : AppUsers[];
        this.btssWdsbService.getUsers(app).then(user => appUsers = user);
        return appUsers;
    }
}
