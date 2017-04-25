"use strict";
var Project = (function () {
    function Project(ProjectID, ProjectName, ProjectDatasource, ProjectDatabasename, ProjectUserID, ProjectPassword, ProjectIsActive, FrontEndPath, BackEndPath) {
        this.ProjectID = ProjectID;
        this.ProjectName = ProjectName;
        this.ProjectDatasource = ProjectDatasource;
        this.ProjectDatabasename = ProjectDatabasename;
        this.ProjectUserID = ProjectUserID;
        this.ProjectPassword = ProjectPassword;
        this.ProjectIsActive = ProjectIsActive;
        this.FrontEndPath = FrontEndPath;
        this.BackEndPath = BackEndPath;
    }
    return Project;
}());
exports.Project = Project;
