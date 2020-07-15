import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { EditProfileComponentComponent } from './edit-profile-component.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('EditProfileComponentComponent', () => {
  let component: EditProfileComponentComponent;
  let fixture: ComponentFixture<EditProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileComponentComponent ],
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
    fixture = TestBed.createComponent(EditProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
