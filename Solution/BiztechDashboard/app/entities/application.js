"use strict";
var Application = (function () {
    function Application(AppID, //primary key
        AppName, //foreign key
        AppBU, FrontTechnology, BackTechnology, AppLifespan, PrimaryBUContact, SecondaryBUContact, AppIsActive, AppPII, AppSecurity, DateImplemented, LastProdDate, AppVersion, ProjectID, AppDesc, AppisWeb, ProjectDevID, ProjectModID, ProjectOpsID, IsUatAvail, WDSB_Features) {
        this.AppID = AppID;
        this.AppName = AppName;
        this.AppBU = AppBU;
        this.FrontTechnology = FrontTechnology;
        this.BackTechnology = BackTechnology;
        this.AppLifespan = AppLifespan;
        this.PrimaryBUContact = PrimaryBUContact;
        this.SecondaryBUContact = SecondaryBUContact;
        this.AppIsActive = AppIsActive;
        this.AppPII = AppPII;
        this.AppSecurity = AppSecurity;
        this.DateImplemented = DateImplemented;
        this.LastProdDate = LastProdDate;
        this.AppVersion = AppVersion;
        this.ProjectID = ProjectID;
        this.AppDesc = AppDesc;
        this.AppisWeb = AppisWeb;
        this.ProjectDevID = ProjectDevID;
        this.ProjectModID = ProjectModID;
        this.ProjectOpsID = ProjectOpsID;
        this.IsUatAvail = IsUatAvail;
        this.WDSB_Features = WDSB_Features;
    }
    return Application;
}());
exports.Application = Application;
