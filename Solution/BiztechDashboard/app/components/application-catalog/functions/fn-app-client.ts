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
import { FnBU } from '../../maintenance/functions/fn-bu';
@Injectable()
export class FnAppClient  { 
    constructor(
        private tempProjectService: TempProjectService,
        private btssWdsbService : BTSSWDSBService,
        private applicationService : ApplicationService,
        private appuserService : AppUserService,
        private fnBU:FnBU
    ){ }

    //getting application if can be use the specific env
    getAuth(projectID:string):boolean{
        var isAuth=false;
        this.appuserService.getAuth(projectID)
            .then(a=>isAuth=a.isAuth);
        return isAuth;
    }
    //getBuName()
    getBUName(id:number):string{
        var buname:string;
        this.fnBU.getBU(id).then(bu=>buname=bu.BUName);
        return buname
    }
}
