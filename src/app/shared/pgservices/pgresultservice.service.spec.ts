import { TestBed, inject } from '@angular/core/testing';

import { PgresultserviceService } from './pgresultservice.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe('PgresultserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: PgresultserviceService = TestBed.get(PgresultserviceService);
    expect(service).toBeTruthy();
  });
  it('should have getuser',
  inject([PgresultserviceService],(service:PgresultserviceService)=>
{
  expect(service.addPgs).toBeTruthy();
}));
it('should have getuser',
inject([PgresultserviceService],(service:PgresultserviceService)=>
{
expect(service.deletePgs).toBeTruthy();
}));
it('should have getuser',
inject([PgresultserviceService],(service:PgresultserviceService)=>
{
expect(service.getpgbyid).toBeTruthy();
}));
it('should have getuser',
inject([PgresultserviceService],(service:PgresultserviceService)=>
{
expect(service.getpgdetails).toBeTruthy();
}));
it('should have getuser',
inject([PgresultserviceService],(service:PgresultserviceService)=>
{
expect(service.getPgs).toBeTruthy();
}));
it('should have getuser',
inject([PgresultserviceService],(service:PgresultserviceService)=>
{
expect(service.updatePgs).toBeTruthy();
}));
});
