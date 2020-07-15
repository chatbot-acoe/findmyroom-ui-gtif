import { TestBed } from '@angular/core/testing';

import { AdminDashboardServiceService } from './admin-dashboard-service.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe('AdminDashboardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: AdminDashboardServiceService = TestBed.get(AdminDashboardServiceService);
    expect(service).toBeTruthy();
  });
});
