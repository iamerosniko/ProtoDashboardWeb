"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ngx_bootstrap_1 = require("ngx-bootstrap");
/********Pgination************************************** */
var ngx_pagination_1 = require("ngx-pagination");
//typeahead
var ngx_bootstrap_2 = require("ngx-bootstrap");
/*******************Components**********************************/
var ac_parent_component_1 = require("./ac-parent.component");
var ac_viewdetail_component_1 = require("./ac-viewdetail.component");
var ac_reviews_component_1 = require("./ac-reviews.component");
//views
var ac_grid_component_1 = require("./views/ac-grid.component");
var ac_nofav_component_1 = require("./views/ac-nofav.component");
var ac_noavail_component_1 = require("./views/ac-noavail.component");
var ac_list_component_1 = require("./views/ac-list.component");
//subcomponent
var ac_thumbnail_component_1 = require("./subcomponents/ac-thumbnail.component");
var ac_feature_component_1 = require("./subcomponents/ac-feature.component");
var ac_createcomment_component_1 = require("./subcomponents/ac-createcomment.component");
// import { ACFeatureComponent } from './subcomponents/ac-feature.component';
/*******************Custom Function Provider**********************************/
/*******************Services**********************************/
var btss_wdsb_service_1 = require("../../services/btss-wdsb.service");
var temp_project_service_1 = require("../../services/temp-project.service");
var application_service_1 = require("../../services/application.service");
var favorite_service_1 = require("../../services/favorite.service");
var comment_service_1 = require("../../services/comment.service");
/*******************Routing**********************************/
var appcatalog_routing_1 = require("./appcatalog.routing");
var AppCatalogModule = (function () {
    function AppCatalogModule() {
    }
    return AppCatalogModule;
}());
AppCatalogModule = __decorate([
    core_1.NgModule({
        imports: [
            ngx_bootstrap_1.CarouselModule.forRoot(),
            ngx_bootstrap_2.TypeaheadModule.forRoot(),
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            appcatalog_routing_1.AppCatalogRouting,
        ],
        declarations: [
            ac_parent_component_1.ACComponent,
            ac_viewdetail_component_1.ACDetail,
            ac_list_component_1.ACListComponent,
            ac_grid_component_1.ACGridComponent,
            ac_thumbnail_component_1.ACThumbnailComponent,
            ac_nofav_component_1.ACNoFavComponent,
            ac_noavail_component_1.ACNoAvailComponent,
            ac_feature_component_1.ACFeatureComponent,
            ac_createcomment_component_1.ACCreateCommentComponent,
            ac_reviews_component_1.ACReviewsComponent,
        ],
        providers: [
            btss_wdsb_service_1.BTSSWDSBService,
            temp_project_service_1.TempProjectService,
            application_service_1.ApplicationService,
            favorite_service_1.FavoriteService,
            comment_service_1.CommentService
        ]
    })
], AppCatalogModule);
exports.AppCatalogModule = AppCatalogModule;
