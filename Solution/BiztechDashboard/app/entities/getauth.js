"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetAuth = (function () {
    function GetAuth(UserName, FullName, CanAdd, CanDelete, CanEdit, CanView, Module) {
        this.UserName = UserName;
        this.FullName = FullName;
        this.CanAdd = CanAdd;
        this.CanDelete = CanDelete;
        this.CanEdit = CanEdit;
        this.CanView = CanView;
        this.Module = Module;
    }
    return GetAuth;
}());
exports.GetAuth = GetAuth;
