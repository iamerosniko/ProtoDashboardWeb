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
/*******************NG-2Components/Extenders**********************************/
// import { ProgressbarModule } from 'ng2-bootstrap';
// import { TabsModule } from 'ng2-bootstrap';
// import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
// import { TooltipModule } from 'ng2-bootstrap';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
/*******************Components**********************************/
//import { SyncMainComponent } from './sync-main.component';
var ac_parent_component_1 = require("./ac-parent.component");
var ac_grid_component_1 = require("./views/ac-grid.component");
var ac_list_component_1 = require("./views/ac-list.component");
var ac_thumbnail_component_1 = require("./subcomponents/ac-thumbnail.component");
/*******************Custom Function Provider**********************************/
/*******************Services**********************************/
var btss_wdsb_service_1 = require("../../services/btss-wdsb.service");
var temp_project_service_1 = require("../../services/temp-project.service");
var application_service_1 = require("../../services/application.service");
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
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            // TabsModule.forRoot(),
            // ProgressbarModule.forRoot(),
            // TooltipModule.forRoot(),
            // Ng2GoogleChartsModule,
            // Ng2DatetimePickerModule
            appcatalog_routing_1.AppCatalogRouting,
        ],
        declarations: [
            ac_parent_component_1.ACComponent,
            ac_list_component_1.ACListComponent,
            ac_grid_component_1.ACGridComponent,
            ac_thumbnail_component_1.ACThumbnailComponent
        ],
        providers: [
            btss_wdsb_service_1.BTSSWDSBService,
            temp_project_service_1.TempProjectService,
            application_service_1.ApplicationService,
        ]
    })
], AppCatalogModule);
exports.AppCatalogModule = AppCatalogModule;
