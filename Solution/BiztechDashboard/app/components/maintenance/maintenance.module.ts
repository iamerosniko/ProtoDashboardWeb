import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

/********Pgination************************************** */
import { NgxPaginationModule } from 'ngx-pagination';
/*spinner*/
// import { SpinnerComponentModule } from 'ng2-component-spinner';
/*datetime*/
/* ngx-bootstrap */
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { ProgressbarModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
//Components
import { MaintenanceComponent } from './maintenance.component';
/*Applications */
import { ProjectListComponent } from './subcomponents/applications/project-list.component';
import { AppListComponent } from './subcomponents/applications/app-list.component';
import { AppFormComponent } from './subcomponents/applications/app-form.component';
/*BU*/
import { BUListComponent } from './subcomponents/bu/bu-list.component';
import { BUFormComponent } from './subcomponents/bu/bu-form.component';
/*Contacts*/
import { ContactListComponent } from './subcomponents/contacts/contact-list.component';
import { ContactFormComponent } from './subcomponents/contacts/contact-form.component';
/*Project-sync*/
import { SyncMainComponent } from './subcomponents/project-sync/sync-main.component';
/*user-sync*/
import { SyncUserComponent } from './subcomponents/user-sync/sync-user.component';
//functions (providers)
import { FnMain } from './functions/fn-main';
import { FnMainApp } from './functions/fn-main-app';
import { FnUser } from './functions/fn-user';
import { FnBU } from './functions/fn-bu';
import { FnContact } from './functions/fn-contact';
//services
import { BTSSWDSBService } from '../../services/btss-wdsb.service';
import { TempProjectService } from '../../services/temp-project.service';
import { ProjectService } from '../../services/project.service';
import { ApplicationService } from '../../services/application.service';
import { AppUserService } from '../../services/app-user.service';
import { BUService } from '../../services/bu.service';
import { ContactService } from '../../services/contact.service';
import { FeatureService } from '../../services/feature.service';
//routing
import { MaintenanceRouting } from './maintenance.routing';
@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        ProgressbarModule.forRoot(),
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        // SpinnerComponentModule,
        Ng2DatetimePickerModule,
        MaintenanceRouting,
    ],
    declarations: [
        MaintenanceComponent,
        ProjectListComponent,
        AppListComponent,
        AppFormComponent,
        BUListComponent,
        BUFormComponent,
        ContactListComponent,
        ContactFormComponent,
        SyncMainComponent,
        SyncUserComponent,
    ],
    providers: [
        BTSSWDSBService,
        TempProjectService,
        ProjectService,
        ApplicationService,
        AppUserService,
        BUService,
        ContactService,
        FeatureService,
        FnMainApp,
        FnMain,
        FnUser,
        FnBU,
        FnContact

    ]
})

export class MaintenanceModule {}
