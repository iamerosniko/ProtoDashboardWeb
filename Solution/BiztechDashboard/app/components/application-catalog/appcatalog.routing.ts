import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACComponent } from './ac-parent.component';
//import { SyncMainComponent } from './sync-main.component';
const syncRoutes: Routes = [
    { path : 'Applications' , component : ACComponent }
];

 @NgModule ({
     imports: [ RouterModule.forChild(syncRoutes) ],
     exports: [ RouterModule ]
 })

export class AppCatalogRouting {}