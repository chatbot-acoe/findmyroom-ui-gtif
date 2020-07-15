import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
const route = './home-component/recomended-properties-component';
import { CoreModuleRoutingModule } from './core-module-routing.module';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { ContactUsComponentComponent } from './contact-us-component/contact-us-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CarousalSearchComponentComponent } from './home-component/carousal-search-component/carousal-search-component.component';
import { RecomendedPropertiesComponentComponent } from './home-component/recomended-properties-component/recomended-properties-component.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import { ReasonComponent } from './home-component/reason/reason.component';
import { NgMarqueeModule } from 'ng-marquee';
import { AgmCoreModule } from "@agm/core";



@NgModule({
  declarations: [AboutUsComponentComponent,
      ContactUsComponentComponent, HomeComponentComponent, CarousalSearchComponentComponent,
       RecomendedPropertiesComponentComponent,
       ReasonComponent],
  imports: [
    CommonModule,
    InputsModule,
    AgmCoreModule,
    FormsModule, 
    ReactiveFormsModule,
    MDBBootstrapModule,
    NavbarModule,
    WavesModule,
    CoreModuleRoutingModule,
    ButtonsModule,
    FormsModule,
    NgMarqueeModule
    
  ]
})
export class CoreModuleModule { }
