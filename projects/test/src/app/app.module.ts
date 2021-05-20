import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AssetsModule } from 'assets-test';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AssetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
