import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { AppUsers } from '../entities/appusers';
import { Auth } from '../entities/auth';
@Injectable()
export class AppUserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiAppUsers = 'api/Appusers';  
    
    constructor(private http: Http){}

    getUsers(): Promise<AppUsers[]> {
        return this.http
                .get(this.apiAppUsers, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getAuth(projectID:string):Promise<Auth>{
        const url = `${this.apiAppUsers}/GetAuth/?projectID=${projectID}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    //get users where appid = ''
    getUser(id: number): Promise<AppUsers[]> {
        const url = `${this.apiAppUsers}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    postUser(newUser: AppUsers): Promise<AppUsers> {
        return this.http
            .post(this.apiAppUsers, JSON.stringify(newUser), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    putUser(user: AppUsers): Promise<AppUsers> {
        const url = `${this.apiAppUsers}/${user.AppUserID}`;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
    }
    
    DeleteUser(): Promise<void> {
        return this.http
            .delete(this.apiAppUsers, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
