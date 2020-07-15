import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { ProfileComponentComponent } from './profile-component.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { UserData } from "src/app/user-dashboard-module/User";

describe('ProfileComponentComponent', () => {
  let component: ProfileComponentComponent;
  let fixture: ComponentFixture<ProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponentComponent ],
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
    fixture = TestBed.createComponent(ProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create',()=>{
    expect(new UserData).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.refer();
    expect(component).toBeTruthy();
  });
 
});
