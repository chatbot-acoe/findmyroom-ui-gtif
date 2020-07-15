import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponentComponent } from './booking-component.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FlatbuyService } from "src/app/shared/flatbuy.service";
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";
import { PgresultserviceService } from "src/app/shared/pgservices/pgresultservice.service";


describe('BookingComponentComponent', () => {
  let component: BookingComponentComponent;
  let fixture: ComponentFixture<BookingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingComponentComponent ],
      imports:[
        MDBBootstrapModule,
        NavbarModule, WavesModule, ButtonsModule, InputsModule, FormsModule, ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[
        FlatbuyService,
        PgresultserviceService,
        ResultserviceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
