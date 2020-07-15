import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarousalSearchComponentComponent } from './home-component/carousal-search-component/carousal-search-component.component';
import { RecomendedPropertiesComponentComponent } from './home-component/recomended-properties-component/recomended-properties-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { ContactUsComponentComponent } from './contact-us-component/contact-us-component.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "src/app/shared/services/auth.guard";
import { ReasonComponent } from "src/app/core-module/home-component/reason/reason.component";



const routes: Routes = [
 {
  path: '',
  component: HomeComponentComponent,
  children: [
    { path: '', component: CarousalSearchComponentComponent, outlet: 'firstchild' },
      { path: '', component: RecomendedPropertiesComponentComponent, outlet: 'secondchild' },
      {path: '', component: ReasonComponent,outlet: 'thirdchild'}
     
  ]
},
{
  path: 'aboutus', component: AboutUsComponentComponent
},
{
  path: 'contactus', component: ContactUsComponentComponent
},
{
    path: 'login',
    loadChildren: './login-module/login-module.module#LoginModuleModule'

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreModuleRoutingModule { }
