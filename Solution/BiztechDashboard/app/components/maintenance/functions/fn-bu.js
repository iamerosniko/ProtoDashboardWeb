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
//services
var bu_service_1 = require("../../../services/bu.service");
var FnBU = (function () {
    function FnBU(buService) {
        this.buService = buService;
    }
    //get all
    FnBU.prototype.getBUs = function () {
        return this.buService.getBUs();
    };
    //getone
    FnBU.prototype.getBU = function (id) {
        return this.buService.getBU(id);
    };
    //submit
    FnBU.prototype.submitBU = function (isNew, bu) {
        return isNew ? this.buService.postBU(bu) : this.buService.putBU(bu);
    };
    return FnBU;
}());
FnBU = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [bu_service_1.BUService])
], FnBU);
exports.FnBU = FnBU;
