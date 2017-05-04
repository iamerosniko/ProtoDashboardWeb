import { Component,OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities
import { Application } from '../../../../entities/application';
import { MaintenanceComponent } from '../../maintenance.component';

import { Project } from '../../../../entities/project';
@Component({
    moduleId: module.id,
    selector: 'app-parent',
    templateUrl: 'app-parent.component.html',
})
export class AppParentComponent implements OnInit  { 
    @Input() mainView:MaintenanceComponent;

    name = 'Sync page';
    newApps:Project[]=[];
    constructor(
    ){ }

    ngOnInit(){
      //  this.initAppSync();
    }
    
}
