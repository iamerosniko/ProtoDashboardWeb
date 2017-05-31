"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectUsers = (function () {
    function ProjectUsers(ProjectID, ProjectName, ProjectDatasource, ProjectDb, ProjectUserID, ProjectPassword, ProjectIsActive, ProjectSyncStatus, ProjectFrontEnd, ProjectBackEnd) {
        this.ProjectID = ProjectID;
        this.ProjectName = ProjectName;
        this.ProjectDatasource = ProjectDatasource;
        this.ProjectDb = ProjectDb;
        this.ProjectUserID = ProjectUserID;
        this.ProjectPassword = ProjectPassword;
        this.ProjectIsActive = ProjectIsActive;
        this.ProjectSyncStatus = ProjectSyncStatus;
        this.ProjectFrontEnd = ProjectFrontEnd;
        this.ProjectBackEnd = ProjectBackEnd;
    }
    return ProjectUsers;
}());
exports.ProjectUsers = ProjectUsers;
