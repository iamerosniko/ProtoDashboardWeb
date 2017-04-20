"use strict";
var ProjectUsers = (function () {
    function ProjectUsers(ProjectID, ProjectName, ProjectDatasource, ProjectDb, ProjectUserID, ProjectPassword, ProjectIsActive, ProjectSyncStatus) {
        this.ProjectID = ProjectID;
        this.ProjectName = ProjectName;
        this.ProjectDatasource = ProjectDatasource;
        this.ProjectDb = ProjectDb;
        this.ProjectUserID = ProjectUserID;
        this.ProjectPassword = ProjectPassword;
        this.ProjectIsActive = ProjectIsActive;
        this.ProjectSyncStatus = ProjectSyncStatus;
    }
    return ProjectUsers;
}());
exports.ProjectUsers = ProjectUsers;
