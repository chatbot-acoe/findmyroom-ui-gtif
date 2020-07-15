import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropertyComponent } from './addproperty.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { PgresultserviceService } from "src/app/shared/pgservices/pgresultservice.service";
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";

describe('AddpropertyComponent', () => {
  let component: AddpropertyComponent;
  let fixture: ComponentFixture<AddpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpropertyComponent ],
      imports:[
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[
        UserDashboardServiceService,
        PgresultserviceService,
        ResultserviceService
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(AddpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.submitpg();
    let event;
    let event1;
    let event2;
    let event3;
    let event4;
    component.selectFile(event);
    component.selectFile2(event1);
    component.selectFile3(event2);
    component.selectFile4(event3);
    component.selectFile5(event4);
    component.upload();
    component.submit();
    component.submitpg();
    expect(component).toBeTruthy();
  });
});
