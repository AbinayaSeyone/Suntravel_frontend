import { TestBed } from '@angular/core/testing';

import { SearchContractService } from './search-contract.service';

describe('SearchContractService', () => {
  let service: SearchContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
