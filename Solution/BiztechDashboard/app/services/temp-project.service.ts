import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { TempProject } from '../entities/tempproject';
@Injectable()
export class TempProjectService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/TempProjects';  
    
    constructor(private http: Http){}

    getProjects(): Promise<TempProject[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getProject(id: string): Promise<TempProject> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    postProject(newProject: TempProject): Promise<TempProject> {
        return this.http
            .post(this.apiUrl, JSON.stringify(newProject), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    putProject(project: TempProject): Promise<TempProject> {
        const url = `${this.apiUrl}/${project.ProjectID}`;
        return this.http
            .put(url, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(() => project)
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
