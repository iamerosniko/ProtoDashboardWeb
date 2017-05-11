import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { Favorite } from '../entities/favorite';
@Injectable()
export class FavoriteService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Favorites';
    constructor(private http: Http){}

    postFavorite(fav: Favorite): Promise<any>{
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
