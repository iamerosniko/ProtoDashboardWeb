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
var fn_main_app_1 = require("../../maintenance/functions/fn-main-app");
var platform_browser_1 = require("@angular/platform-browser");
var ACFeatureComponent = (function () {
    function ACFeatureComponent(route, fnMainApp, router, sanitizer) {
        this.route = route;
        this.fnMainApp = fnMainApp;
        this.router = router;
        this.sanitizer = sanitizer;
        this.slides = [];
        this.myInterval = 4500;
        this.getselectedID();
    }
    ACFeatureComponent.prototype.ngOnInit = function () {
        this.getFeatures();
    };
    ACFeatureComponent.prototype.sanitize = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    ACFeatureComponent.prototype.getselectedID = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedID = params['id'];
        });
    };
    ACFeatureComponent.prototype.getFeatures = function () {
        var _this = this;
        this.fnMainApp.getFeatures(this.selectedID).then(function (features) {
            for (var _i = 0, features_1 = features; _i < features_1.length; _i++) {
                var entry = features_1[_i];
                //console.log(entry); // 1, "string", false
                _this.slides.push({
                    image: entry.ScreenshotPath,
                    FeatFunction: entry.FeatFunction,
                    Description: entry.Description
                });
            }
        });
    };
    return ACFeatureComponent;
}());
ACFeatureComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ac-feature',
        templateUrl: "ac-feature.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        fn_main_app_1.FnMainApp,
        router_1.Router,
        platform_browser_1.DomSanitizer])
], ACFeatureComponent);
exports.ACFeatureComponent = ACFeatureComponent;
