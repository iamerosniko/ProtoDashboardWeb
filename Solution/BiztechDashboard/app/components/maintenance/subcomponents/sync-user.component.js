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
var fn_user_1 = require("./../functions/fn-user");
var SyncUserComponent = (function () {
    function SyncUserComponent(fnUser) {
        this.fnUser = fnUser;
        this.name = 'Sync page';
        this.projects = [];
    }
    SyncUserComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    SyncUserComponent.prototype.getProjects = function () {
        var _this = this;
        this.fnUser.getProjectsWithBTSSAuthentication()
            .then(function (projs) { _this.projects = projs; });
    };
    SyncUserComponent.prototype.initUserSync = function () {
        this.fnUser.deleteAllUsers();
    };
    return SyncUserComponent;
}());
SyncUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sync-comp',
        // template: `<h1>Hello {{name}}</h1>
        //     <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
        //     <i class="glyphicon glyphicon-refresh"></i>  Refresh
        //     </a>`,
        templateUrl: 'sync-user.component.html',
    }),
    __metadata("design:paramtypes", [fn_user_1.FnUser])
], SyncUserComponent);
exports.SyncUserComponent = SyncUserComponent;
