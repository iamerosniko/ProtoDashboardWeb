"use strict";
var Favorite = (function () {
    function Favorite(FavID, AppID, UserName) {
        this.FavID = FavID;
        this.AppID = AppID;
        this.UserName = UserName;
    }
    return Favorite;
}());
exports.Favorite = Favorite;
