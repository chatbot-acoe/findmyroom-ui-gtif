import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardSidenavComponent } from "src/app/admin-dashboard-module/admindashboard-sidenav/admindashboard-sidenav.component";
import { AdminProfileComponent } from "src/app/admin-dashboard-module/admin-profile/admin-profile.component";
import { ViewProfileComponent } from "src/app/admin-dashboard-module/view-profile/view-profile.component";



const routes: Routes = [
  {
  path:'',
  component:AdmindashboardSidenavComponent,
  
  children:[
    {
      path: '',
      component:AdminProfileComponent
    },
    {
      path:'adminprofile',
      component:AdminProfileComponent
    },
    {
      path:'viewpartner',
      component: ViewProfileComponent
    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardModuleRoutingModule { }
