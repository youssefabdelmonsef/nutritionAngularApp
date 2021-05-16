import { NutritionAnalysisService } from './nutrition-analysis.service';

describe('NutritionAnalysisService', () => {

  let service: NutritionAnalysisService;

  beforeEach(() => {


    service = new NutritionAnalysisService();

  });

  it('should create the NutritionAnalysisService', () => {
    expect(service).toBeTruthy();
  });

});