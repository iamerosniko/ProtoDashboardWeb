import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { Feature } from '../entities/feature';
@Injectable()
export class FeatureService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Features';
    constructor(private http: Http){}

    getFeatures(id:number): Promise<Feature[]> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getFeature(id: number): Promise<Feature> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }
    //single post
    postFeature(features: Feature[]): Promise<any>{
         return this.http
            .post(this.apiUrl, JSON.stringify(features), {headers: this.headers})
            .toPromise()
            .then(()=>JSON.stringify(true) )
            .catch(()=>JSON.stringify(false) );
    }
    //bulk post (add/modify)
    postFeatures(feature: Feature[]): Promise<any>{
         const url = `${this.apiUrl}/PostWDSB_Features2`;
         return this.http
            .post(url, JSON.stringify(feature), {headers: this.headers})
            .toPromise()
            .then(()=>JSON.stringify(true) )
            .catch(this.handleError);
    }
    putFeature(feature: Feature): Promise<any> {
        const url = `${this.apiUrl}/${feature.FeatureID}`;
        return this.http
            .put(url, JSON.stringify(feature), {headers: this.headers})
            .toPromise()
            .then(() => feature)
            .catch(this.handleError);
    }
    
    DeleteBU(id: string): Promise<boolean> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => true)
            .catch(() => false);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
