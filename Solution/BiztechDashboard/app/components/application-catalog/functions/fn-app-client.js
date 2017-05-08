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
var fn_bu_1 = require("../../maintenance/functions/fn-bu");
var FnAppClient = (function () {
    function FnAppClient(tempProjectService, btssWdsbService, applicationService, appuserService, fnBU) {
        this.tempProjectService = tempProjectService;
        this.btssWdsbService = btssWdsbService;
        this.applicationService = applicationService;
        this.appuserService = appuserService;
        this.fnBU = fnBU;
    }
    //getting application if can be use the specific env
    FnAppClient.prototype.getAuth = function (projectID) {
        var isAuth = false;
        this.appuserService.getAuth(projectID)
            .then(function (a) { return isAuth = a.isAuth; });
        return isAuth;
    };
    //getBuName()
    FnAppClient.prototype.getBUName = function (id) {
        var buname;
        this.fnBU.getBU(id).then(function (bu) { return buname = bu.BUName; });
        return buname;
    };
    return FnAppClient;
}());
FnAppClient = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [temp_project_service_1.TempProjectService,
        btss_wdsb_service_1.BTSSWDSBService,
        application_service_1.ApplicationService,
        app_user_service_1.AppUserService,
        fn_bu_1.FnBU])
], FnAppClient);
exports.FnAppClient = FnAppClient;
