import { TestBed } from '@angular/core/testing';

import { GainersService } from './gainers.service';

describe('GainersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GainersService = TestBed.get(GainersService);
    expect(service).toBeTruthy();
  });
});
