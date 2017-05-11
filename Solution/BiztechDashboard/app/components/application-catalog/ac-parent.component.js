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
var fn_main_app_1 = require("../maintenance/functions/fn-main-app");
var ACComponent = (function () {
    function ACComponent(fn) {
        this.fn = fn;
        this.viewtype = 0;
        this.tabselected = 0;
        this.apps = [];
        this.listApps = [];
    }
    ACComponent.prototype.ngOnInit = function () {
        this.getAllApps();
    };
    //all biztech apps
    ACComponent.prototype.getAllApps = function () {
        var _this = this;
        this.fn.getAppsClient()
            .then(function (apps) {
            _this.apps = apps;
            _this.sliceToFour();
        });
        this.tabselected = 0;
    };
    //my available app
    ACComponent.prototype.getMyAvailApps = function () {
        var _this = this;
        this.fn.getAvailAppsClient()
            .then(function (apps) {
            _this.apps = apps;
            _this.sliceToFour();
        });
        this.tabselected = 1;
    };
    //favorites
    ACComponent.prototype.getMyFavApps = function () {
        var _this = this;
        this.fn.getFavAppsClient()
            .then(function (apps) {
            _this.apps = apps;
            _this.sliceToFour();
        });
        this.tabselected = 2;
    };
    ACComponent.prototype.sliceToFour = function () {
        var ctr = 0, listCtr = 0;
        var tempList = [];
        for (var _i = 0, _a = this.apps; _i < _a.length; _i++) {
            var app = _a[_i];
            tempList.push(app);
            ctr += 1;
            listCtr += 1;
            if (ctr == 4 || listCtr == this.apps.length) {
                this.listApps.push(tempList);
                ctr = 0;
                tempList = [];
            }
        }
    };
    return ACComponent;
}());
ACComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: "ac-parent.component.html"
    }),
    __metadata("design:paramtypes", [fn_main_app_1.FnMainApp])
], ACComponent);
exports.ACComponent = ACComponent;
