"use strict";
var Application = (function () {
    function Application(AppID, //primary key
        AppName, //foreign key
        AppBU, FrontTechnology, FrontEndPath, BackTechnology, BackEndPath, AppLifespan, PrimaryBUContact, SecondaryBUContact, AppIsActive, AppPII, AppSecurity, DateImplemented, LastProdDaAppte, AppVersion, ProjectID, AppDesc, AppDatasource, AppDatabasename, AppUserID, AppPassword, AppisWeb) {
        this.AppID = AppID;
        this.AppName = AppName;
        this.AppBU = AppBU;
        this.FrontTechnology = FrontTechnology;
        this.FrontEndPath = FrontEndPath;
        this.BackTechnology = BackTechnology;
        this.BackEndPath = BackEndPath;
        this.AppLifespan = AppLifespan;
        this.PrimaryBUContact = PrimaryBUContact;
        this.SecondaryBUContact = SecondaryBUContact;
        this.AppIsActive = AppIsActive;
        this.AppPII = AppPII;
        this.AppSecurity = AppSecurity;
        this.DateImplemented = DateImplemented;
        this.LastProdDaAppte = LastProdDaAppte;
        this.AppVersion = AppVersion;
        this.ProjectID = ProjectID;
        this.AppDesc = AppDesc;
        this.AppDatasource = AppDatasource;
        this.AppDatabasename = AppDatabasename;
        this.AppUserID = AppUserID;
        this.AppPassword = AppPassword;
        this.AppisWeb = AppisWeb;
    }
    return Application;
}());
exports.Application = Application;
