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
var maintenance_component_1 = require("../../maintenance.component");
//services
var bu_service_1 = require("../../../../services/bu.service");
var BUListComponent = (function () {
    function BUListComponent(buService) {
        this.buService = buService;
        this.name = 'Sync page';
        this.bUnits = [];
    }
    BUListComponent.prototype.ngOnInit = function () {
        this.getBUs();
    };
    BUListComponent.prototype.getBUs = function () {
        var _this = this;
        this.buService.getBUs()
            .then(function (b) { return _this.bUnits = b; });
    };
    return BUListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", maintenance_component_1.MaintenanceComponent)
], BUListComponent.prototype, "mainView", void 0);
BUListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bu-list',
        templateUrl: 'bu-list.component.html',
    }),
    __metadata("design:paramtypes", [bu_service_1.BUService])
], BUListComponent);
exports.BUListComponent = BUListComponent;
