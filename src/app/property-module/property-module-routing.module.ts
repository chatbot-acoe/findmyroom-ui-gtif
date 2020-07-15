import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayPropertyComponentComponent } from './display-property-component/display-property-component.component';
import {DisplayIndividualDetailsComponentComponent} from './display-individual-details-component/display-individual-details-component.component';

const routes: Routes = [
  {path:'',component:DisplayPropertyComponentComponent},
 { path :'display-individual-details',component:DisplayIndividualDetailsComponentComponent},
 {path:'property',component:DisplayPropertyComponentComponent},
 {
  path: 'core',
  loadChildren: '../core-module/core-module.module#CoreModuleModule'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyModuleRoutingModule { }
