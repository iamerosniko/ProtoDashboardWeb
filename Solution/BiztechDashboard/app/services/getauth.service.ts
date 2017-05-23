import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { GetAuth } from '../entities/GetAuth';
@Injectable()
export class GetAuthService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/GetAuth';
    constructor(private http: Http){}

    getAuth(): Promise<GetAuth> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getFullName(username:string): Promise<GetAuth> {
        const url = `${this.apiUrl}/getFullName/?username=${username}`;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
