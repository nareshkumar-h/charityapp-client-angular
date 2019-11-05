import { TestBed } from '@angular/core/testing';

import { ViewRequestorVideoServiceService } from './view-requestor-video-service.service';

describe('ViewRequestorVideoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewRequestorVideoServiceService = TestBed.get(ViewRequestorVideoServiceService);
    expect(service).toBeTruthy();
  });
});
