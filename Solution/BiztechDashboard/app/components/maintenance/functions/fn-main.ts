import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
//services
import { TempProjectService } from '../../../services/temp-project.service';
import { BTSSWDSBService } from    '../../../services/btss-wdsb.service';
import { ApplicationService } from '../../../services/application.service';
import { AppUserService } from '../../../services/app-user.service';
//entities
import { Project } from '../../../entities/project';
import { Application } from '../../../entities/application';
import { AppUsers } from '../../../entities/appusers';
@Injectable()
export class FnMain  { 
    constructor(
        private tempProjectService: TempProjectService,
        private btssWdsbService : BTSSWDSBService,
        private applicationService : ApplicationService,
        private appuserService : AppUserService
    ){ }

    tempProject : Project[];
//Part 1 : Clear Temporary Table  > wdsb.tempProjects
    //1.from wdsb.temprojects 
    getTempProjects():Promise<Project[]>{
        return this.tempProjectService.getProjects();
        //return tmpProj;
    }
    //2.delete to tempprojects
    deleteProjectsToTempProject(tp:Project[]){
        // (tp).forEach(element => {
        //     this.tempProjectService.DeleteProject(element.ProjectID);
        // });
        for (let entry of tp) {
            this.tempProjectService.DeleteProject(entry.ProjectID); 
        }
    }
//Part 2 : Insert list of applications from btss
    //3.from btss.project to wdsb.tempprojects
    getProjectsFromBTSS():Promise<Project[]>{
        var tmpProj:Project[];
        return this.btssWdsbService.getProjects();
    }
    //4.add to wdsb.tempprojects
    postProjectsToTempProjects(tp:Project[]){
        // (tp).forEach(element => {
        //     this.tempProjectService.postProject(element);
        // });
        // for (let entry of tp) {
        //     this.tempProjectService.postProject(entry)
        // }
        this.tempProjectService.postProjects(tp);
    }
/*Part 3 : Compare if already exists to wdsb.Applcation
 * if not exists > ADD 
 * (use VIEW in MSSQL right outer join + null)
*/
    //5.Compare wdsb.tempProjects and wdsb.Application
    getNewApplications():Promise<Project[]>{ 
        return this.applicationService.getNewApplications();
        
    }
    //6.add to wdsb.Applications
    postApplications(app:Project[]): void{
        // (app).forEach(element => {
        //     this.applicationService.postApplication(element);
        // });
        this.tempProjectService.postProjects2(app); 
    }
}
