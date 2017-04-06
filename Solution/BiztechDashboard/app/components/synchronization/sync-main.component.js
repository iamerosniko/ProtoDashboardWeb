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
    }
    // getSample():void{
    //     this.name=this.fnMain.changeStringSmple();
    // }
    SyncMainComponent.prototype.initAppSync = function () {
        //this method is to delete temporary data in wdsb.tempProjects
        this.fnMain.deleteProjectsToTempProject(this.fnMain.getTempProjects());
        //this method is to add all applications found in btss to wdsb.tempProjects
        this.fnMain.postProjectsToTempProjects(this.fnMain.getProjectsFromBTSS());
        //this method is to check if there's a new applications found in btss
        //NOTE: this is connected to fn-main number 5 tag
    };
    SyncMainComponent.prototype.saveNewApplications = function (apps) {
        //this method is to save new applications to wdsb.applications
        this.fnMain.postApplications(apps);
    };
    //this method is to get users in every database / applications
    //also saves all users in one repository called wdsb.appusers
    SyncMainComponent.prototype.initAppUserSync = function () {
        //TODO : Get users per database/applications
    };
    return SyncMainComponent;
}());
SyncMainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sync-comp',
        template: "<h1>Hello {{name}}</h1>\n    <a (click)=\"getSample()\" role=\"button\" tooltip=\"Refresh\" class=\"btn btn-default btn-sm\">\n      <i class=\"glyphicon glyphicon-refresh\"></i>  Refresh\n    </a>",
    }),
    __metadata("design:paramtypes", [fn_main_1.FnMain])
], SyncMainComponent);
exports.SyncMainComponent = SyncMainComponent;
