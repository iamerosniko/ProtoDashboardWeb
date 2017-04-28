import { Component,OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities
import { Contact } from '../../../../entities/contact';
import { MaintenanceComponent } from '../../maintenance.component';
@Component({
    moduleId: module.id,
    selector: 'contact-list',
    templateUrl: 'contact-list.component.html',
})
export class ContactListComponent { 
    @Input() mainView:MaintenanceComponent;
    
    selectContact(contact:Contact){
        this.mainView.selectedContact=contact;
        this.mainView.toFormView('Update',true);
    }
}
