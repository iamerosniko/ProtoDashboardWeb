"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ACNoAvailComponent = (function () {
    function ACNoAvailComponent() {
    }
    return ACNoAvailComponent;
}());
ACNoAvailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ac-noavail',
        template: "\n    <div class=\"jumbotron\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <img src=\"images/About-96.png\">\n            </div>\n            <div class=\"col-md-10\">\n                <h2>There are no available apps for you.</h2>\n                <p><small>If you think there is an issue retrieving your apps, please contact Site Administrator. Thank you.</small></p>\n            </div>\n        </div>\n    </div>\n  "
    })
], ACNoAvailComponent);
exports.ACNoAvailComponent = ACNoAvailComponent;
