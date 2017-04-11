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
// ng2-components
// import { ProgressbarModule } from 'ng2-bootstrap';
// import { TabsModule } from 'ng2-bootstrap';
// import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
// import { TooltipModule } from 'ng2-bootstrap';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
//Components
var sync_main_component_1 = require("./sync-main.component");
//functions (providers)
var fn_main_1 = require("./functions/fn-main");
//services
var btss_wdsb_service_1 = require("../../services/btss-wdsb.service");
var temp_project_service_1 = require("../../services/temp-project.service");
var application_service_1 = require("../../services/application.service");
var app_user_service_1 = require("../../services/app-user.service");
var sync_routing_1 = require("./sync.routing");
var SynchronizationModule = (function () {
    function SynchronizationModule() {
    }
    return SynchronizationModule;
}());
SynchronizationModule = __decorate([
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
            sync_routing_1.SyncRouting,
        ],
        declarations: [
            sync_main_component_1.SyncMainComponent,
        ],
        providers: [
            btss_wdsb_service_1.BTSSWDSBService,
            temp_project_service_1.TempProjectService,
            application_service_1.ApplicationService,
            app_user_service_1.AppUserService,
            fn_main_1.FnMain
        ]
    })
], SynchronizationModule);
exports.SynchronizationModule = SynchronizationModule;
