import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { CardsComponent } from 'app/cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from "app/login.guard";
import { EnsureInputGuard } from "app/ensure-input.guard";
import { ClassicComponent } from './form/classic/classic.component';
import { Classic2Component } from './form/classic2/classic2.component';
//import { FlotComponent } from './charts/flot/flot.component';
//import { ChartsModule } from "app/charts/charts.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    LayoutComponent,
    LoginComponent,
    ClassicComponent,
    Classic2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //ChartsModule,// 子路由優先
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginGuard,
    EnsureInputGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
