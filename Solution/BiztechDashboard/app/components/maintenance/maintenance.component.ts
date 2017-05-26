import { Component,OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Observable } from 'rxjs/Observable';
//entities
import { BU } from '../../entities/bu';
import { Contact } from '../../entities/contact';
//services
import { FnBU } from './functions/fn-bu';
import { FnContact } from './functions/fn-contact';
import { GetAuthService } from '../../services/getauth.service';
import { GetAuth } from '../../entities/getauth';
@Component({
    moduleId: module.id,
    selector: 'maintenance-parent',
    templateUrl: 'maintenance.component.html',
})
export class MaintenanceComponent { 
    constructor(
        public fnBU:FnBU,
        public fnContact:FnContact,
        private router: Router,
        private getAuthService:GetAuthService,
    ){
        this.isUserAdmin();
        this.refreshLists();
    }
    
    myAuth:GetAuth=new GetAuth('','',false,false,false,false,'');
    //bu
    listBU:BU[]=[];
    selectedBU:BU=new BU(0,'');
    //contacts
    listContact:Contact[]=[];
    selectedContact:Contact=new Contact(0,'','','');
    //main
    showForm:boolean=false;
    formMode:string= 'New';
    selectedForm:number=0;
    toFormView(mode:string,form:boolean,selectList:number){
        this.formMode=mode;
        this.showForm=form;
        this.checkForm(mode);
        this.refreshLists();
        this.router.navigate(['/Maintenance']);
        this.selectedForm=selectList;
    }

    applicationView(path:string){
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', {outlets: {'apps': [path]}}]);
    }

    isUserAdmin(){
        this.getAuthService.getAuth()
            .then(auth => {
                this.myAuth=auth;
                 if(this.myAuth.Module==""){
                    this.router.navigateByUrl('/Applications');
                 }
        });
       
    }

    private checkForm(mode:string){
        if(mode=='New'){
            //clear all details
            this.selectedBU=new BU(0,'');
            this.selectedContact=new Contact(0,'','','');
        }
    }
    //all
    private refreshLists(){
        this.fnBU.getBUs().then(b=>this.listBU=b).catch(()=>{this.listBU=[]});
        this.fnContact.getContacts().then(b=>this.listContact=b).catch(()=>{this.listContact=[]});
    }
    //BU
    submitBU(){
        this.fnBU.submitBU(this.selectedBU.BUID==0,this.selectedBU)
            .then(()=>{
                this.refreshLists();
                this.toFormView('New',false,0);
                console.log('success');
            })
            .catch(()=>{
                this.refreshLists();
            });
    }
    //Contacts
    submitContact(){
        this.fnContact.submitContact(this.selectedContact.ContactID==0,this.selectedContact)
            .then(()=>{
                this.refreshLists();
                this.toFormView('New',false,1);
                console.log('success');
            })
            .catch(()=>{
                this.refreshLists();
            });
    }

}
