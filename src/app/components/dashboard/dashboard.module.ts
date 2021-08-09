import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReportsComponent } from './reports/reports.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent,
    ReportsComponent,
    UsersCreateComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
