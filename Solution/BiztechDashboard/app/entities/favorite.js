"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Favorite = (function () {
    function Favorite(FavID, AppID, UserName, IsActive) {
        this.FavID = FavID;
        this.AppID = AppID;
        this.UserName = UserName;
        this.IsActive = IsActive;
    }
    return Favorite;
}());
exports.Favorite = Favorite;
