import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppSecondComponent } from './app.secondcomponent/app.secondcomponent.component';
import { DemoformComponent } from './demoform/demoform.component';
import { Login01Component } from './login01/login01.component';
import { Login02Component } from './login02/login02.component';
import { Login03Component } from './login03/login03.component';
import { Login04Component } from './login04/login04.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSecondComponent,
    DemoformComponent,
    Login01Component,
    Login02Component,
    Login03Component,
    Login04Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
