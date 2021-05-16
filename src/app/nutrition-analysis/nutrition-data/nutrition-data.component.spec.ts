import { ROUTES } from 'src/constants/routes.constant';
import { NutritionDataComponent } from './nutrition-data.component';

describe('NutritionDataComponent', () => {

  let component: NutritionDataComponent;
  let mockNutritionAnalysisService;
  let mockRouter;

  beforeEach(() => {

    mockNutritionAnalysisService = jasmine.createSpyObj('mockNutritionAnalysisService', ['ingredientsResponse']);
    mockRouter = jasmine.createSpyObj('mockRouter', ['navigate']);

    component = new NutritionDataComponent(
      mockNutritionAnalysisService,
      mockRouter
    );
  });

  it('should create the NutritionDataComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    // arrange
    mockNutritionAnalysisService.ingredientsResponse = null;
    // act
    component.ngOnInit();
    // assert
    expect(mockRouter.navigate).toHaveBeenCalledWith([ROUTES.NUTRITION_ANALYSIS.NUTRITION_ANALYSIS_ROOT+ROUTES.NUTRITION_ANALYSIS.NUTRITION_INPUTS]);
  });

  it('should call toggleTotalNutritions', () => {
    // arrange
    component.showTotalNutrition = true;
    // act
    component.toggleTotalNutritions();
    // assert
    expect(component.showTotalNutrition).toEqual(false);
  });

});