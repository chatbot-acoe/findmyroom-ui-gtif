import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepgcomponentComponent } from './updatepgcomponent.component';
import { TabViewModule } from 'primeng/tabview';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";
import { PgresultserviceService } from "src/app/shared/pgservices/pgresultservice.service";


describe('UpdatepgcomponentComponent', () => {
  let component: UpdatepgcomponentComponent;
  let fixture: ComponentFixture<UpdatepgcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepgcomponentComponent ],
      imports:[
        TabViewModule,
        ReactiveFormsModule,
        FormsModule,
        NgxSpinnerModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[
        ResultserviceService,
        PgresultserviceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepgcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(UpdatepgcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.submitpg();
    expect(component).toBeTruthy();
  });
});
