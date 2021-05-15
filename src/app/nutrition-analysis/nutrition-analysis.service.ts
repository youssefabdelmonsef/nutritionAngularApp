import { Injectable } from '@angular/core';

@Injectable()
export class NutritionAnalysisService {

  ingredientsResponse: {
    ingredientsData: [],
    totalNutritions: {}
  };

  constructor(
  ) { }

}
