import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/constants/routes.constant';
import { NutritionAnalysisService } from '../nutrition-analysis.service';

@Component({
  selector: 'nutrition-data',
  templateUrl: './nutrition-data.component.html',
  styleUrls: ['./nutrition-data.component.scss']
})
export class NutritionDataComponent implements OnInit {

  showTotalNutrition: boolean = false;

  constructor(
    public nutritionAnalysisService: NutritionAnalysisService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!this.nutritionAnalysisService.ingredientsResponse) {
      this.router.navigate([ROUTES.NUTRITION_ANALYSIS.NUTRITION_ANALYSIS_ROOT+ROUTES.NUTRITION_ANALYSIS.NUTRITION_INPUTS]);
    }
  }

  toggleTotalNutritions() {
    this.showTotalNutrition = !this.showTotalNutrition;
  }

  formatQuantity (quantity) {
    return Number(quantity).toFixed(2) || 0;
  }
}
