import { TestBed, inject } from '@angular/core/testing';

import { RentpgService } from './rentpg.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('RentpgService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: RentpgService = TestBed.get(RentpgService);
    expect(service).toBeTruthy();
  });
  it('should have buypg function',
  inject([RentpgService],(service : RentpgService)=>
{
  expect(service.buypg).toBeTruthy();
})
);
});
