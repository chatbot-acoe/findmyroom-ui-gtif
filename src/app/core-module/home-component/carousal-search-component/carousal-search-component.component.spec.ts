import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalSearchComponentComponent } from './carousal-search-component.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgMarqueeModule } from 'ng-marquee';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe('CarousalSearchComponentComponent', () => {
  let component: CarousalSearchComponentComponent;
  let fixture: ComponentFixture<CarousalSearchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalSearchComponentComponent ],
      imports:[
        FormsModule, 
        ReactiveFormsModule,
        FormsModule,
        NgMarqueeModule,
        RouterTestingModule,
        HttpClientTestingModule
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CarousalSearchComponentComponent);
    component = fixture.componentInstance;
    var data=[{
      'purpose':'Rent',
      'city':'bangalore',
      'search':'jayanagar',
      'category':'PG'
      }];

   
    fixture.detectChanges();
    component.rent();
    component.buy();
    component.book();
    component.search(data);
    expect(component).toBeTruthy();
  });

});
