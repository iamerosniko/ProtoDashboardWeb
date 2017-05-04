import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent } from './maintenance.component';
import { AppListComponent } from './subcomponents/applications/app-list.component';
import { AppFormComponent } from './subcomponents/applications/app-form.component';

const syncRoutes: Routes = [
    {
        path : 'Maintenance' , component : MaintenanceComponent,
        children : [
            {
                path : 'Lists' , component : AppListComponent, outlet : 'apps'
            },
            {
                path : ':id' , component : AppFormComponent, outlet : 'apps'
            },
        ] 
    },
    
];

 @NgModule ({
     imports: [ RouterModule.forChild(syncRoutes), ],
     exports: [ RouterModule,  ]
 })

export class MaintenanceRouting {}