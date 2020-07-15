import { TestBed, inject } from '@angular/core/testing';

import { ForgotserviceService } from './forgotservice.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('ForgotserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ForgotserviceService = TestBed.get(ForgotserviceService);
    expect(service).toBeTruthy();
  });
  it('should have getuser',
  inject([ForgotserviceService],(service:ForgotserviceService)=>
{
  expect(service.sendmail).toBeTruthy();
})
);
});
