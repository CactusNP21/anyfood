import { TestBed } from '@angular/core/testing';

import { DishStateResolver } from './dish-state.resolver';

describe('DishStateResolver', () => {
  let resolver: DishStateResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DishStateResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
