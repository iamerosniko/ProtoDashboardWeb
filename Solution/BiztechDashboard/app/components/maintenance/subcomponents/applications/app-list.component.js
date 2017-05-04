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
var maintenance_component_1 = require("../../maintenance.component");
var AppListComponent = (function () {
    function AppListComponent(router) {
        this.router = router;
        this.name = 'Sync page';
        this.newApps = [];
    }
    AppListComponent.prototype.ngOnInit = function () {
    };
    AppListComponent.prototype.applicationView = function (id) {
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', { outlets: { 'apps': [id] } }]);
    };
    return AppListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", maintenance_component_1.MaintenanceComponent)
], AppListComponent.prototype, "mainView", void 0);
AppListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-list',
        templateUrl: 'app-list.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppListComponent);
exports.AppListComponent = AppListComponent;
