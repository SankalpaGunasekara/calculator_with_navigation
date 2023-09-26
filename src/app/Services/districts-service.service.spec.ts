import { TestBed } from '@angular/core/testing';

import { DistrictsServiceService } from './districts-service.service';

describe('DistrictsServiceService', () => {
  let service: DistrictsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrictsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
