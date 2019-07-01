import { TestBed } from '@angular/core/testing';

import { MajorsIndexesService } from './majors-indexes.service';

describe('MajorsIndexesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MajorsIndexesService = TestBed.get(MajorsIndexesService);
    expect(service).toBeTruthy();
  });
});
