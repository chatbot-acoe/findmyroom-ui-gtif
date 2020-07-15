import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "src/app/shared/services/auth.guard";
//import { DashboardComponentComponent } from "src/app/partner-dashboard-module/dashboard-component/dashboard-component.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: './core-module/core-module.module#CoreModuleModule'
  },
  {
    path: 'admin-dashboard',
    loadChildren: './admin-dashboard-module/admin-dashboard-module.module#AdminDashboardModuleModule',
    canActivate: [AuthGuard], data: { roles: 'admin' }
  },
  {
    path: 'partnerdashboard',
    loadChildren: './partnerdashboard/partnerdashboard.module#PartnerdashboardModule',
    canActivate: [AuthGuard], data: {roles: 'partner'}
  },
  {
    path: 'customerdashboard',
    loadChildren: './user-dashboard-module/user-dashboard-module.module#UserDashboardModuleModule',
    canActivate: [AuthGuard], data: { roles: 'customer' }

  },
  {
    path: 'property-module',
    loadChildren: './property-module/property-module.module#PropertyModuleModule',
    //canActivate: [AuthGuard], data: {roles: ['guest','customer']}

  },
  {
    path : 'booking-module',
    loadChildren : './booking-module/booking-module.module#BookingModuleModule',
    canActivate: [AuthGuard], data: { roles: 'customer' }
  }

];

@NgModule({
  imports:  [RouterModule.forRoot(routes, {  useHash:  true  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
