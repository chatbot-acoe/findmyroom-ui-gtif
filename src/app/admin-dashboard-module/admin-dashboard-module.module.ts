import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminDashboardModuleRoutingModule } from './admin-dashboard-module-routing.module';
import { AdmindashboardSidenavComponent } from './admindashboard-sidenav/admindashboard-sidenav.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [AdmindashboardSidenavComponent, ViewProfileComponent, AdminProfileComponent],
  imports: [
    CommonModule,
    AdminDashboardModuleRoutingModule,
    NgxSpinnerModule
    
  ],
 
})
export class AdminDashboardModuleModule { }
