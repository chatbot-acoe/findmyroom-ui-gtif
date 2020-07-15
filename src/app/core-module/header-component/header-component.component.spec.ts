import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentComponent } from './header-component.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { AuthServiceService } from "src/app/shared/services/auth-service.service";
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";

describe('HeaderComponentComponent', () => {
  let component: HeaderComponentComponent;
  let fixture: ComponentFixture<HeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponentComponent ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[
        AuthServiceService,
        UserDashboardServiceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    
    fixture = TestBed.createComponent(HeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.logedIn(),
    //component.logout(),
    component.profile(),
    expect(component).toBeTruthy();
  });
});
