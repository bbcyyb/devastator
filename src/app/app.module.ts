import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // argular
    BrowserModule,

    // core
    CoreModule,

    // route
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
