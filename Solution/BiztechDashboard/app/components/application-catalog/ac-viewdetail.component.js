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
var favorite_service_1 = require("../../services/favorite.service");
var favorite_1 = require("../../entities/favorite");
var router_1 = require("@angular/router");
var fn_main_app_1 = require("../maintenance/functions/fn-main-app");
var appforclient_1 = require("../../entities/appforclient");
var ACDetail = (function () {
    function ACDetail(route, fnMainApp, router, favService) {
        this.route = route;
        this.fnMainApp = fnMainApp;
        this.router = router;
        this.favService = favService;
        this.selectedID = 0;
        this.app = new appforclient_1.AppForClient(0, '', 0, '', '', 0, 0, 0, false, false, '', null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, null);
    }
    ACDetail.prototype.ngOnInit = function () {
        this.getselectedID();
        this.getDetail();
    };
    ACDetail.prototype.getselectedID = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedID = params['id'];
        });
    };
    ACDetail.prototype.getDetail = function () {
        var _this = this;
        this.fnMainApp.getAppDetail(this.selectedID)
            .then(function (detail) { return _this.app = detail[0]; });
    };
    ACDetail.prototype.getStatus = function (status) {
        return status ? "Active" : "Inactive";
    };
    ACDetail.prototype.isPii = function (pii) {
        return pii ? "Yes" : "No";
    };
    ACDetail.prototype.run = function (path) {
        window.open(path);
    };
    ACDetail.prototype.myFav = function (app) {
        var fav = new favorite_1.Favorite(0, app.AppID, '', app.myFav);
        this.favService.postFavorite(fav);
    };
    return ACDetail;
}());
ACDetail = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ac-viewdetail',
        templateUrl: "ac-viewdetail.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        fn_main_app_1.FnMainApp,
        router_1.Router,
        favorite_service_1.FavoriteService])
], ACDetail);
exports.ACDetail = ACDetail;
