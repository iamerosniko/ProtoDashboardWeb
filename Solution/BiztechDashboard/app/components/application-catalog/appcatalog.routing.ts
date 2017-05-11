import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACComponent } from './ac-parent.component';
import { ACDetail } from './ac-viewdetail.component';
//import { SyncMainComponent } from './sync-main.component';
const syncRoutes: Routes = [
    { path : 'Applications' , component : ACComponent },
    { path : 'Applications/:id', component: ACDetail},
];

 @NgModule ({
     imports: [ RouterModule.forChild(syncRoutes) ],
     exports: [ RouterModule ]
 })

export class AppCatalogRouting {}