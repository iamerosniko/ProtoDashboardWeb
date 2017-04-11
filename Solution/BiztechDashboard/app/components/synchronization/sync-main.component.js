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
var fn_main_1 = require("./functions/fn-main");
var SyncMainComponent = (function () {
    function SyncMainComponent(fnMain) {
        this.fnMain = fnMain;
        this.name = 'Sync page';
        this.newApps = null;
    }
    SyncMainComponent.prototype.ngOnInit = function () {
        this.initAppSync();
    };
    SyncMainComponent.prototype.initAppSync = function () {
        this.removeAppFromTemp(); // 1 and 2 
        this.getAppToTemp(); // 3 and 4
        //this.fnMain.getTempProjects();
        //this.fnMain.postProjectsToTempProjects(this.fnMain.getProjectsFromBTSS());
        //this.newApps=this.fnMain.getNewApplications();
    };
    SyncMainComponent.prototype.removeAppFromTemp = function () {
        var _this = this;
        /* this method is to delete temporary data in wdsb.tempProjects */
        this.fnMain.getTempProjects()
            .then(function (tp) {
            _this.fnMain.deleteProjectsToTempProject(tp);
        });
        console.log('done-removeAppFromTemp');
    };
    SyncMainComponent.prototype.getAppToTemp = function () {
        var _this = this;
        /* this method is to add all applications found in btss to wdsb.tempProjects */
        this.fnMain.getProjectsFromBTSS()
            .then(function (tp) {
            console.log(tp.length);
            _this.fnMain.postProjectsToTempProjects(tp);
        });
        console.log('done-getAppToTemp');
    };
    SyncMainComponent.prototype.getNewAppFromTemp = function () {
        /*this method is to check if there's a new applications found in btss*/
        this.newApps = this.fnMain.getNewApplications();
    };
    SyncMainComponent.prototype.saveNewApplications = function (apps) {
        //this method is to save new applications to wdsb.applications
        this.fnMain.postApplications(apps);
    };
    //this method is to get users in every database / applications
    //also saves all users in one repository called wdsb.appusers
    SyncMainComponent.prototype.initAppUserSync = function (apps) {
        var _this = this;
        var status;
        (apps).forEach(function (app) {
            _this.deleteOldUsers(app.AppID);
            status.push(_this.getNewUsers(app)); // gives an status if the 
        });
        //TODO : Get users per database/applications
    };
    SyncMainComponent.prototype.deleteOldUsers = function (appID) {
        this.fnMain.deleteUsers(this.fnMain.getUsersFromWDSB(appID));
    };
    SyncMainComponent.prototype.getNewUsers = function (app) {
        return (this.fnMain.postUsers(this.fnMain.getUsersFromApplications(app)));
    };
    return SyncMainComponent;
}());
SyncMainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sync-comp',
        // template: `<h1>Hello {{name}}</h1>
        //     <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
        //     <i class="glyphicon glyphicon-refresh"></i>  Refresh
        //     </a>`,
        templateUrl: 'sync-main.component.html',
    }),
    __metadata("design:paramtypes", [fn_main_1.FnMain])
], SyncMainComponent);
exports.SyncMainComponent = SyncMainComponent;
