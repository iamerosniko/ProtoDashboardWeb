import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities
import { Application } from '../../../../entities/application';

import { Project } from '../../../../entities/project';
@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html',
})
export class ContactFormComponent implements OnInit  { 
    name = 'Sync page';
    newApps:Project[]=[];
    constructor(
    ){ }

    ngOnInit(){
       // this.initAppSync();
    }
    
}
