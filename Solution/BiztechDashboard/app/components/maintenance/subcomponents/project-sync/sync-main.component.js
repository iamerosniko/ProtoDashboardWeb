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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fn_main_1 = require("../../functions/fn-main");
var project_service_1 = require("../../../../services/project.service");
var SyncMainComponent = (function () {
    function SyncMainComponent(fnMain, projectService) {
        this.fnMain = fnMain;
        this.projectService = projectService;
        this.appLength = 0;
        this.appDetailCompleted = 0;
        this.newApps = [];
        this.syncApps = [];
        //     setInterval(() => {
        //         this.checkComplete();
        //  }, 1000);
    }
    SyncMainComponent.prototype.checkComplete = function () {
        this.appLength = this.newApps.length;
        if (this.appLength == 0) {
            return true;
        }
        else {
            this.appDetailCompleted = 0;
            for (var _i = 0, _a = this.newApps; _i < _a.length; _i++) {
                var app = _a[_i];
                var a = app.BackEndPath;
                var b = app.FrontEndPath;
                if (!(a == null || b == null)) {
                    if (a.trim().length > 0 && b.trim().length > 0) {
                        this.appDetailCompleted += 1;
                    }
                }
            }
            return this.appLength == this.appDetailCompleted;
        }
    };
    SyncMainComponent.prototype.getSyncProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .then(function (projects) {
            _this.syncApps = projects;
        });
    };
    SyncMainComponent.prototype.ngOnInit = function () {
        this.initAppSync();
    };
    SyncMainComponent.prototype.initAppSync = function () {
        this.removeAppFromTemp(); // 1 and 2 
        this.getAppToTemp(); // 3 and 4    
        this.getNewAppFromTemp();
        this.getSyncProjects();
    };
    //1
    SyncMainComponent.prototype.removeAppFromTemp = function () {
        var _this = this;
        /* this method is to delete temporary data in wdsb.tempProjects */
        this.fnMain.getTempProjects()
            .then(function (tp) {
            _this.fnMain.deleteProjectsToTempProject(tp);
        });
        // console.log('done-removeAppFromTemp');
    };
    //2
    SyncMainComponent.prototype.getAppToTemp = function () {
        var _this = this;
        /* this method is to add all applications found in btss to wdsb.tempProjects */
        this.fnMain.getProjectsFromBTSS()
            .then(function (tp) {
            // console.log(tp.length),
            _this.fnMain.postProjectsToTempProjects(tp);
        });
        // console.log('done-getAppToTemp');
    };
    //3
    SyncMainComponent.prototype.getNewAppFromTemp = function () {
        var _this = this;
        /*this method is to check if there's a new applications found in btss*/
        this.fnMain.getNewApplications()
            .then(function (apps) {
            _this.newApps = apps;
            _this.checkComplete();
            // console.log('done-getNewAppFromTemp');
        });
    };
    SyncMainComponent.prototype.saveNewApplications = function (apps) {
        var _this = this;
        //this method is to save new applications to wdsb.applications
        this.fnMain.postApplications(apps).then(function () {
            _this.initAppSync();
        });
    };
    SyncMainComponent.prototype.updateApplications = function (apps) {
        var _this = this;
        //this method is to save new applications to wdsb.applications
        this.projectService.putProjects(apps).then(function () {
            _this.initAppSync();
        });
    };
    return SyncMainComponent;
}());
SyncMainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proj-sync',
        // template: `<h1>Hello {{name}}</h1>
        //     <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
        //     <i class="glyphicon glyphicon-refresh"></i>  Refresh
        //     </a>`,
        templateUrl: 'sync-main.component.html',
    }),
    __metadata("design:paramtypes", [fn_main_1.FnMain,
        project_service_1.ProjectService])
], SyncMainComponent);
exports.SyncMainComponent = SyncMainComponent;
