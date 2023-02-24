import { TestBed } from '@angular/core/testing';

import { NewDishStateService } from './new-dish-state.service';

describe('NewDishStateService', () => {
  let service: NewDishStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewDishStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
