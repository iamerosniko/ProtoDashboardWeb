"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
//services
var temp_project_service_1 = require("../../../services/temp-project.service");
var btss_wdsb_service_1 = require("../../../services/btss-wdsb.service");
var application_service_1 = require("../../../services/application.service");
var app_user_service_1 = require("../../../services/app-user.service");
var FnApp = (function () {
    function FnApp(tempProjectService, btssWdsbService, applicationService, appuserService) {
        this.tempProjectService = tempProjectService;
        this.btssWdsbService = btssWdsbService;
        this.applicationService = applicationService;
        this.appuserService = appuserService;
    }
    FnApp.prototype.getApplications = function () {
        return this.applicationService.getApplications();
    };
    FnApp.prototype.setAppToThumnails = function (apps) {
        var len = apps.length;
        var appThumbnail = [];
        for (var i = 0; i < apps.length; i += 4) {
            var tempApps;
            var ctr = len - i;
            if (ctr % 4 == 0) {
                tempApps.push(apps[i]);
                tempApps.push(apps[i + 1]);
                tempApps.push(apps[i + 2]);
                tempApps.push(apps[i + 3]);
            }
            else {
                for (var j = i; j < ctr; j++) {
                    tempApps.push(apps[j]);
                }
            }
            appThumbnail.push(tempApps);
        }
    };
    return FnApp;
}());
FnApp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [temp_project_service_1.TempProjectService,
        btss_wdsb_service_1.BTSSWDSBService,
        application_service_1.ApplicationService,
        app_user_service_1.AppUserService])
], FnApp);
exports.FnApp = FnApp;
