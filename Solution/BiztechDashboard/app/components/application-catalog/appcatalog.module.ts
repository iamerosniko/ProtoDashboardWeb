import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

/********Pgination************************************** */
import { NgxPaginationModule } from 'ngx-pagination';
//typeahead
import { TypeaheadModule } from 'ngx-bootstrap';
/*******************Components**********************************/
import { ACComponent } from './ac-parent.component';
import { ACGridComponent } from './views/ac-grid.component';
import { ACNoFavComponent } from './views/ac-nofav.component';
import { ACNoAvailComponent } from './views/ac-noavail.component';
import { ACListComponent } from './views/ac-list.component';
import { ACThumbnailComponent } from './subcomponents/ac-thumbnail.component';

/*******************Custom Function Provider**********************************/

/*******************Services**********************************/
import { BTSSWDSBService } from '../../services/btss-wdsb.service';
import { TempProjectService } from '../../services/temp-project.service';
import { ApplicationService } from '../../services/application.service';
import { AppUserService } from '../../services/app-user.service';
import { FavoriteService } from '../../services/favorite.service';

/*******************Routing**********************************/
import { AppCatalogRouting } from './appcatalog.routing';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NgxPaginationModule,
        TypeaheadModule.forRoot(),
        AppCatalogRouting,
    ],
    declarations: [
        ACComponent,
        ACListComponent,
        ACGridComponent,
        ACThumbnailComponent,
        ACNoFavComponent,
        ACNoAvailComponent
    ],
    providers: [
        BTSSWDSBService,
        TempProjectService,
        ApplicationService,
        FavoriteService
    ]
})

export class AppCatalogModule {}