import { TestBed } from '@angular/core/testing';

import { CodaAPIService } from './coda-api.service';

describe('CodaAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodaAPIService = TestBed.get(CodaAPIService);
    expect(service).toBeTruthy();
  });
});
