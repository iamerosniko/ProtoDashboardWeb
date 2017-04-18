import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
//ComponentModules
import { SynchronizationModule } from './components/synchronization/sync.module';
import { AppCatalogModule } from './components/application-catalog/appcatalog.module';
//routing
import { AppRouting } from './app.routing';
@NgModule({
  imports:      [ BrowserModule , SynchronizationModule,
                  AppCatalogModule, AppRouting 
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
