import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { Ratings } from '../entities/ratings';
@Injectable()
export class RatingService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Ratings';
    constructor(private http: Http){}
    getAverageRating(id:number):Promise<Ratings>{
        const url = `${this.apiUrl}/Get_RatingAverage/?id=${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);
    }

    getRating(id: number): Promise<Ratings> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }
    postRating(fav: Ratings): Promise<any>{
         return this.http
            .post(this.apiUrl, JSON.stringify(fav), {headers: this.headers})
            .toPromise()
            .then(()=>JSON.stringify(true) )
            .catch(()=>JSON.stringify(false) );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
