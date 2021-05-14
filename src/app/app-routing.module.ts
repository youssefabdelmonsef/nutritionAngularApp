import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsModule } from './about-us/about-us.module';
import { NutritionAnalysisModule } from './nutrition-analysis/nutrition-analysis.module';

const routes: Routes = [
  {
    path: '', redirectTo: '/nutrition-analysis', pathMatch: 'full'
  },
  {
    path: 'nutrition-analysis',
    loadChildren: () => NutritionAnalysisModule
  },
  {
    path: 'about-us',
    loadChildren: () => AboutUsModule
  },
  {
    path: '**',
    loadChildren: () => NutritionAnalysisModule
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
