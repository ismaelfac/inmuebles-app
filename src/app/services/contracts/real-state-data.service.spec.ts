import { TestBed } from '@angular/core/testing';

import { RealStateDataService } from './real-state-data.service';

describe('RealStateDataService', () => {
  let service: RealStateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealStateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
