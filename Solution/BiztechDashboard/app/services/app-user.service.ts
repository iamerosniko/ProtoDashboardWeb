import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { AppUsers } from '../entities/appusers';
@Injectable()
export class AppUserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Appusers';  
    
    constructor(private http: Http){}

    getProjects(): Promise<AppUsers[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getProject(id: string): Promise<AppUsers> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    postProject(newUser: AppUsers): Promise<AppUsers> {
        return this.http
            .post(this.apiUrl, JSON.stringify(newUser), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    putProject(user: AppUsers): Promise<AppUsers> {
        const url = `${this.apiUrl}/${user.AppUserID}`;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
    }
    
    DeleteProject(id: string): Promise<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
