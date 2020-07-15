import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md'

import { FlatDetails } from "src/app/flatdetails"; 
import { PropertyModuleRoutingModule } from './property-module-routing.module';
import { FilterComponentComponent } from './filter-component/filter-component.component';

import { DisplayIndividualDetailsComponentComponent } from './display-individual-details-component/display-individual-details-component.component';
import { DisplayPropertyComponentComponent } from "src/app/property-module/display-property-component/display-property-component.component";
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilterComponentComponent,DisplayPropertyComponentComponent, DisplayIndividualDetailsComponentComponent],
  imports: [
    CommonModule,
    PropertyModuleRoutingModule,
    CardsFreeModule,
    FormsModule,
    ButtonsModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    NgxSpinnerModule
  ]
})
export class PropertyModuleModule { }
