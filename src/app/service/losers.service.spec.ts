import { TestBed } from '@angular/core/testing';

import { LosersService } from './losers.service';

describe('LosersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LosersService = TestBed.get(LosersService);
    expect(service).toBeTruthy();
  });
});
