import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedPropertiesComponentComponent } from './recomended-properties-component.component';
import { NgMarqueeModule } from 'ng-marquee';

describe('RecomendedPropertiesComponentComponent', () => {
  let component: RecomendedPropertiesComponentComponent;
  let fixture: ComponentFixture<RecomendedPropertiesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendedPropertiesComponentComponent ],
      imports:[
        NgMarqueeModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendedPropertiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
