import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
// ng2-components
// import { ProgressbarModule } from 'ng2-bootstrap';
// import { TabsModule } from 'ng2-bootstrap';
// import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
// import { TooltipModule } from 'ng2-bootstrap';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
//Components
import { SyncMainComponent } from './sync-main.component';
//functions (providers)
import { FnMain } from './functions/fn-main';
//services
import { BTSSWDSBService } from '../../services/btss-wdsb.service';
import { TempProjectService } from '../../services/temp-project.service';
import { ApplicationService } from '../../services/application.service';
import { AppUserService } from '../../services/app-user.service';
import { SyncRouting } from './sync.routing';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        // TabsModule.forRoot(),
        // ProgressbarModule.forRoot(),
        // TooltipModule.forRoot(),
        // Ng2GoogleChartsModule,
        // Ng2DatetimePickerModule
        SyncRouting,
    ],
    declarations: [
        SyncMainComponent,
        
    ],
    providers: [
        BTSSWDSBService,
        TempProjectService,
        ApplicationService,
        AppUserService,
        FnMain
    ]
})

export class SynchronizationModule {}