import { TestBed } from '@angular/core/testing';

import { CheckListContractService } from './check-list-contract.service';

describe('CheckListContractService', () => {
  let service: CheckListContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckListContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
