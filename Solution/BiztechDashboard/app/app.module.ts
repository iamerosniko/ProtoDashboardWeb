import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
//ComponentModules
import { MaintenanceModule } from './components/maintenance/maintenance.module';
import { AppCatalogModule } from './components/application-catalog/appcatalog.module';
//routing
import { AppRouting } from './app.routing';
@NgModule({
  imports:      [ BrowserModule , MaintenanceModule,
                  AppCatalogModule, AppRouting 
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
