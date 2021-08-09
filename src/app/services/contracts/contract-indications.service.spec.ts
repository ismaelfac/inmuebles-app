import { TestBed } from '@angular/core/testing';

import { ContractIndicationsService } from './contract-indications.service';

describe('ContractIndicationsService', () => {
  let service: ContractIndicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractIndicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
