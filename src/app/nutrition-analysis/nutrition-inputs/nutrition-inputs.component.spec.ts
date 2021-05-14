import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionInputsComponent } from './nutrition-inputs.component';

describe('NutritionInputsComponent', () => {
  let component: NutritionInputsComponent;
  let fixture: ComponentFixture<NutritionInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
