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
var fn_main_app_1 = require("../maintenance/functions/fn-main-app");
var getauth_service_1 = require("../../services/getauth.service");
var getauth_1 = require("../../entities/getauth");
var Observable_1 = require("rxjs/Observable");
var router_1 = require("@angular/router");
var ACComponent = (function () {
    function ACComponent(fn, getAuthService, router) {
        this.fn = fn;
        this.getAuthService = getAuthService;
        this.router = router;
        this.searchApp = '';
        this.viewtype = 0;
        this.tabselected = 0;
        this.apps = [];
        this.listApps = [];
        this.myAuth = new getauth_1.GetAuth('', '', false, false, false, false, '');
    }
    ACComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = new Observable_1.Observable(function () {
            _this.getMyAvailApps(_this.searchApp);
            setTimeout(function () {
                if (_this.apps.length == 0) {
                    _this.getAllApps(_this.searchApp);
                }
            }, 1000);
        });
        this.data.subscribe();
        this.getAuthService.getAuth().then(function (auth) { return _this.myAuth = auth; });
    };
    //gotomaintenance
    ACComponent.prototype.maintenanceView = function () {
        //[routerLink]="['/Maintenance', {outlets: {'apps': ['Lists']}}]"
        this.router.navigate(['/Maintenance', { outlets: { 'apps': ['Lists'] } }]);
    };
    //all biztech apps
    ACComponent.prototype.getAllApps = function (appName) {
        var _this = this;
        this.tabselected = 0;
        this.apps = [];
        this.fn.getAppsClient(appName)
            .then(function (apps) {
            _this.apps = apps;
            _this.sliceToFour();
        });
    };
    //my available app
    ACComponent.prototype.getMyAvailApps = function (appName) {
        var _this = this;
        this.tabselected = 1;
        this.apps = [];
        this.fn.getAvailAppsClient(appName)
            .then(function (apps) {
            _this.apps = apps;
            _this.sliceToFour();
        });
    };
    //favorites
    ACComponent.prototype.getMyFavApps = function (appName) {
        var _this = this;
        this.tabselected = 2;
        this.apps = [];
        this.fn.getFavAppsClient(appName)
            .then(function (apps) {
            _this.apps = apps;
            _this.sliceToFour();
        });
    };
    ACComponent.prototype.refresh = function (selection) {
        this.tabselected = selection;
        if (this.tabselected == 0)
            this.getAllApps(this.searchApp);
        else if (this.tabselected == 1)
            this.getMyAvailApps(this.searchApp);
        else
            this.getMyFavApps(this.searchApp);
    };
    ACComponent.prototype.sliceToFour = function () {
        this.listApps = [];
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
    __metadata("design:paramtypes", [fn_main_app_1.FnMainApp,
        getauth_service_1.GetAuthService,
        router_1.Router])
], ACComponent);
exports.ACComponent = ACComponent;
