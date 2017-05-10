import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

/********Pgination************************************** */
import { NgxPaginationModule } from 'ngx-pagination';
//typeahead
import { TypeaheadModule } from 'ngx-bootstrap';
/*******************NG-2Components/Extenders**********************************/
// import { ProgressbarModule } from 'ng2-bootstrap';
// import { TabsModule } from 'ng2-bootstrap';
// import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
// import { TooltipModule } from 'ng2-bootstrap';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';

/*******************Components**********************************/
//import { SyncMainComponent } from './sync-main.component';
import { ACComponent } from './ac-parent.component';
import { ACGridComponent } from './views/ac-grid.component';
import { ACListComponent } from './views/ac-list.component';
import { ACThumbnailComponent } from './subcomponents/ac-thumbnail.component';

/*******************Custom Function Provider**********************************/

/*******************Services**********************************/
import { BTSSWDSBService } from '../../services/btss-wdsb.service';
import { TempProjectService } from '../../services/temp-project.service';
import { ApplicationService } from '../../services/application.service';
import { AppUserService } from '../../services/app-user.service';

/*******************Routing**********************************/
import { AppCatalogRouting } from './appcatalog.routing';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NgxPaginationModule,
        TypeaheadModule.forRoot(),
        // TabsModule.forRoot(),
        // ProgressbarModule.forRoot(),
        // TooltipModule.forRoot(),
        // Ng2GoogleChartsModule,
        // Ng2DatetimePickerModule
        AppCatalogRouting,
    ],
    declarations: [
        ACComponent,
        ACListComponent,
        ACGridComponent,
        ACThumbnailComponent
    ],
    providers: [
        BTSSWDSBService,
        TempProjectService,
        ApplicationService,
    ]
})

export class AppCatalogModule {}