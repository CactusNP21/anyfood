import { TestBed } from '@angular/core/testing';

import { DishPreloadResolver } from './dish-preload.resolver';

describe('DishPreloadResolver', () => {
  let resolver: DishPreloadResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DishPreloadResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
