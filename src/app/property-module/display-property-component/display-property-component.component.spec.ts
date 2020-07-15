import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPropertyComponentComponent } from './display-property-component.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md';
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { PgresultserviceService } from "../../shared/pgservices/pgresultservice.service";
import { RouterTestingModule } from "@angular/router/testing";

describe('DisplayPropertyComponentComponent', () => {
  let component: DisplayPropertyComponentComponent;
  let fixture: ComponentFixture<DisplayPropertyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPropertyComponentComponent ],
      imports:[
        RouterTestingModule.withRoutes([]),
        NgxSpinnerModule,
        FormsModule,
        MDBBootstrapModule,
        ButtonsModule,
        WavesModule,
        CardsFreeModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[
        PgresultserviceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPropertyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(DisplayPropertyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.filterFlatsData();
    component.filterPgData();
    component.sortByPrice(1,'flat');
    expect(component).toBeTruthy();
  });

});
