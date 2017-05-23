import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap';
/********Pgination************************************** */
import { NgxPaginationModule } from 'ngx-pagination';
//typeahead
import { TypeaheadModule } from 'ngx-bootstrap';
/*******************Components**********************************/
import { ACComponent } from './ac-parent.component';
import { ACDetail } from './ac-viewdetail.component';
import { ACReviewsComponent } from './ac-reviews.component';
//views
import { ACCommentsComponent } from './views/ac-comments.component';
import { ACGridComponent } from './views/ac-grid.component';
import { ACNoFavComponent } from './views/ac-nofav.component';
import { ACNoAvailComponent } from './views/ac-noavail.component';
import { ACListComponent } from './views/ac-list.component';
import { ACRatingsComponent } from './views/ac-ratings.component';
//subcomponent
import { ACThumbnailComponent } from './subcomponents/ac-thumbnail.component';
import { ACFeatureComponent } from './subcomponents/ac-feature.component';
import { ACCreateCommentComponent } from './subcomponents/ac-createcomment.component';
// import { ACFeatureComponent } from './subcomponents/ac-feature.component';

/*******************Custom Function Provider**********************************/

/*******************Services**********************************/
import { BTSSWDSBService } from '../../services/btss-wdsb.service';
import { TempProjectService } from '../../services/temp-project.service';
import { ApplicationService } from '../../services/application.service';
import { AppUserService } from '../../services/app-user.service';
import { FavoriteService } from '../../services/favorite.service';
import { CommentService } from '../../services/comment.service';
import { GetAuthService } from '../../services/getauth.service';
import { RatingService } from '../../services/rating.service';

/*******************Routing**********************************/
import { AppCatalogRouting } from './appcatalog.routing';
@NgModule({
    imports: [
        CarouselModule.forRoot(),
        TypeaheadModule.forRoot(),
        CommonModule,
        FormsModule,
        HttpModule,
        NgxPaginationModule,
        AppCatalogRouting,
        
    ],
    declarations: [
        ACComponent,
        ACDetail,
        ACListComponent,
        ACGridComponent,
        ACThumbnailComponent,
        ACNoFavComponent,
        ACNoAvailComponent,
        ACFeatureComponent,
        ACCreateCommentComponent,
        ACReviewsComponent,
        ACCommentsComponent,
        ACRatingsComponent  
    ],
    providers: [
        BTSSWDSBService,
        TempProjectService,
        ApplicationService,
        FavoriteService,
        CommentService,
        GetAuthService,
        RatingService
    ]
})

export class AppCatalogModule {}