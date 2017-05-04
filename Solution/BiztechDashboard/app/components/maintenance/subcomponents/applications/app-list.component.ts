import { Component,OnInit,Input } from '@angular/core';
import { Router }  from '@angular/router';
import { Observable } from 'rxjs/Observable';
//entities
import { Application } from '../../../../entities/application';
import { Project } from '../../../../entities/project';
//functions
import { FnMainApp } from '../../functions/fn-main-app';
@Component({
    moduleId: module.id,
    selector: 'app-list',
    templateUrl: 'app-list.component.html',
})
export class AppListComponent implements OnInit  { 
    applications:Application[]=[];
    constructor(
        private router: Router,
        private fn: FnMainApp
    ){ }

    ngOnInit(){
        this.fn.getApps()
            .then(apps=>{
                this.applications=apps;
            });
    }

    applicationView(id:number){
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', {outlets: {'apps': [id]}}]);
    }
    
}
