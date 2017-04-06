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
var FnMain = (function () {
    function FnMain(tempProjectService, btssWdsbService, applicationService) {
        this.tempProjectService = tempProjectService;
        this.btssWdsbService = btssWdsbService;
        this.applicationService = applicationService;
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
    //TODO : Create a service that gets a resultset of comparison between
    //       wdsb.tempProjects and wdsb.Application
    FnMain.prototype.getNewApplications = function () {
        //return new Application[];
    };
    //6.add to wdsb.Applications
    FnMain.prototype.postApplications = function (app) {
        var _this = this;
        (app).forEach(function (element) {
            _this.applicationService.postApplication(element);
        });
    };
    return FnMain;
}());
FnMain = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [temp_project_service_1.TempProjectService,
        btss_wdsb_service_1.BTSSWDSBService,
        application_service_1.ApplicationService])
], FnMain);
exports.FnMain = FnMain;
