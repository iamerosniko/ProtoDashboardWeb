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
        this.tempProjectService.getProjects()
            .then(function (tp) {
            tmpProj = tp;
            //this.deleteProjectsToTempProject(tmpProj); //uncomment if not working as synchronous
        });
        return tmpProj;
    };
    //2.delete to tempprojects
    FnMain.prototype.deleteProjectsToTempProject = function (tp) {
        var _this = this;
        (tp).forEach(function (element) {
            _this.tempProjectService.DeleteProject(element.ProjectID);
        });
    };
    //Part 2 : Insert list of applications from btss
    //3.from btss.project to wdsb.tempprojects
    FnMain.prototype.getProjectsFromBTSS = function () {
        var tmpProj;
        this.btssWdsbService.getProjects()
            .then(function (tp) {
            tmpProj = tp;
            //this.postProjectsToTempProjects(tmpProj); //uncomment if not working as synchronous
        });
        return tmpProj;
    };
    //4.add to wdsb.tempprojects
    FnMain.prototype.postProjectsToTempProjects = function (tp) {
        var _this = this;
        (tp).forEach(function (element) {
            _this.tempProjectService.postProject(element);
        });
    };
    /*Part 3 : Compare if already exists to wdsb.Applcation
     * if not exists > ADD
     * (use VIEW in MSSQL right outer join + null)
    */
    //5.Compare wdsb.tempProjects and wdsb.Application
    FnMain.prototype.getNewApplications = function () {
        var newApp;
        this.applicationService.getNewApplications().then(function (app) { return newApp = app; });
        return newApp;
    };
    //6.add to wdsb.Applications
    FnMain.prototype.postApplications = function (app) {
        var _this = this;
        (app).forEach(function (element) {
            _this.applicationService.postApplication(element);
        });
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
        var _this = this;
        (appUsers).forEach(function (element) {
            _this.appuserService.DeleteUser(element.AppUserID);
        });
    };
    //9.getUsers from their database/application
    FnMain.prototype.getUsersFromApplications = function (app) {
        var appUsers;
        this.btssWdsbService.getUsers(app).then(function (user) { return appUsers = user; });
        return appUsers;
    };
    //10.postUsers
    FnMain.prototype.postUsers = function (appUsers) {
        var _this = this;
        var isOk;
        (appUsers).forEach(function (element) {
            _this.appuserService.postUser(element).then(function () { isOk = true; });
        });
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
