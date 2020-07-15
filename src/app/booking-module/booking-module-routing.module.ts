import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponentComponent } from './booking-component/booking-component.component';

const routes: Routes = [
  {
    path : '', component: BookingComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingModuleRoutingModule { }
