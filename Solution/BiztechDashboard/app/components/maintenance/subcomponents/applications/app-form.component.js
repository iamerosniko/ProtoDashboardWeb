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
var fn_main_app_1 = require("../../functions/fn-main-app");
var moment = require("moment");
var AppFormComponent = (function () {
    function AppFormComponent(route, router, fn) {
        this.route = route;
        this.router = router;
        this.fn = fn;
        this.formMode = 'New';
        this.dt = new Date();
        this.showDate = 0;
        this.clrApp();
    }
    AppFormComponent.prototype.getDate = function (field) {
        //date implemented
        if (field == 1) {
            return moment(this.selectedApp.DateImplemented).format('MM/DD/YYYY');
        }
        else if (field == 2) {
            return moment(this.selectedApp.LastProdDate).format('MM/DD/YYYY');
        }
        else {
            return '';
        }
    };
    AppFormComponent.prototype.updateDate = function (field) {
        //date implemented
        if (field == 1) {
            this.selectedApp.DateImplemented = new Date(this.dt.getDate());
        }
        else if (field == 2) {
            this.selectedApp.LastProdDate = new Date(this.dt.getDate());
        }
        else {
            return '';
        }
        this.getDate(field);
    };
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
    AppFormComponent.prototype.applicationView = function () {
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', { outlets: { 'apps': ['Lists'] } }]);
    };
    return AppFormComponent;
}());
AppFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-form',
        templateUrl: 'app-form.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        fn_main_app_1.FnMainApp])
], AppFormComponent);
exports.AppFormComponent = AppFormComponent;
