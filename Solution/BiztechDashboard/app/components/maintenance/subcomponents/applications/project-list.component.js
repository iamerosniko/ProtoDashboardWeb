"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//services
var application_1 = require("../../../../entities/application");
var project_service_1 = require("../../../../services/project.service");
var ProjectListComponent = (function () {
    function ProjectListComponent(service) {
        this.service = service;
        this.projects = [];
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProjects()
            .then(function (projects) {
            _this.projects = projects;
        });
    };
    ProjectListComponent.prototype.selectProject = function (id) {
        this.application.ProjectDevID = this.mode == 1 ? id : this.application.ProjectDevID;
        this.application.ProjectModID = this.mode == 2 ? id : this.application.ProjectModID;
        this.application.ProjectOpsID = this.mode == 3 ? id : this.application.ProjectOpsID;
    };
    return ProjectListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", application_1.Application)
], ProjectListComponent.prototype, "application", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProjectListComponent.prototype, "mode", void 0);
ProjectListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proj-list',
        templateUrl: 'project-list.component.html',
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectListComponent);
exports.ProjectListComponent = ProjectListComponent;
