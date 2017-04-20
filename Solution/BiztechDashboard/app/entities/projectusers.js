"use strict";
var ProjectUsers = (function () {
    function ProjectUsers(ProjectID, ProjectName, ProjectDatasource, ProjectDatabasename, ProjectUserID, ProjectPassword, ProjectIsActive, ProjectSyncStatus) {
        this.ProjectID = ProjectID;
        this.ProjectName = ProjectName;
        this.ProjectDatasource = ProjectDatasource;
        this.ProjectDatabasename = ProjectDatabasename;
        this.ProjectUserID = ProjectUserID;
        this.ProjectPassword = ProjectPassword;
        this.ProjectIsActive = ProjectIsActive;
        this.ProjectSyncStatus = ProjectSyncStatus;
    }
    return ProjectUsers;
}());
exports.ProjectUsers = ProjectUsers;
