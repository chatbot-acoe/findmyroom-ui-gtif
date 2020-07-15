import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProfileComponent } from './view-profile.component';
import { AdminDashboardServiceService } from "src/app/admin-dashboard-module/admin-dashboard-service.service";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('ViewProfileComponent', () => {
  let component: ViewProfileComponent;
  let fixture: ComponentFixture<ViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfileComponent ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[
        AdminDashboardServiceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
