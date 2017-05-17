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
var maintenance_component_1 = require("../../maintenance.component");
var contact_service_1 = require("../../../../services/contact.service");
var ContactFormComponent = (function () {
    function ContactFormComponent(contactService) {
        this.contactService = contactService;
        this.isNew = true;
    }
    ContactFormComponent.prototype.submit = function () {
        if (this.mainView.selectedContact.ContactID == 0) {
            this.contactService.postContact(this.mainView.selectedContact);
        }
        else {
            this.contactService.putContact(this.mainView.selectedContact);
        }
    };
    return ContactFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", maintenance_component_1.MaintenanceComponent)
], ContactFormComponent.prototype, "mainView", void 0);
ContactFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact-form',
        templateUrl: 'contact-form.component.html',
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactFormComponent);
exports.ContactFormComponent = ContactFormComponent;
