import { TestBed } from '@angular/core/testing';

import { ApiSilpoService } from './api-silpo.service';

describe('ApiSilpoService', () => {
  let service: ApiSilpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSilpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
