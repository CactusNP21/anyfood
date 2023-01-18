import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishBriefComponent } from './dish-brief.component';

describe('DishBriefComponent', () => {
  let component: DishBriefComponent;
  let fixture: ComponentFixture<DishBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishBriefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
