import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { HeaderComponentComponent } from './core-module/header-component/header-component.component';
import { FooterComponentComponent } from './core-module/footer-component/footer-component.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { PropertyModuleModule } from "src/app/property-module/property-module.module";
import {TabViewModule} from 'primeng/tabview';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import swal from 'sweetalert';
import {BookingModuleModule} from '../app/booking-module/booking-module.module';
import { NgMarqueeModule } from 'ng-marquee';
import { AgmCoreModule  } from '@agm/core'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent
 
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfbQPscLKDP5fb13a5Bai2kwKinUS0ykE' //apikey
    }),
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    TabViewModule,
    HttpClientModule,
    PropertyModuleModule,
    BookingModuleModule,
    NgMarqueeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
