import { TestBed } from '@angular/core/testing';

import { PropertiesContractService } from './properties-contract.service';

describe('PropertiesContractService', () => {
  let service: PropertiesContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
