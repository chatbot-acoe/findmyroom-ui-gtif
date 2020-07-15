import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponentComponent } from './sign-up-component.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

describe('SignUpComponentComponent', () => {
  let component: SignUpComponentComponent;
  let fixture: ComponentFixture<SignUpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponentComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(SignUpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.Signup();
    component.EmailInvalid("adminfindmyroom@gmail.com");
    component.MustMatch("12345Aa@","12345Aa@");
    expect(component).toBeTruthy();
  });

});
