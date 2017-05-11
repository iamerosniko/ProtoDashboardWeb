import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
//services
import { ApplicationService } from '../../../services/application.service';
//entities
import { Application } from '../../../entities/application';
import { AppForClient } from '../../../entities/appforclient';

@Injectable()
export class FnMainApp  { 
    
    constructor(
        private appService : ApplicationService
    ){ }
    //ADMIN INTERFACE
    //get all (admin)
    getApps():Promise<Application[]>{
        return this.appService.getApplications();
    }
    //getone
    getApp(id:number):Promise<Application>{
        return this.appService.getApplication(id);
    }
    //submit
    submitApp(isNew:boolean,app:Application):Promise<any>{
        return isNew 
            ? this.appService.postApplication(app) 
            : this.appService.putApplication(app);
    }

    //CLIENT INTERFACE
    //get all (for client side only)
    getAppsClient():Promise<AppForClient[]>{
        return this.appService.getAllAppClient();
    }
    //get fav app
    getFavAppsClient():Promise<AppForClient[]>{
        return this.appService.getFavAppClient();
    }
    //get avail app
    getAvailAppsClient():Promise<AppForClient[]>{
        return this.appService.getAvailAppClient();
    }
}