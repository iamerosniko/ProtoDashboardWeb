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
// ngx-components
var ngx_bootstrap_1 = require("ngx-bootstrap");
//Components
var sync_main_component_1 = require("./subcomponents/sync-main.component");
var sync_user_component_1 = require("./subcomponents/sync-user.component");
var maintenance_component_1 = require("./maintenance.component");
//functions (providers)
var fn_main_1 = require("./functions/fn-main");
var fn_user_1 = require("./functions/fn-user");
//services
var btss_wdsb_service_1 = require("../../services/btss-wdsb.service");
var temp_project_service_1 = require("../../services/temp-project.service");
var project_service_1 = require("../../services/project.service");
var application_service_1 = require("../../services/application.service");
var app_user_service_1 = require("../../services/app-user.service");
var maintenance_routing_1 = require("./maintenance.routing");
var MaintenanceModule = (function () {
    function MaintenanceModule() {
    }
    return MaintenanceModule;
}());
MaintenanceModule = __decorate([
    core_1.NgModule({
        imports: [
            ngx_bootstrap_1.TabsModule.forRoot(),
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            // TabsModule.forRoot(),
            // ProgressbarModule.forRoot(),
            // TooltipModule.forRoot(),
            // Ng2GoogleChartsModule,
            // Ng2DatetimePickerModule
            maintenance_routing_1.MaintenanceRouting,
        ],
        declarations: [
            maintenance_component_1.MaintenanceComponent,
            sync_main_component_1.SyncMainComponent,
            sync_user_component_1.SyncUserComponent,
        ],
        providers: [
            btss_wdsb_service_1.BTSSWDSBService,
            temp_project_service_1.TempProjectService,
            project_service_1.ProjectService,
            application_service_1.ApplicationService,
            app_user_service_1.AppUserService,
            fn_main_1.FnMain,
            fn_user_1.FnUser
        ]
    })
], MaintenanceModule);
exports.MaintenanceModule = MaintenanceModule;
