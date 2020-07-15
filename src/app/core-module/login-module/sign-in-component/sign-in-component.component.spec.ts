import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponentComponent } from './sign-in-component.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from "src/app/core-module/login-module/user.service";
import { AuthServiceService } from "src/app/shared/services/auth-service.service";
import { ForgotserviceService } from '../../../shared/services/forgotservice.service';


describe('SignInComponentComponent', () => {
  let component: SignInComponentComponent;
  let fixture: ComponentFixture<SignInComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponentComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[
        UserService,
        AuthServiceService,
        ForgotserviceService
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(SignInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.login();
    component.forgot();
    component.loginAuthenticate("customer");
    expect(component).toBeTruthy();
  });
});
