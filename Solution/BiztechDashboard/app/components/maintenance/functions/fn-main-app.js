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
var application_service_1 = require("../../../services/application.service");
var FnMainApp = (function () {
    function FnMainApp(appService) {
        this.appService = appService;
    }
    //get all
    FnMainApp.prototype.getApps = function () {
        return this.appService.getApplications();
    };
    //getone
    FnMainApp.prototype.getApp = function (id) {
        return this.appService.getApplication(id);
    };
    //submit
    FnMainApp.prototype.submitApp = function (isNew, app) {
        return isNew
            ? this.appService.postApplication(app)
            : this.appService.putApplication(app);
    };
    return FnMainApp;
}());
FnMainApp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [application_service_1.ApplicationService])
], FnMainApp);
exports.FnMainApp = FnMainApp;
