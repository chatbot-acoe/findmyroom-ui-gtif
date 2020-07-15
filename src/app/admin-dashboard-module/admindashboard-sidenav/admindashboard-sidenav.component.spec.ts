import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardSidenavComponent } from './admindashboard-sidenav.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('AdmindashboardSidenavComponent', () => {
  let component: AdmindashboardSidenavComponent;
  let fixture: ComponentFixture<AdmindashboardSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindashboardSidenavComponent ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashboardSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
