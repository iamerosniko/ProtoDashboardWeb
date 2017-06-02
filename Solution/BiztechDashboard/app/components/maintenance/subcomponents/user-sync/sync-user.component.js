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
var fn_user_1 = require("../../functions/fn-user");
//entities
var maintenance_component_1 = require("../../maintenance.component");
var SyncUserComponent = (function () {
    function SyncUserComponent(fnUser) {
        this.fnUser = fnUser;
        this.name = 'Sync page';
        this.progress = 0;
        this.checkProgress = 0;
        this.projects = [];
    }
    SyncUserComponent.prototype.ngOnInit = function () {
        this.viewLoading();
        this.getProjects();
    };
    SyncUserComponent.prototype.getProjects = function () {
        var _this = this;
        this.fnUser.getProjectsWithBTSSAuthentication()
            .then(function (projs) {
            _this.projects = projs;
            _this.viewLoading();
        });
    };
    SyncUserComponent.prototype.viewLoading = function () {
        this.mainView.showLoad = !this.mainView.showLoad;
    };
    SyncUserComponent.prototype.checkifComplete = function () {
        var projectCount = this.projects.length;
        this.progress += 1;
        this.checkProgress = Math.round((this.progress / projectCount) * 100);
        if (this.progress == projectCount) {
            console.log("done");
            this.progress = 0;
            this.viewLoading();
        }
    };
    SyncUserComponent.prototype.initUserSync = function () {
        var _this = this;
        this.viewLoading();
        this.progress = 0;
        this.fnUser.deleteAllUsers();
        var _loop_1 = function (proj) {
            this_1.fnUser.getUsersFromApplications(proj)
                .then(function (num) {
                proj.ProjectSyncStatus = num.AffectedUsers,
                    //console.log(proj.ProjectName + ' = ' + proj.ProjectSyncStatus),
                    _this.checkifComplete();
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
            var proj = _a[_i];
            _loop_1(proj);
        }
    };
    SyncUserComponent.prototype.getUser = function (userCount) {
        if (userCount == -1) {
            return "Can't connect to sql database";
        }
        else if (userCount == -2) {
            return "Can't connect to MSACCESS database";
        }
        else if (userCount == -3) {
            return "Invalid Filename";
        }
        else
            return userCount;
    };
    return SyncUserComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", maintenance_component_1.MaintenanceComponent)
], SyncUserComponent.prototype, "mainView", void 0);
SyncUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-sync',
        // template: `<h1>Hello {{name}}</h1>
        //     <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
        //     <i class="glyphicon glyphicon-refresh"></i>  Refresh
        //     </a>`,
        templateUrl: 'sync-user.component.html',
    }),
    __metadata("design:paramtypes", [fn_user_1.FnUser])
], SyncUserComponent);
exports.SyncUserComponent = SyncUserComponent;
