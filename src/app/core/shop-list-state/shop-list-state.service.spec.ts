import { TestBed } from '@angular/core/testing';

import { ShopListStateService } from './shop-list-state.service';

describe('ShopListStateService', () => {
  let service: ShopListStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopListStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
