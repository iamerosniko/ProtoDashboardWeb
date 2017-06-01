import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { Project } from '../entities/project';
import { ProjectUsers } from '../entities/projectusers';
import { AppUsers } from '../entities/appusers';
import { Application } from '../entities/application';
@Injectable()
export class BTSSWDSBService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private BTSSUrl = 'api/BTSSProjects';
    private userURL = 'api/GetUsers';
    constructor(private http: Http){}

    getProjects(): Promise<Project[]> {
        return this.http
                .get(this.BTSSUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json()) //testing
                .catch(this.handleError);
    }

    getProject(id: string): Promise<Project> {
        const url = `${this.BTSSUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  // testing
                .catch(this.handleError);
    }

    getUsers(myproject : ProjectUsers): Promise<any> {
        var url =``;
        url=(myproject.ProjectDatasource!="")
          ? `${this.userURL}/Getset_User/?ds=${myproject.ProjectDatasource}&dbase=${myproject.ProjectDb}&projectID=${myproject.ProjectID}&userID=${myproject.ProjectUserID}&password=${myproject.ProjectPassword}`
          : `${this.userURL}/GetUserFromMSAccess/?filename=${myproject.ProjectBackEnd}&projectID=${myproject.ProjectID}&userID=${myproject.ProjectUserID}&password=${myproject.ProjectPassword}`;
        //const url = `${this.userURL}/Getset_User`;
        return this.http
                .get(url, {headers: this.headers})
                //.get(url,JSON.stringify(myproject))
                .toPromise()
                .then(response=>response.json()) //testing
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
