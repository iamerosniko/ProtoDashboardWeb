import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute,Router } from '@angular/router';
//datetimecomponent
import { IMyOptions, IMyDateModel } from 'mydatepicker';
//entities
import { Application } from '../../../../entities/application';
import { MaintenanceComponent } from '../../maintenance.component';
import { Project } from '../../../../entities/project';
import { BU } from '../../../../entities/bu';
import { Contact } from '../../../../entities/contact';
//functions
import { FnMainApp } from '../../functions/fn-main-app';
import { FnBU } from '../../functions/fn-bu';
import { FnContact } from '../../functions/fn-contact';
@Component({
    moduleId: module.id,
    selector: 'app-form',
    templateUrl: 'app-form.component.html',
})
export class AppFormComponent implements OnInit  { 
    private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'mm/dd/yyyy',
    };
    myForm: FormGroup;
    formMode:string= 'New';
    dropDownBU:BU[]=[];
    dropDownContact1:Contact[]=[];
    dropDownContact2:Contact[]=[];
    dt:Date= new Date();
    selectedApp:Application
    showDate:number=0;
    feTech:any=[];
    beTech:any=[];
    mode:number=0;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router :Router,
        private fnMainApp : FnMainApp,
        private fnBU : FnBU,
        private fnContact : FnContact
    ){
        this.clrApp();
        this.feTech=["MS Access",".NET"];
        this.beTech=["MS Access","MS SQL"];
    }

    clrApp(){
        this.selectedApp= new Application(
            0,'',0,'','',0,0,0,false,false,'',
            null,null,'','','',false,'','','',false
        );
    }

    ngOnInit(){
        this.myForm = this.formBuilder.group({
            // Empty string or null means no initial value. Can be also specific date for
            // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
            // value.

            myDate: [null, Validators.required]
            // other controls are here...
        });
        this.route.params.subscribe((params: {id: number}) => {
           this.fnMainApp.getApp(params.id)
            .then(app => {
                this.selectedApp=app;
                this.formMode = this.selectedApp.AppID==0 
                    ? 'New' : 'Update'; 
            });
        });
        this.getDropdownBU();
        this.getDropdownContact1();
        this.getDropdownContact2();
        
    }

    getDropdownBU(){
        this.fnBU.getBUs()
            .then(bus => {
                this.dropDownBU = bus;
            });
    }

    getDropdownContact1(){
        this.fnContact.getContacts()
            .then(contacts => {
                this.dropDownContact1 = contacts;
            });
            
        this.dropDownContact2.push(new Contact(null,'---None---','',''));
    }

    getDropdownContact2(){
        this.fnContact.getContacts()
            .then(contacts => {
                this.dropDownContact2 = contacts;
                this.dropDownContact2.push(new Contact(null,'---None---','',''));
            });
    }

    applicationView(){
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', {outlets: {'apps': ['Lists']}}]);
    }

    checkState():boolean{
        var myState=(
            this.selectedApp.AppName.trim().length == 0  || 
            this.selectedApp.AppBU == 0 ||
            this.selectedApp.FrontTechnology.trim().length == 0  || 
            this.selectedApp.BackTechnology.trim().length == 0  || 
            this.selectedApp.PrimaryBUContact == 0 
            //|| this.selectedApp.AppSecurity.trim().length == 0 
            || this.selectedApp.ProjectDevID.trim().length == 0
            || this.selectedApp.ProjectModID.trim().length == 0 
            || this.selectedApp.ProjectOpsID.trim().length == 0 
        );
        //console.log(myState);
        return myState;
    }

    submitApp():void{
        this.fnMainApp.submitApp(this.selectedApp.AppID==0,this.selectedApp)
        .then(()=>{
            alert("success");
            this.applicationView();
        });
    }

    onDateChanged(event: IMyDateModel) {
        console.log(event);
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }
}
