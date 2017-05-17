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
var comment_service_1 = require("../../services/comment.service");
var ACReviewsComponent = (function () {
    function ACReviewsComponent(commentService) {
        this.commentService = commentService;
        this.comments = [];
        this.getComments();
    }
    ACReviewsComponent.prototype.getComments = function () {
        var _this = this;
        this.commentService.getComment(this.appID)
            .then(function (comments) { return _this.comments = comments; });
    };
    return ACReviewsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ACReviewsComponent.prototype, "appID", void 0);
ACReviewsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ac-reviews',
        templateUrl: "ac-reviews.component.html"
    }),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], ACReviewsComponent);
exports.ACReviewsComponent = ACReviewsComponent;
