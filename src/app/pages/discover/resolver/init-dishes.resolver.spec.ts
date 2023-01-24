import { TestBed } from '@angular/core/testing';

import { InitDishesResolver } from './init-dishes.resolver';

describe('InitDishesResolver', () => {
  let resolver: InitDishesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InitDishesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
