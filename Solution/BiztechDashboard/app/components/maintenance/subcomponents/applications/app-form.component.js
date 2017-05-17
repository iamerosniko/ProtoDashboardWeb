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
var application_1 = require("../../../../entities/application");
var contact_1 = require("../../../../entities/contact");
var feature_1 = require("../../../../entities/feature");
//functions
var fn_main_app_1 = require("../../functions/fn-main-app");
var fn_bu_1 = require("../../functions/fn-bu");
var fn_contact_1 = require("../../functions/fn-contact");
var AppFormComponent = (function () {
    function AppFormComponent(route, router, fnMainApp, fnBU, fnContact) {
        this.route = route;
        this.router = router;
        this.fnMainApp = fnMainApp;
        this.fnBU = fnBU;
        this.fnContact = fnContact;
        this.formMode = 'New';
        this.dropDownBU = [];
        this.dropDownContact1 = [];
        this.dropDownContact2 = [];
        this.dt = new Date();
        this.features = [];
        this.showDate = 0;
        this.feTech = [];
        this.beTech = [];
        this.mode = 0;
        this.saving = false;
        this.clrApp();
        this.feTech = ["MS Access", ".NET"];
        this.beTech = ["MS Access", "MS SQL"];
    }
    AppFormComponent.prototype.clrApp = function () {
        this.selectedApp = new application_1.Application(0, '', 0, '', '', 0, 0, 0, false, false, '', null, null, '', '', '', false, '', '', '', false);
    };
    AppFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.fnMainApp.getApp(params.id)
                .then(function (app) {
                _this.selectedApp = app;
                _this.formMode = _this.selectedApp.AppID == 0
                    ? 'New' : 'Update';
            });
            _this.fnMainApp.getFeatures(params.id).then(function (features) { return _this.features = features; });
        });
        this.getDropdownBU();
        this.getDropdownContact1();
        this.getDropdownContact2();
    };
    AppFormComponent.prototype.getDropdownBU = function () {
        var _this = this;
        this.fnBU.getBUs()
            .then(function (bus) {
            _this.dropDownBU = bus;
        });
    };
    AppFormComponent.prototype.getDropdownContact1 = function () {
        var _this = this;
        this.fnContact.getContacts()
            .then(function (contacts) {
            _this.dropDownContact1 = contacts;
        });
        this.dropDownContact2.push(new contact_1.Contact(null, '---None---', '', ''));
    };
    AppFormComponent.prototype.getDropdownContact2 = function () {
        var _this = this;
        this.fnContact.getContacts()
            .then(function (contacts) {
            _this.dropDownContact2 = contacts;
            _this.dropDownContact2.push(new contact_1.Contact(null, '---None---', '', ''));
        });
    };
    AppFormComponent.prototype.applicationView = function () {
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', { outlets: { 'apps': ['Lists'] } }]);
    };
    AppFormComponent.prototype.checkState = function () {
        var myState = (this.selectedApp.AppName.trim().length == 0 ||
            this.selectedApp.AppBU == 0 ||
            this.selectedApp.FrontTechnology.trim().length == 0 ||
            this.selectedApp.BackTechnology.trim().length == 0 ||
            this.selectedApp.PrimaryBUContact == 0
            || this.selectedApp.ProjectDevID.trim().length == 0
            || this.selectedApp.ProjectModID.trim().length == 0
            || this.selectedApp.ProjectOpsID.trim().length == 0);
        //console.log(myState);
        return myState || this.saving;
    };
    AppFormComponent.prototype.submitApp = function () {
        var _this = this;
        this.fnMainApp.submitApp(this.selectedApp.AppID == 0, this.selectedApp)
            .then(function () {
            if (_this.features.length > 0)
                _this.fnMainApp.submitFeatures(_this.features)
                    .then(function () {
                    alert("success");
                    _this.applicationView();
                })
                    .catch(function () {
                    console.log('problem in adding features');
                });
        })
            .catch(function () {
            console.log('problem in applications');
        });
    };
    AppFormComponent.prototype.addFeature = function () {
        this.features.push(new feature_1.Feature(0, this.selectedApp.AppID, '', '', ''));
    };
    AppFormComponent.prototype.browseFile = function (name) {
        document.getElementById(name).click();
        return document.getElementById(name).value;
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
        fn_main_app_1.FnMainApp,
        fn_bu_1.FnBU,
        fn_contact_1.FnContact])
], AppFormComponent);
exports.AppFormComponent = AppFormComponent;
