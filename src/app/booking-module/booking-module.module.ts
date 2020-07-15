import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingModuleRoutingModule } from './booking-module-routing.module';
import { BookingComponentComponent } from './booking-component/booking-component.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [BookingComponentComponent],
  imports: [
    CommonModule,
    BookingModuleRoutingModule,
    MDBBootstrapModule,
    NavbarModule, WavesModule, ButtonsModule, InputsModule, FormsModule, ReactiveFormsModule
  ]
})
export class BookingModuleModule { }
