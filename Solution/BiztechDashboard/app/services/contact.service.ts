import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { BU } from '../entities/bu';
@Injectable()
export class BUService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/BusinessUnits';
    constructor(private http: Http){}

    getBUs(): Promise<BU[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getBU(id: string): Promise<BU> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    postBU(bu: BU):void{
         this.http
            .post(this.apiUrl, JSON.stringify(bu), {headers: this.headers})
            .toPromise()
            .then(()=>{console.log(true);})
            .catch(()=>{console.log(bu.BUID);});
    }

    putBU(bu: BU): Promise<BU> {
        const url = `${this.apiUrl}/${bu.BUID}`;
        return this.http
            .put(url, JSON.stringify(bu), {headers: this.headers})
            .toPromise()
            .then(() => bu)
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
