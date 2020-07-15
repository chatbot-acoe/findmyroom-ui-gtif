import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardSidenavComponentComponent } from './userdashboard-sidenav-component.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('UserdashboardSidenavComponentComponent', () => {
  let component: UserdashboardSidenavComponentComponent;
  let fixture: ComponentFixture<UserdashboardSidenavComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardSidenavComponentComponent ],
      imports:[
        ReactiveFormsModule,
        FormsModule
      ],
      providers:[
        UserDashboardServiceService
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardSidenavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(UserdashboardSidenavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.location();
    expect(component).toBeTruthy();
  });

});
