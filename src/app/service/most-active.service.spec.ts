import { TestBed } from '@angular/core/testing';

import { MostActiveService } from './most-active.service';

describe('MostActiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostActiveService = TestBed.get(MostActiveService);
    expect(service).toBeTruthy();
  });
});
