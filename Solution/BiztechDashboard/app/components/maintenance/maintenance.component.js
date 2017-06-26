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
var router_1 = require("@angular/router");
//entities
var bu_1 = require("../../entities/bu");
var contact_1 = require("../../entities/contact");
//services
var fn_bu_1 = require("./functions/fn-bu");
var fn_contact_1 = require("./functions/fn-contact");
var getauth_service_1 = require("../../services/getauth.service");
var getauth_1 = require("../../entities/getauth");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var MaintenanceComponent = (function () {
    function MaintenanceComponent(fnBU, fnContact, router, getAuthService) {
        this.fnBU = fnBU;
        this.fnContact = fnContact;
        this.router = router;
        this.getAuthService = getAuthService;
        this.showLoad = false;
        this.myAuth = new getauth_1.GetAuth('', '', false, false, false, false, '');
        //bu
        this.listBU = [];
        this.selectedBU = new bu_1.BU(0, '');
        //contacts
        this.listContact = [];
        this.selectedContact = new contact_1.Contact(0, '', '', '');
        //main
        this.showForm = false;
        this.formMode = 'New';
        this.selectedForm = 4;
        this.applicationView('Lists');
        this.isUserAdmin();
        this.refreshLists();
    }
    MaintenanceComponent.prototype.toFormView = function (mode, form, selectList) {
        this.formMode = mode;
        this.showForm = form;
        this.checkForm(mode);
        this.refreshLists();
        this.router.navigate(['/Maintenance']);
        this.selectedForm = selectList;
    };
    MaintenanceComponent.prototype.viewLoading = function () {
        this.showLoad = !this.showLoad;
        if (this.showLoad == true) {
            this.childModal.show();
        }
        else {
            this.childModal.hide();
        }
    };
    MaintenanceComponent.prototype.applicationView = function (path) {
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', { outlets: { 'apps': [path] } }]);
    };
    MaintenanceComponent.prototype.isUserAdmin = function () {
        var _this = this;
        this.getAuthService.getAuth()
            .then(function (auth) {
            _this.myAuth = auth;
            if (_this.myAuth.Module == "") {
                alert('You do not have permission to use Maintenance Module');
                _this.router.navigateByUrl('/Applications');
            }
        });
    };
    MaintenanceComponent.prototype.checkForm = function (mode) {
        if (mode == 'New') {
            //clear all details
            this.selectedBU = new bu_1.BU(0, '');
            this.selectedContact = new contact_1.Contact(0, '', '', '');
        }
    };
    //all
    MaintenanceComponent.prototype.refreshLists = function () {
        var _this = this;
        this.fnBU.getBUs().then(function (b) { return _this.listBU = b; }).catch(function () { _this.listBU = []; });
        this.fnContact.getContacts().then(function (b) { return _this.listContact = b; }).catch(function () { _this.listContact = []; });
    };
    //BU
    MaintenanceComponent.prototype.submitBU = function () {
        var _this = this;
        this.fnBU.submitBU(this.selectedBU.BUID == 0, this.selectedBU)
            .then(function () {
            _this.refreshLists();
            _this.toFormView('New', false, 0);
            console.log('success');
        })
            .catch(function () {
            _this.refreshLists();
        });
    };
    //Contacts
    MaintenanceComponent.prototype.submitContact = function () {
        var _this = this;
        this.fnContact.submitContact(this.selectedContact.ContactID == 0, this.selectedContact)
            .then(function () {
            _this.refreshLists();
            _this.toFormView('New', false, 1);
            console.log('success');
        })
            .catch(function () {
            _this.refreshLists();
        });
    };
    return MaintenanceComponent;
}());
__decorate([
    core_1.ViewChild('childModal'),
    __metadata("design:type", ngx_bootstrap_1.ModalDirective)
], MaintenanceComponent.prototype, "childModal", void 0);
MaintenanceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'maintenance-parent',
        templateUrl: 'maintenance.component.html',
    }),
    __metadata("design:paramtypes", [fn_bu_1.FnBU,
        fn_contact_1.FnContact,
        router_1.Router,
        getauth_service_1.GetAuthService])
], MaintenanceComponent);
exports.MaintenanceComponent = MaintenanceComponent;
