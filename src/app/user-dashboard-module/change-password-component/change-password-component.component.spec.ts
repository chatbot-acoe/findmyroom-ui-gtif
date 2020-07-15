import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponentComponent } from './change-password-component.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('ChangePasswordComponentComponent', () => {
  let component: ChangePasswordComponentComponent;
  let fixture: ComponentFixture<ChangePasswordComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordComponentComponent ],
      imports:[
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[
        UserDashboardServiceService
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ChangePasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.changepassword();
    expect(component).toBeTruthy();
  });
});
