import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
//services
import { ApplicationService } from '../../../services/application.service';
import { FeatureService } from '../../../services/feature.service';
//entities
import { Application } from '../../../entities/application';
import { AppForClient } from '../../../entities/appforclient';
import { Feature } from '../../../entities/feature';
@Injectable()
export class FnMainApp  { 
    
    constructor(
        private appService : ApplicationService,
        private featService : FeatureService
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
    //get features where appID == id
    getFeatures(id:number):Promise<Feature[]>{
        return this.featService.getFeatures(id);
    }
    //submit
    submitApp(isNew:boolean,app:Application):Promise<any>{
        return isNew 
            ? this.appService.postApplication(app) 
            : this.appService.putApplication(app);
    }
    submitFeatures(features:Feature[]):Promise<any>{
        return this.featService.postFeatures(features);
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
    getAppDetail(id:number):Promise<AppForClient>
    {
        return this.appService.getAppDetail(id);
    }
}