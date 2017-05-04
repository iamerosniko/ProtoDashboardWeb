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
var router_1 = require("@angular/router");
//entities
var application_1 = require("../../../../entities/application");
var maintenance_component_1 = require("../../maintenance.component");
var fn_main_app_1 = require("../../functions/fn-main-app");
var AppFormComponent = (function () {
    function AppFormComponent(route, fn) {
        this.route = route;
        this.fn = fn;
        this.name = 'Sync page';
        this.newApps = [];
        this.formMode = 'New';
        this.clrApp();
    }
    AppFormComponent.prototype.clrApp = function () {
        this.selectedApp = new application_1.Application(0, '', 0, '', '', 0, 0, 0, false, false, '', null, null, '', '', '', false, '', '', '', false);
    };
    AppFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.fn.getApp(params.id)
                .then(function (app) {
                _this.selectedApp = app;
                _this.formMode = _this.selectedApp.AppID == 0
                    ? 'New' : 'Update';
            });
        });
    };
    return AppFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", maintenance_component_1.MaintenanceComponent)
], AppFormComponent.prototype, "mainView", void 0);
AppFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-form',
        templateUrl: 'app-form.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        fn_main_app_1.FnMainApp])
], AppFormComponent);
exports.AppFormComponent = AppFormComponent;
