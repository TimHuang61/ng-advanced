import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { Page1Component } from "app/page1/page1.component";
import { Page2Component } from "app/page2/page2.component";
import { fallbackRoute } from "app/shared/fallback-route";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { CardsComponent } from "app/cards/cards.component";
import { LoginComponent } from "app/login/login.component";
import { LayoutComponent } from "app/layout/layout.component";
import { LoginGuard } from "app/login.guard";
import { EnsureInputGuard } from "app/ensure-input.guard";
import { ClassicComponent } from "app/form/classic/classic.component";
import { Classic2Component } from "app/form/classic2/classic2.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent },
      {
        path: 'charts', loadChildren: './charts/charts.module#ChartsModule',
        canActivate: [
          LoginGuard
        ]
      },
      { path: 'forms/classic', component: ClassicComponent },
      { path: 'forms/classic2', component: Classic2Component }
    ]
  },
  {
    path: 'login', component: LoginComponent, canDeactivate: [
      EnsureInputGuard
    ]
  },
  //, fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
