import { TestBed, inject } from '@angular/core/testing';

import { ResultserviceService } from './resultservice.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe('ResultserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ResultserviceService = TestBed.get(ResultserviceService);
    expect(service).toBeTruthy();
  });
  it('should have getuser',
  inject([ResultserviceService],(service:ResultserviceService)=>
{
  expect(service.addFlats).toBeTruthy();
}));
it('should have getuser',
inject([ResultserviceService],(service:ResultserviceService)=>
{
expect(service.deleteFlats).toBeTruthy();
}));
it('should have getuser',
inject([ResultserviceService],(service:ResultserviceService)=>
{
expect(service.getFlatById).toBeTruthy();
}));
it('should have getuser',
inject([ResultserviceService],(service:ResultserviceService)=>
{
expect(service.getFlatDetails).toBeTruthy();
}));
it('should have getuser',
inject([ResultserviceService],(service:ResultserviceService)=>
{
expect(service.getPartnerProperties).toBeTruthy();
}));
it('should have getuser',
inject([ResultserviceService],(service:ResultserviceService)=>
{
expect(service.updateFlats).toBeTruthy();
}));
});
