import { TestBed } from '@angular/core/testing';

import { DonorserviceService } from './donorservice.service';

describe('DonorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonorserviceService = TestBed.get(DonorserviceService);
    expect(service).toBeTruthy();
  });
});
