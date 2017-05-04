import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
//services
import { ApplicationService } from '../../../services/application.service';
//entities
import { Application } from '../../../entities/application';

@Injectable()
export class FnMainApp  { 
    
    constructor(
        private appService : ApplicationService
    ){ }
    //get all
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
}