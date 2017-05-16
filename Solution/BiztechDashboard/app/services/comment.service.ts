import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { Comment } from '../entities/comment';
@Injectable()
export class CommentService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Comments';
    constructor(private http: Http){}

    getComments(): Promise<Comment[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getComment(id: number): Promise<Comment[]> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    postComment(comment: Comment): Promise<any>{
         return this.http
            .post(this.apiUrl, JSON.stringify(comment), {headers: this.headers})
            .toPromise()
            .then(()=>JSON.stringify(true) )
            .catch(()=>JSON.stringify(false) );
    }

    // putBU(bu:Comment): Promise<any> {
    //     const url = `${this.apiUrl}/${bu.BUID}`;
    //     return this.http
    //         .put(url, JSON.stringify(bu), {headers: this.headers})
    //         .toPromise()
    //         .then(() => bu)
    //         .catch(this.handleError);
    // }
    
    DeleteComment(id: string): Promise<boolean> {
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
