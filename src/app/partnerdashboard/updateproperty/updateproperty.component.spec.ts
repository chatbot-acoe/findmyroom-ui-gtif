import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepropertyComponent } from './updateproperty.component';
import { TabViewModule } from 'primeng/tabview';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";

describe('UpdatepropertyComponent', () => {
  let component: UpdatepropertyComponent;
  let fixture: ComponentFixture<UpdatepropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepropertyComponent],
      imports: [
        TabViewModule,
        ReactiveFormsModule,
        FormsModule,
        NgxSpinnerModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        ResultserviceService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create', () => {
    fixture = TestBed.createComponent(UpdatepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let event;
    let event1;
    let event2;
    let event3;
    let event4;
    component.selectFile(event);
    component.selectFile2(event1);
    component.selectFile3(event2);
    component.selectFile4(event3);
    component.selectFile5(event4);
    component.submit();
    expect(component).toBeTruthy();
  });
});
