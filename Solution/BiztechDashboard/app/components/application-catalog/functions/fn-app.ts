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
export class FnApp  { 
    constructor(
        private tempProjectService: TempProjectService,
        private btssWdsbService : BTSSWDSBService,
        private applicationService : ApplicationService,
        private appuserService : AppUserService
    ){ }

    getApplications():Promise<Application[]>{
        return this.applicationService.getApplications();
    }

    setAppToThumnails(apps:Application[]){
        var len:number = apps.length;
        var appThumbnail=[];
        for (var i = 0; i < apps.length; i+=4){
            var tempApps:Application[];
            var ctr:number = len - i;
            if(ctr % 4 == 0){
                tempApps.push(apps[i]);
                tempApps.push(apps[i+1]);
                tempApps.push(apps[i+2]);
                tempApps.push(apps[i+3]);
            }
            else{
                for (var j = i; j < ctr; j++){
                    tempApps.push(apps[j]);
                }
            }
            appThumbnail.push(tempApps);
        }
    }
}
