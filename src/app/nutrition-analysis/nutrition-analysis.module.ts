import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionanalysisRoutingModule } from './nutrition-analysis-routing.module';
import { NutritionInputsComponent } from './nutrition-inputs/nutrition-inputs.component';
import { NutritionDataComponent } from './nutrition-data/nutrition-data.component';
import { SharedModule } from 'src/shared/shared.module';
import { NutritionAnalysisService } from './nutrition-analysis.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NutritionInputsComponent,
    NutritionDataComponent
  ],
  imports: [
    CommonModule,
    NutritionanalysisRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NutritionAnalysisService
  ],
  entryComponents: [ // dialogs
  ]
})
export class NutritionAnalysisModule { }
