import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { Project } from '../entities/project';
import { ProjectUsers } from '../entities/projectusers';
@Injectable()
export class ProjectService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Projects';
    constructor(private http: Http){}

    getProjects(): Promise<Project[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }
    getProjects2(): Promise<ProjectUsers[]> {
        const url = `${this.apiUrl}/GetWDSB_Projects2`;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getProject(id: string): Promise<Project> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    postProject(newProject: Project):void{
         this.http
            .post(this.apiUrl, JSON.stringify(newProject), {headers: this.headers})
            .toPromise()
            .then(()=>{console.log(true);})
            .catch(()=>{console.log(newProject.ProjectID);});
    }

    putProject(project: Project): Promise<Project> {
        const url = `${this.apiUrl}/${project.ProjectID}`;
        return this.http
            .put(url, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(() => project)
            .catch(this.handleError);
    }
    
    DeleteProject(id: string): Promise<boolean> {
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
