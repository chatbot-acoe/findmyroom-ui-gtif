import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypropertiesComponent } from './displayproperties.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { PgresultserviceService } from "src/app/shared/pgservices/pgresultservice.service";
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";

describe('DisplaypropertiesComponent', () => {
  let component: DisplaypropertiesComponent;
  let fixture: ComponentFixture<DisplaypropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypropertiesComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[
        UserDashboardServiceService,
        PgresultserviceService,
        ResultserviceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture = TestBed.createComponent(DisplaypropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
});
