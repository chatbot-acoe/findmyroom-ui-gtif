import { TestBed, inject } from '@angular/core/testing';

import { UserDashboardServiceService } from './user-dashboard-service.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('UserDashboardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: UserDashboardServiceService = TestBed.get(UserDashboardServiceService);
    expect(service).toBeTruthy();
  });
  it('should have getuser',
inject([UserDashboardServiceService],(service:UserDashboardServiceService)=>
{
  expect(service.getUserDetails).toBeTruthy();
}));
it('should have getuser',
inject([UserDashboardServiceService],(service:UserDashboardServiceService)=>
{
  expect(service.getUserDetails1).toBeTruthy();
}));
it('should have getuser',
inject([UserDashboardServiceService],(service:UserDashboardServiceService)=>
{
  expect(service.sendmail).toBeTruthy();
}));
it('should have getuser',
inject([UserDashboardServiceService],(service:UserDashboardServiceService)=>
{
  expect(service.changepasswordService).toBeTruthy();
}));
it('should have getuser',
inject([UserDashboardServiceService],(service:UserDashboardServiceService)=>
{
  expect(service.editprofileService).toBeTruthy();
}));
it('should have getuser',
inject([UserDashboardServiceService],(service:UserDashboardServiceService)=>
{
  expect(service.getflatbuydetails).toBeTruthy();
}));
it('should have getuser',
inject([UserDashboardServiceService],(service:UserDashboardServiceService)=>
{
  expect(service.getpgbuydetails).toBeTruthy();
}));
});
