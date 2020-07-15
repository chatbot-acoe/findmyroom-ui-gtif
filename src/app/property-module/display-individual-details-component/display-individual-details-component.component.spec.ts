import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIndividualDetailsComponentComponent } from './display-individual-details-component.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PgresultserviceService } from "../../shared/pgservices/pgresultservice.service";
import { RouterTestingModule } from "@angular/router/testing";

describe('DisplayIndividualDetailsComponentComponent', () => {
  let component: DisplayIndividualDetailsComponentComponent;
  let fixture: ComponentFixture<DisplayIndividualDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayIndividualDetailsComponentComponent ],
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
    fixture = TestBed.createComponent(DisplayIndividualDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(DisplayIndividualDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.contactowner();
    component.contactPg();
    component.ngOnInit();
    component.bookflat();
    component.bookpg();
    expect(component).toBeTruthy();
  });

});
