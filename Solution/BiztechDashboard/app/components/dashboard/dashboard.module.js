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
/*******************Custom Function Provider**********************************/
//import { FnMain } from './functions/fn-main';
/*******************Services**********************************/
// import { BTSSWDSBService } from '../../services/btss-wdsb.service';
// import { TempProjectService } from '../../services/temp-project.service';
// import { ApplicationService } from '../../services/application.service';
//import { AppUserService } from '../../services/app-user.service';
/*******************Routing**********************************/
var dashboard_routing_1 = require("./dashboard.routing");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
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
            dashboard_routing_1.DashboardRouting,
        ],
        declarations: [],
        providers: []
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
