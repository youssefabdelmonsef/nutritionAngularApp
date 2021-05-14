import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES, STORAGE } from 'src/constants/constats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'nutritionAngularApp';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    let currentLanguage = localStorage.getItem(STORAGE.LANGUAGE) || LANGUAGES.ENGLISH.ID;
    this.translateService.setDefaultLang(currentLanguage);
    this.translateService.use(currentLanguage);
    localStorage.setItem(STORAGE.LANGUAGE, currentLanguage);
  }
}
