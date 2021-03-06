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
require("rxjs/add/operator/toPromise");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiUrl = 'api/BUContacts';
    }
    ContactService.prototype.getContacts = function () {
        return this.http
            .get(this.apiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.getContact = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.postContact = function (contact) {
        return this.http
            .post(this.apiUrl, JSON.stringify(contact), { headers: this.headers })
            .toPromise()
            .then(function () { console.log(true); })
            .catch(function () { console.log(false); });
    };
    ContactService.prototype.putContact = function (contact) {
        var url = this.apiUrl + "/" + contact.ContactID;
        return this.http
            .put(url, JSON.stringify(contact), { headers: this.headers })
            .toPromise()
            .then(function () { return contact; })
            .catch(this.handleError);
    };
    ContactService.prototype.DeleteContact = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return true; })
            .catch(function () { return false; });
    };
    ContactService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactService);
exports.ContactService = ContactService;
