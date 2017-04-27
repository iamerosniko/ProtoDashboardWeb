import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
//services
import { ContactService } from '../../../services/contact.service';
//entities
import { Contact } from '../../../entities/contact';

@Injectable()
export class FnContact  { 
    
    constructor(
        private contactService : ContactService
    ){ }
    //get all
    getContacts():Promise<Contact[]>{
        return this.contactService.getContacts();
    }
    //getone
    getContact(id:number):Promise<Contact>{
        return this.contactService.getContact(id);
    }
    //submit
    submitContact(isNew:boolean,contact:Contact):Promise<any>{
        return isNew ? this.contactService.postContact(contact) : this.contactService.putContact(contact);
    }
}