import { TestBed } from '@angular/core/testing';

import { DishesStateService } from './dishes-state.service';

describe('DishesStateService', () => {
  let service: DishesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
