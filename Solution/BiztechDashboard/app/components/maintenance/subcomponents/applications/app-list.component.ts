import { Component,OnInit,Input } from '@angular/core';
import { Router }  from '@angular/router';
import { Observable } from 'rxjs/Observable';
//entities
import { Application } from '../../../../entities/application';
import { MaintenanceComponent } from '../../maintenance.component';

import { Project } from '../../../../entities/project';
@Component({
    moduleId: module.id,
    selector: 'app-list',
    templateUrl: 'app-list.component.html',
})
export class AppListComponent implements OnInit  { 
    @Input() mainView:MaintenanceComponent;

    name = 'Sync page';
    newApps:Project[]=[];
    constructor(
        private router: Router,
    ){ }

    ngOnInit(){
    }

    applicationView(id:number){
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', {outlets: {'apps': [id]}}]);
    }
    
}
