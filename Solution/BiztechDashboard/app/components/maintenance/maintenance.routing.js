"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var maintenance_component_1 = require("./maintenance.component");
var app_list_component_1 = require("./subcomponents/applications/app-list.component");
var app_form_component_1 = require("./subcomponents/applications/app-form.component");
var syncRoutes = [
    {
        path: 'Maintenance', component: maintenance_component_1.MaintenanceComponent,
        children: [
            {
                path: 'Lists', component: app_list_component_1.AppListComponent, outlet: 'apps'
            },
            {
                path: ':id', component: app_form_component_1.AppFormComponent, outlet: 'apps'
            },
        ]
    },
];
var MaintenanceRouting = (function () {
    function MaintenanceRouting() {
    }
    return MaintenanceRouting;
}());
MaintenanceRouting = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(syncRoutes),],
        exports: [router_1.RouterModule,]
    })
], MaintenanceRouting);
exports.MaintenanceRouting = MaintenanceRouting;
