import { TestBed } from '@angular/core/testing';

import { FinancialRatiosService } from './financial-ratios.service';

describe('FinancialRatiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancialRatiosService = TestBed.get(FinancialRatiosService);
    expect(service).toBeTruthy();
  });
});
