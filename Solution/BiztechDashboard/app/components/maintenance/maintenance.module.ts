import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { ProgressbarModule } from 'ngx-bootstrap';
//Components
import { MaintenanceComponent } from './maintenance.component';
/*Applications */
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
import { FnUser } from './functions/fn-user';
//services
import { BTSSWDSBService } from '../../services/btss-wdsb.service';
import { TempProjectService } from '../../services/temp-project.service';
import { ProjectService } from '../../services/project.service';
import { ApplicationService } from '../../services/application.service';
import { AppUserService } from '../../services/app-user.service';
import { MaintenanceRouting } from './maintenance.routing';
@NgModule({
    imports: [
        ProgressbarModule.forRoot(),
        CommonModule,
        FormsModule,
        HttpModule,
        // TabsModule.forRoot(),
        // ProgressbarModule.forRoot(),
        // TooltipModule.forRoot(),
        // Ng2GoogleChartsModule,
        // Ng2DatetimePickerModule
        MaintenanceRouting,
    ],
    declarations: [
        MaintenanceComponent,
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
        FnMain,
        FnUser
    ]
})

export class MaintenanceModule {}