import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('AuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: AuthServiceService = TestBed.get(AuthServiceService);
    expect(service).toBeTruthy();
  });
});
