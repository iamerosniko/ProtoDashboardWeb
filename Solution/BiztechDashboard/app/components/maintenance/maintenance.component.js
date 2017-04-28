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
//entities
var bu_1 = require("../../entities/bu");
var contact_1 = require("../../entities/contact");
//services
var fn_bu_1 = require("./functions/fn-bu");
var fn_contact_1 = require("./functions/fn-contact");
var MaintenanceComponent = (function () {
    function MaintenanceComponent(fnBU, fnContact) {
        this.fnBU = fnBU;
        this.fnContact = fnContact;
        //applications
        //features
        //projects
        //bu
        this.listBU = [];
        this.selectedBU = new bu_1.BU(0, '');
        //contacts
        this.listContact = [];
        this.selectedContact = new contact_1.Contact(0, '', '', '');
        //main
        this.showForm = false;
        this.formMode = 'New';
    }
    MaintenanceComponent.prototype.toFormView = function (mode, form) {
        this.formMode = mode;
        this.showForm = form;
        this.checkForm(mode);
        this.refreshLists();
    };
    MaintenanceComponent.prototype.checkForm = function (mode) {
        if (mode == 'New') {
            //clear all details
            this.selectedBU = new bu_1.BU(0, '');
            this.selectedContact = new contact_1.Contact(0, '', '', '');
        }
    };
    MaintenanceComponent.prototype.refreshLists = function () {
        var _this = this;
        this.fnBU.getBUs().then(function (b) { return _this.listBU = b; }).catch(function () { _this.listBU = []; });
        this.fnContact.getContacts().then(function (b) { return _this.listContact = b; }).catch(function () { _this.listContact = []; });
    };
    MaintenanceComponent.prototype.submitBU = function () {
        var _this = this;
        this.fnBU.submitBU(this.selectedBU.BUID == 0, this.selectedBU)
            .then(function () {
            _this.refreshLists();
            _this.toFormView('New', false);
            console.log('success');
        })
            .catch(function () {
            _this.refreshLists();
        });
    };
    MaintenanceComponent.prototype.submitContact = function () {
        var _this = this;
        this.fnContact.submitContact(this.selectedContact.ContactID == 0, this.selectedContact)
            .then(function () {
            _this.refreshLists();
            _this.toFormView('New', false);
            console.log('success');
        })
            .catch(function () {
            _this.refreshLists();
        });
    };
    return MaintenanceComponent;
}());
MaintenanceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'maintenance-parent',
        templateUrl: 'maintenance.component.html',
    }),
    __metadata("design:paramtypes", [fn_bu_1.FnBU,
        fn_contact_1.FnContact])
], MaintenanceComponent);
exports.MaintenanceComponent = MaintenanceComponent;
