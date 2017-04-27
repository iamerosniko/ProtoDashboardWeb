import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
//services
import { BTSSWDSBService } from    '../../../services/btss-wdsb.service';
import { AppUserService } from '../../../services/app-user.service';
import { ProjectService } from '../../../services/project.service';
//entities
import { ProjectUsers } from '../../../entities/projectusers';
import { Application } from '../../../entities/application';
import { AppUsers } from '../../../entities/appusers';
@Injectable()
export class FnApp  { 
    constructor(
        private btssWdsbService : BTSSWDSBService,
        private appuserService : AppUserService,
        private projectService : ProjectService
    ){ }

/*  Project section */
/* Get all projects */
    getProjectsWithBTSSAuthentication():Promise<ProjectUsers[]>{
        return this.projectService.getProjects2();
    }

/*  USER SYNCHRONIZATION section           */

/*Part 1 delete all users before synchronization*/
    deleteAllUsers():void{
        this.appuserService.DeleteUser();
    }
/*Part 2 delete all users before synchronization*/
    //3.getUsers from their database/application retrieves number of users
    getUsersFromApplications(projects:ProjectUsers) : Promise<any>{
        return this.btssWdsbService.getUsers(projects);
    }
}