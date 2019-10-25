import { TestBed } from '@angular/core/testing';

import { DonorloginService } from './donorlogin.service';

describe('DonorloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonorloginService = TestBed.get(DonorloginService);
    expect(service).toBeTruthy();
  });
});
