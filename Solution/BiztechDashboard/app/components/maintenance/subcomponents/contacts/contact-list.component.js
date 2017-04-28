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
var ContactListComponent = (function () {
    function ContactListComponent() {
    }
    ContactListComponent.prototype.selectContact = function (contact) {
        this.mainView.selectedContact = contact;
        this.mainView.toFormView('Update', true);
    };
    return ContactListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", maintenance_component_1.MaintenanceComponent)
], ContactListComponent.prototype, "mainView", void 0);
ContactListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact-list',
        templateUrl: 'contact-list.component.html',
    })
], ContactListComponent);
exports.ContactListComponent = ContactListComponent;
