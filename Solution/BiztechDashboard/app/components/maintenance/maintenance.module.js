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
/* ngx-bootstrap */
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ngx_bootstrap_2 = require("ngx-bootstrap");
//Components
var maintenance_component_1 = require("./maintenance.component");
/*Applications */
var app_list_component_1 = require("./subcomponents/applications/app-list.component");
var app_form_component_1 = require("./subcomponents/applications/app-form.component");
/*BU*/
var bu_list_component_1 = require("./subcomponents/bu/bu-list.component");
var bu_form_component_1 = require("./subcomponents/bu/bu-form.component");
/*Contacts*/
var contact_list_component_1 = require("./subcomponents/contacts/contact-list.component");
var contact_form_component_1 = require("./subcomponents/contacts/contact-form.component");
/*Project-sync*/
var sync_main_component_1 = require("./subcomponents/project-sync/sync-main.component");
/*user-sync*/
var sync_user_component_1 = require("./subcomponents/user-sync/sync-user.component");
//functions (providers)
var fn_main_1 = require("./functions/fn-main");
var fn_user_1 = require("./functions/fn-user");
var fn_bu_1 = require("./functions/fn-bu");
var fn_contact_1 = require("./functions/fn-contact");
//services
var btss_wdsb_service_1 = require("../../services/btss-wdsb.service");
var temp_project_service_1 = require("../../services/temp-project.service");
var project_service_1 = require("../../services/project.service");
var application_service_1 = require("../../services/application.service");
var app_user_service_1 = require("../../services/app-user.service");
var bu_service_1 = require("../../services/bu.service");
var contact_service_1 = require("../../services/contact.service");
//routing
var maintenance_routing_1 = require("./maintenance.routing");
bu_service_1.BUService;
var MaintenanceModule = (function () {
    function MaintenanceModule() {
    }
    return MaintenanceModule;
}());
MaintenanceModule = __decorate([
    core_1.NgModule({
        imports: [
            ngx_bootstrap_2.ProgressbarModule.forRoot(),
            ngx_bootstrap_1.AccordionModule.forRoot(),
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
            app_list_component_1.AppListComponent,
            app_form_component_1.AppFormComponent,
            bu_list_component_1.BUListComponent,
            bu_form_component_1.BUFormComponent,
            contact_list_component_1.ContactListComponent,
            contact_form_component_1.ContactFormComponent,
            sync_main_component_1.SyncMainComponent,
            sync_user_component_1.SyncUserComponent,
        ],
        providers: [
            btss_wdsb_service_1.BTSSWDSBService,
            temp_project_service_1.TempProjectService,
            project_service_1.ProjectService,
            application_service_1.ApplicationService,
            app_user_service_1.AppUserService,
            bu_service_1.BUService,
            contact_service_1.ContactService,
            fn_main_1.FnMain,
            fn_user_1.FnUser,
            fn_bu_1.FnBU,
            fn_contact_1.FnContact
        ]
    })
], MaintenanceModule);
exports.MaintenanceModule = MaintenanceModule;
