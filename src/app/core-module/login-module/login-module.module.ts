import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md'
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [SignInComponentComponent, SignUpComponentComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ButtonsModule, 
    WavesModule, 
    CardsFreeModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgxSpinnerModule,
    LoginModuleRoutingModule
  ]
})
export class LoginModuleModule { }
