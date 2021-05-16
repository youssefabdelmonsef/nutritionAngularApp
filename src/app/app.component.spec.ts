import { LANGUAGES, STORAGE } from 'src/constants/constats';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let mockTranslateService;

  beforeEach(() => {

    mockTranslateService = jasmine.createSpyObj('mockTranslateService', ['setDefaultLang', 'use']);

    component = new AppComponent(
        mockTranslateService
    );

  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    // arrange
    localStorage.setItem(STORAGE.LANGUAGE, LANGUAGES.ENGLISH.ID);
    spyOn(localStorage, 'getItem').and.callThrough();
    // act
    component.ngOnInit();
    // assert
    expect(localStorage.getItem).toHaveBeenCalledWith(STORAGE.LANGUAGE);
    expect(mockTranslateService.setDefaultLang).toHaveBeenCalledWith(LANGUAGES.ENGLISH.ID);
    expect(mockTranslateService.use).toHaveBeenCalledWith(LANGUAGES.ENGLISH.ID);
  });


});