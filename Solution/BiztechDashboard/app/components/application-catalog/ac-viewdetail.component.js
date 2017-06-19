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
var favorite_service_1 = require("../../services/favorite.service");
var favorite_1 = require("../../entities/favorite");
var router_1 = require("@angular/router");
var fn_main_app_1 = require("../maintenance/functions/fn-main-app");
var appforclient_1 = require("../../entities/appforclient");
var comment_service_1 = require("../../services/comment.service");
var platform_browser_1 = require("@angular/platform-browser");
var ACDetail = (function () {
    function ACDetail(route, fnMainApp, router, commentService, favService, sanitizer) {
        this.route = route;
        this.fnMainApp = fnMainApp;
        this.router = router;
        this.commentService = commentService;
        this.favService = favService;
        this.sanitizer = sanitizer;
        this.selectedID = 0;
        this.comments = [];
        this.app = new appforclient_1.AppForClient(0, '', 0, '', '', 0, 0, 0, false, false, '', null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, null);
    }
    ACDetail.prototype.ngOnInit = function () {
        this.getselectedID();
        this.getDetail();
        this.getComments();
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
    ACDetail.prototype.getComments = function () {
        var _this = this;
        this.commentService.getComment(this.selectedID)
            .then(function (comments) { return _this.comments = comments; });
    };
    ACDetail.prototype.getFile = function () {
        if (this.app.AppIconPath == null)
            return "images/AppLogo.png";
        return this.app.AppIconPath.length == 0 ? "images/AppLogo.png " : this.app.AppIconPath;
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
        comment_service_1.CommentService,
        favorite_service_1.FavoriteService,
        platform_browser_1.DomSanitizer])
], ACDetail);
exports.ACDetail = ACDetail;
