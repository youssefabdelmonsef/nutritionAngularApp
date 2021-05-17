import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ENDPOINTS } from 'src/constants/api-endpoints';
import { IMAGES } from 'src/constants/images';
import { ROUTES } from 'src/constants/routes.constant';
import { CustomHttpService } from 'src/shared/services/custom-http.service';
import { NutritionAnalysisService } from '../nutrition-analysis.service';

@Component({
  selector: 'app-nutrition-inputs',
  templateUrl: './nutrition-inputs.component.html',
  styleUrls: ['./nutrition-inputs.component.scss']
})
export class NutritionInputsComponent implements OnInit {

  IMAGES = IMAGES;
  showSpinner: boolean = false;

  ingredients = [{
    quantity: '',
    unit: '',
    food:''
  }];

  constructor(
    private customHttpService: CustomHttpService,
    private router: Router,
    private nutritionAnalysisService: NutritionAnalysisService
  ) { }

  ngOnInit(): void {
  }

  removeIngredient(index) {
    this.ingredients.splice(index, 1);
  }

  addIngredient() {
    this.ingredients.push({
      quantity: '',
      unit: '',
      food:''
    });
  }

  submit() {
    this.showSpinner = true;
    const url = ENDPOINTS.getNutritionData;
    let data = {
      ingredients: this.ingredients,
    };

    this.customHttpService.postHttp(url, data).subscribe((response: {ingredientsData: [], totalNutritions: any})=> {
      this.nutritionAnalysisService.ingredientsResponse = response;
      this.showSpinner = false;
      this.router.navigate([ROUTES.NUTRITION_ANALYSIS.NUTRITION_ANALYSIS_ROOT+ROUTES.NUTRITION_ANALYSIS.NUTRITION_DATA]);
    }, (error)=> {
      this.showSpinner = false;
      console.log(error);
    });
  }

  getSubmitBtnStatus() {
    let disabled = true;
    this.ingredients.forEach((ing)=>{
      if(ing.quantity && ing.unit && ing.food) {
        disabled = false;
      }
    })
    return disabled;
  }

}
