import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ENDPOINTS } from 'src/constants/api-endpoints';
import { ROUTES } from 'src/constants/routes.constant';
import { PORTS } from 'src/environments/environment';
import { CustomHttpService } from 'src/shared/services/custom-http.service';

@Component({
  selector: 'app-nutrition-inputs',
  templateUrl: './nutrition-inputs.component.html',
  styleUrls: ['./nutrition-inputs.component.scss']
})
export class NutritionInputsComponent implements OnInit {

  ingredients = [{
    quantity: '',
    unit: '',
    food:''
  }];

  constructor(
    private customHttpService: CustomHttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  removeIngredient(index) {
    console.log(index);
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

    const url = ENDPOINTS.getNutritionData;
    let data = {
      ingredients: this.ingredients,
    };

    this.customHttpService.postHttp(url, data).subscribe((response)=> {
      this.router.navigate([ROUTES.NUTRITION_ANALYSIS.NUTRITION_ANALYSIS_ROOT+ROUTES.NUTRITION_ANALYSIS.NUTRITION_DATA]);
      console.log(response);
    }, (error)=> {
      console.log(error);
    });
  }

}
