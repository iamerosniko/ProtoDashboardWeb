import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyncMainComponent } from './subcomponents/sync-main.component';
import { SyncUserComponent } from './subcomponents/sync-user.component';
import { MaintenanceComponent } from './maintenance.component';
const syncRoutes: Routes = [
    { path : 'Administrator' , component : MaintenanceComponent },
    { path : 'Users' , component : SyncUserComponent },
    { path : 'Project-Sync' , component : SyncMainComponent },
    
];

 @NgModule ({
     imports: [ RouterModule.forChild(syncRoutes) ],
     exports: [ RouterModule ]
 })

export class MaintenanceRouting {}