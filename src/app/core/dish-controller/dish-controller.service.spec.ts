import { TestBed } from '@angular/core/testing';

import { DishControllerService } from './dish-controller.service';

describe('DishControllerService', () => {
  let service: DishControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
