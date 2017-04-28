import { Component,OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities
import { MaintenanceComponent } from '../../maintenance.component';
import { Contact } from '../../../../entities/contact';
import { ContactService } from '../../../../services/contact.service';
@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html',
})
export class ContactFormComponent { 
    @Input() mainView:MaintenanceComponent; 
    isNew:boolean=true;
    
    constructor(
        public contactService:ContactService
    ){ }

    submit(){
        if(this.mainView.selectedContact.ContactID==0){
            this.contactService.postContact(this.mainView.selectedContact);
        }
        else{
            this.contactService.putContact(this.mainView.selectedContact);
        }
    }
}
