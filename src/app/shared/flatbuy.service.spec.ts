import { TestBed, inject } from '@angular/core/testing';

import { FlatbuyService } from './flatbuy.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FlatDetails } from "src/app/flatdetails";

describe('FlatbuyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: FlatbuyService = TestBed.get(FlatbuyService);
    expect(service).toBeTruthy();
  });
  it('should have buyflat function',
inject([FlatbuyService],(service:FlatbuyService)=>
{
  expect(service.buyflat).toBeTruthy();
}));
});