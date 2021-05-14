import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionDataComponent } from './nutrition-data.component';

describe('NutritionDataComponent', () => {
  let component: NutritionDataComponent;
  let fixture: ComponentFixture<NutritionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
