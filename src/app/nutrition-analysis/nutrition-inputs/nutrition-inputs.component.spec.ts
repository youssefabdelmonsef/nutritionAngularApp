import { of, throwError } from 'rxjs';
import { ROUTES } from 'src/constants/routes.constant';
import { NutritionInputsComponent } from './nutrition-inputs.component';

describe('NutritionInputsComponent', () => {

  let component: NutritionInputsComponent;
  let mockCustomHttpService;
  let mockRouter;
  let mockNutritionAnalysisService;

  beforeEach(() => {

    mockCustomHttpService = jasmine.createSpyObj('mockCustomHttpService', ['postHttp']);
    mockRouter = jasmine.createSpyObj('mockRouter', ['navigate']);
    mockNutritionAnalysisService = jasmine.createSpyObj('mockNutritionAnalysisService', ['ingredientsResponse']);

    component = new NutritionInputsComponent(
      mockCustomHttpService,
      mockRouter,
      mockNutritionAnalysisService
    );
  });

  it('should create the NutritionInputsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call removeIngredient', () => {
    // arrange
    let index = 1;
    component.ingredients = [{
      quantity: '1',
      unit: '1',
      food:'1'
    },
    {
      quantity: '2',
      unit: '2',
      food:'2'
    }];
    // act
    component.removeIngredient(index);
    // assert
    expect(component.ingredients).toEqual([{
      quantity: '1',
      unit: '1',
      food:'1'
    }]);
  });

  it('should call addIngredient', () => {
    // arrange
    component.ingredients = [{
      quantity: '1',
      unit: '1',
      food:'1'
    },
    {
      quantity: '2',
      unit: '2',
      food:'2'
    }];
    // act
    component.addIngredient();
    // assert
    expect(component.ingredients).toEqual([{
      quantity: '1',
      unit: '1',
      food:'1'
    },
    {
      quantity: '2',
      unit: '2',
      food:'2'
    },
    {
      quantity: '',
      unit: '',
      food:''
    }]);
  });

  it('should call submit and success', () => {
    // arrange
    mockCustomHttpService.postHttp.and.returnValue(of({
      response: 'response'
    }));
    // act
    component.submit();
    // assert
    expect(mockNutritionAnalysisService.ingredientsResponse).toEqual({
      response: 'response'
    });
    expect(component.showSpinner).toEqual(false);
    expect(mockRouter.navigate).toHaveBeenCalledWith([ROUTES.NUTRITION_ANALYSIS.NUTRITION_ANALYSIS_ROOT+ROUTES.NUTRITION_ANALYSIS.NUTRITION_DATA]);
  });

  it('should call submit and fail', () => {
    // arrange
    mockCustomHttpService.postHttp.and.returnValue(throwError({
      error: 'error'
    }));
    // act
    component.submit();
    // assert
    expect(component.showSpinner).toEqual(false);
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });


});