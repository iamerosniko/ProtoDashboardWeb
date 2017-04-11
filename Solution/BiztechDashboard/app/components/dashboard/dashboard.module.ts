import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

/*******************NG-2Components/Extenders**********************************/
// import { ProgressbarModule } from 'ng2-bootstrap';
// import { TabsModule } from 'ng2-bootstrap';
// import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
// import { TooltipModule } from 'ng2-bootstrap';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';

/*******************Components**********************************/
//import { SyncMainComponent } from './sync-main.component';


/*******************Custom Function Provider**********************************/
//import { FnMain } from './functions/fn-main';

/*******************Services**********************************/
// import { BTSSWDSBService } from '../../services/btss-wdsb.service';
// import { TempProjectService } from '../../services/temp-project.service';
// import { ApplicationService } from '../../services/application.service';
//import { AppUserService } from '../../services/app-user.service';

/*******************Routing**********************************/
import { DashboardRouting } from './dashboard.routing';
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
        DashboardRouting,
    ],
    declarations: [
        //SyncMainComponent,
        
    ],
    providers: [
        // BTSSWDSBService,
        // TempProjectService,
        // ApplicationService,
        // FnMain
    ]
})

export class DashboardModule {}