import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHistoryComponentComponent } from './booking-history-component.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('BookingHistoryComponentComponent', () => {
  let component: BookingHistoryComponentComponent;
  let fixture: ComponentFixture<BookingHistoryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingHistoryComponentComponent ],
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
    fixture = TestBed.createComponent(BookingHistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
