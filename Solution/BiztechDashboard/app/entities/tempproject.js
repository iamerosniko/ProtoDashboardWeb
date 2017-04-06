"use strict";
var TempProject = (function () {
    function TempProject(ProjectID, ProjectName, ProjectDesc, ProjectDatasource, ProjectDatabasename, ProjectUserID, ProjectPassword, ProjectIsActive) {
        this.ProjectID = ProjectID;
        this.ProjectName = ProjectName;
        this.ProjectDesc = ProjectDesc;
        this.ProjectDatasource = ProjectDatasource;
        this.ProjectDatabasename = ProjectDatabasename;
        this.ProjectUserID = ProjectUserID;
        this.ProjectPassword = ProjectPassword;
        this.ProjectIsActive = ProjectIsActive;
    }
    return TempProject;
}());
exports.TempProject = TempProject;
