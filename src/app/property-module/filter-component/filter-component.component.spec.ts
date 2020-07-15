import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponentComponent } from './filter-component.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PgresultserviceService } from "../../shared/pgservices/pgresultservice.service";
import { RouterTestingModule } from "@angular/router/testing";

describe('FilterComponentComponent', () => {
  let component: FilterComponentComponent;
  let fixture: ComponentFixture<FilterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponentComponent ],
      imports:[
        MDBBootstrapModule,
        ButtonsModule,
        WavesModule,
        CardsFreeModule,
        NgxSpinnerModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[
        PgresultserviceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
