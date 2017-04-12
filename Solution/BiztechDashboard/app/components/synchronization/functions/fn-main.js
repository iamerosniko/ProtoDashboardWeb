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
var FnMain = (function () {
    function FnMain(tempProjectService, btssWdsbService, applicationService, appuserService) {
        this.tempProjectService = tempProjectService;
        this.btssWdsbService = btssWdsbService;
        this.applicationService = applicationService;
        this.appuserService = appuserService;
    }
    //Part 1 : Clear Temporary Table  > wdsb.tempProjects
    //1.from wdsb.temprojects 
    FnMain.prototype.getTempProjects = function () {
        var tmpProj;
        return this.tempProjectService.getProjects();
        //return tmpProj;
    };
    //2.delete to tempprojects
    FnMain.prototype.deleteProjectsToTempProject = function (tp) {
        // (tp).forEach(element => {
        //     this.tempProjectService.DeleteProject(element.ProjectID);
        // });
        for (var _i = 0, tp_1 = tp; _i < tp_1.length; _i++) {
            var entry = tp_1[_i];
            this.tempProjectService.DeleteProject(entry.ProjectID);
        }
    };
    //Part 2 : Insert list of applications from btss
    //3.from btss.project to wdsb.tempprojects
    FnMain.prototype.getProjectsFromBTSS = function () {
        var tmpProj;
        return this.btssWdsbService.getProjects();
    };
    //4.add to wdsb.tempprojects
    FnMain.prototype.postProjectsToTempProjects = function (tp) {
        // (tp).forEach(element => {
        //     this.tempProjectService.postProject(element);
        // });
        // for (let entry of tp) {
        //     this.tempProjectService.postProject(entry)
        // }
        this.tempProjectService.postProjects(tp);
    };
    /*Part 3 : Compare if already exists to wdsb.Applcation
     * if not exists > ADD
     * (use VIEW in MSSQL right outer join + null)
    */
    //5.Compare wdsb.tempProjects and wdsb.Application
    FnMain.prototype.getNewApplications = function () {
        return this.applicationService.getNewApplications();
    };
    //6.add to wdsb.Applications
    FnMain.prototype.postApplications = function (app) {
        // (app).forEach(element => {
        //     this.applicationService.postApplication(element);
        // });
        for (var _i = 0, app_1 = app; _i < app_1.length; _i++) {
            var entry = app_1[_i];
            this.applicationService.postApplication(entry);
        }
    };
    /*Part 4 getting users from specific database app
     *
     */
    //7.getUsers from WDSB
    FnMain.prototype.getUsersFromWDSB = function (appID) {
        var appUsers;
        this.appuserService.getUser(appID).then(function (user) { return appUsers = user; });
        return appUsers;
    };
    //8.deleteUsers where app
    FnMain.prototype.deleteUsers = function (appUsers) {
        // (appUsers).forEach(element => {
        //     this.appuserService.DeleteUser(element.AppUserID);
        // });
        for (var _i = 0, appUsers_1 = appUsers; _i < appUsers_1.length; _i++) {
            var entry = appUsers_1[_i];
            this.appuserService.DeleteUser(entry.AppUserID);
        }
    };
    //9.getUsers from their database/application
    FnMain.prototype.getUsersFromApplications = function (app) {
        var appUsers;
        this.btssWdsbService.getUsers(app).then(function (user) { return appUsers = user; });
        return appUsers;
    };
    //10.postUsers
    FnMain.prototype.postUsers = function (appUsers) {
        var isOk;
        // (appUsers).forEach(element => {
        //     this.appuserService.postUser(element).then(()=>{isOk=true});
        // });
        for (var _i = 0, appUsers_2 = appUsers; _i < appUsers_2.length; _i++) {
            var entry = appUsers_2[_i];
            this.appuserService.postUser(entry).then(function () { isOk = true; });
        }
        return isOk;
    };
    return FnMain;
}());
FnMain = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [temp_project_service_1.TempProjectService,
        btss_wdsb_service_1.BTSSWDSBService,
        application_service_1.ApplicationService,
        app_user_service_1.AppUserService])
], FnMain);
exports.FnMain = FnMain;
