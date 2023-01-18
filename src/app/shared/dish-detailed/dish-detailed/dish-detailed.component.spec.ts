import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDetailedComponent } from './dish-detailed.component';

describe('DishDetailedComponent', () => {
  let component: DishDetailedComponent;
  let fixture: ComponentFixture<DishDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
