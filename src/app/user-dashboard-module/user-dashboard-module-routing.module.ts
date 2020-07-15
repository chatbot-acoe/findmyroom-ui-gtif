import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "src/app/shared/services/auth.guard";
import { UserdashboardSidenavComponentComponent } from "src/app/user-dashboard-module/userdashboard-sidenav-component/userdashboard-sidenav-component.component";
import { ProfileComponentComponent } from "src/app/user-dashboard-module/profile-component/profile-component.component";
import { ChangePasswordComponentComponent } from "src/app/user-dashboard-module/change-password-component/change-password-component.component";
import { BookingHistoryComponentComponent } from "src/app/user-dashboard-module/booking-history-component/booking-history-component.component";
import { EditProfileComponentComponent } from "src/app/user-dashboard-module/edit-profile-component/edit-profile-component.component";
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const routes: Routes = [
{  path:'',
  component:UserdashboardSidenavComponentComponent,
  // canActivateChild: [AuthGuard], data:{roles:'customer'},
  children:[
    {
      path:'profile',
      component:ProfileComponentComponent
    },
    {
      path: '',
      component: ProfileComponentComponent
    },
    {
      path:'changepassword',
      component:ChangePasswordComponentComponent
    },
    {
      path:'editProfile',
      component:EditProfileComponentComponent
    },
    {
      path:'bookingHistory',
      component: BookingHistoryComponentComponent
    }
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    HttpModule,
  ],
  exports: [RouterModule]
})
export class UserDashboardModuleRoutingModule { }
