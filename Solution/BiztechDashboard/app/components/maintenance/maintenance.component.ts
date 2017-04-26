import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities

@Component({
    moduleId: module.id,
    selector: 'maintenance-parent',
    templateUrl: 'maintenance.component.html',
})
export class MaintenanceComponent implements OnInit  { 
    constructor(
    ){ }
    
    showForm:boolean=false;
    formMode:string= 'New';
    ngOnInit(){
        
    }
    
}
