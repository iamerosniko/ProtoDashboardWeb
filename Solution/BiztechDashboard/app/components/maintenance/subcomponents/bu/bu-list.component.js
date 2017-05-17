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
//entities
var bu_1 = require("../../../../entities/bu");
var maintenance_component_1 = require("../../maintenance.component");
//services
var BUListComponent = (function () {
    function BUListComponent() {
    }
    BUListComponent.prototype.selectBU = function (bu) {
        this.mainView.selectedBU = bu;
        this.mainView.toFormView('Update', true, 0);
    };
    return BUListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", maintenance_component_1.MaintenanceComponent)
], BUListComponent.prototype, "mainView", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", bu_1.BU)
], BUListComponent.prototype, "listBU", void 0);
BUListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bu-list',
        templateUrl: 'bu-list.component.html',
    })
], BUListComponent);
exports.BUListComponent = BUListComponent;
