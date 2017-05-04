import { Component,OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
//entities
import { Application } from '../../../../entities/application';
import { MaintenanceComponent } from '../../maintenance.component';
import { Project } from '../../../../entities/project';
import { FnMainApp } from '../../functions/fn-main-app';
@Component({
    moduleId: module.id,
    selector: 'app-form',
    templateUrl: 'app-form.component.html',
})
export class AppFormComponent implements OnInit  { 
    @Input() mainView:MaintenanceComponent;
    name = 'Sync page';
    newApps:Project[]=[];
    selectedApp:Application;
    formMode:string= 'New';
    
    constructor(
        private route: ActivatedRoute,
        private fn : FnMainApp
    ){ }

    ngOnInit(){
        this.route.params.subscribe((params: {id: number}) => {
           this.fn.getApp(params.id)
            .then(app => {
                this.selectedApp=app;
                this.formMode = this.selectedApp.AppID==0 
                    ? 'New' : 'Update'; 
            });
        });
    }
    
}
