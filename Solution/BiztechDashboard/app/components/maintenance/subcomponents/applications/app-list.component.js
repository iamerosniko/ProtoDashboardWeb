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
//functions
var fn_main_app_1 = require("../../functions/fn-main-app");
var AppListComponent = (function () {
    function AppListComponent(router, fn) {
        this.router = router;
        this.fn = fn;
        this.applications = [];
    }
    AppListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fn.getApps()
            .then(function (apps) {
            _this.applications = apps;
        });
    };
    AppListComponent.prototype.applicationView = function (id) {
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', { outlets: { 'apps': [id] } }]);
    };
    return AppListComponent;
}());
AppListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-list',
        templateUrl: 'app-list.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        fn_main_app_1.FnMainApp])
], AppListComponent);
exports.AppListComponent = AppListComponent;
