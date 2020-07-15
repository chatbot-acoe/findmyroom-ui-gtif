import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { SignUpComponentComponent } from "src/app/core-module/login-module/sign-up-component/sign-up-component.component";
import { AuthGuard } from "src/app/shared/services/auth.guard";
//import { DashboardComponentComponent } from "src/app/partner-dashboard-module/dashboard-component/dashboard-component.component";

const routes: Routes = [
  { 
    path: '', 
    component: SignInComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginModuleRoutingModule { }
