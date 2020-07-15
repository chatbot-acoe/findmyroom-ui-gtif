import { TestBed } from '@angular/core/testing';

import { ProjectServiceService } from './project-service.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('ProjectServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ProjectServiceService = TestBed.get(ProjectServiceService);
    expect(service).toBeTruthy();
  });
});
