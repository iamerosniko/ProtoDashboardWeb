import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { Contact } from '../entities/contact';
@Injectable()
export class ContactService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/BUContacts';
    constructor(private http: Http){}

    getContacts(): Promise<Contact[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getContact(id: number): Promise<Contact> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    postContact(contact: Contact):Promise<any>{
        return this.http
            .post(this.apiUrl, JSON.stringify(contact), {headers: this.headers})
            .toPromise()
            .then(()=>{console.log(true);})
            .catch(()=>{console.log(false);});
    }

    putContact(contact: Contact): Promise<any> {
        const url = `${this.apiUrl}/${contact.ContactID}`;
        return this.http
            .put(url, JSON.stringify(contact), {headers: this.headers})
            .toPromise()
            .then(() => contact)
            .catch(this.handleError);
    }
    
    DeleteContact(id: number): Promise<boolean> {
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
