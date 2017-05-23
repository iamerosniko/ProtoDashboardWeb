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
var rating_service_1 = require("../../../services/rating.service");
var ratings_1 = require("../../../entities/ratings");
var ACRatingsComponent = (function () {
    function ACRatingsComponent(route, router, ratingService) {
        this.route = route;
        this.router = router;
        this.ratingService = ratingService;
        this.rating = new ratings_1.Ratings(0, 0, '', 0);
    }
    ACRatingsComponent.prototype.ngOnInit = function () {
        this.getselectedID();
        this.getRating();
    };
    ACRatingsComponent.prototype.getselectedID = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedID = params['id'];
        });
    };
    ACRatingsComponent.prototype.getRating = function () {
        var _this = this;
        this.ratingService.getRating(this.selectedID)
            .then(function (rat) { return _this.rating = new ratings_1.Ratings(rat.AppID, rat.Rating, rat.UserName, rat.Rating); });
    };
    ACRatingsComponent.prototype.postRating = function () {
        this.ratingService.postRating(this.rating);
    };
    return ACRatingsComponent;
}());
ACRatingsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ac-ratings',
        templateUrl: 'ac-ratings.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        rating_service_1.RatingService])
], ACRatingsComponent);
exports.ACRatingsComponent = ACRatingsComponent;
