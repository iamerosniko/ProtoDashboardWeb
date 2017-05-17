"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppUsers = (function () {
    function AppUsers(AppUserID, //foreign key
        UserName, AppID) {
        this.AppUserID = AppUserID;
        this.UserName = UserName;
        this.AppID = AppID;
    }
    return AppUsers;
}());
exports.AppUsers = AppUsers;
