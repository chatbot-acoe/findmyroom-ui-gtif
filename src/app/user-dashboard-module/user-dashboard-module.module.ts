import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { UserDashboardModuleRoutingModule } from './user-dashboard-module-routing.module';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { BookingHistoryComponentComponent } from './booking-history-component/booking-history-component.component';
import { UserdashboardSidenavComponentComponent } from './userdashboard-sidenav-component/userdashboard-sidenav-component.component';
import { EditProfileComponentComponent } from './edit-profile-component/edit-profile-component.component';
import { ChangePasswordComponentComponent } from './change-password-component/change-password-component.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [ProfileComponentComponent, BookingHistoryComponentComponent,UserdashboardSidenavComponentComponent, EditProfileComponentComponent, ChangePasswordComponentComponent],
  imports: [
    CommonModule,
    UserDashboardModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MDBBootstrapModule
  ],
  providers : [UserDashboardServiceService]
  
})
export class UserDashboardModuleModule { }
