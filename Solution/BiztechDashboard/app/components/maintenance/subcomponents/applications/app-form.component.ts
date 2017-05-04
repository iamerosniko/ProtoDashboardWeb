import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute,Router } from '@angular/router';
//entities
import { Application } from '../../../../entities/application';
import { MaintenanceComponent } from '../../maintenance.component';
import { Project } from '../../../../entities/project';
import { FnMainApp } from '../../functions/fn-main-app';
import * as moment from 'moment';
@Component({
    moduleId: module.id,
    selector: 'app-form',
    templateUrl: 'app-form.component.html',
})
export class AppFormComponent implements OnInit  { 
    formMode:string= 'New';
    dt:Date= new Date();
    selectedApp:Application
    showDate:number=0;

    constructor(
        private route: ActivatedRoute,
        private router :Router,
        private fn : FnMainApp
    ){
        this.clrApp();
    }

    getDate(field:number):string{
        //date implemented
        if(field==1){ 
            return moment(this.selectedApp.DateImplemented).format('MM/DD/YYYY');
        }
        //Last Prod Date
        else if(field==2){
            return moment(this.selectedApp.LastProdDate).format('MM/DD/YYYY');
        }
        else{
            return '';
        } 
    }

    updateDate(field:number){
        //date implemented
        if(field==1){ 
            this.selectedApp.DateImplemented = new Date(this.dt.getDate());
        }
        //Last Prod Date
        else if(field==2){
            this.selectedApp.LastProdDate = new Date(this.dt.getDate());
        }
        else{
            return '';
        } 
        this.getDate(field);
    }


    clrApp(){
        this.selectedApp= new Application(
            0,'',0,'','',0,0,0,false,false,'',
            null,null,'','','',false,'','','',false
        );
    }

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
    applicationView(){
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', {outlets: {'apps': ['Lists']}}]);
    }
}
