import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NutritionDataComponent } from './nutrition-data/nutrition-data.component';
import { NutritionInputsComponent } from './nutrition-inputs/nutrition-inputs.component';

const routes: Routes = [
  {
    path: '',
    component: NutritionInputsComponent
  },
  {
    path: 'nutrition-inputs',
    component: NutritionInputsComponent
  },
  {
    path: 'nutrition-data',
    component: NutritionDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionanalysisRoutingModule { }
