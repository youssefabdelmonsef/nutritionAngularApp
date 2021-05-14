import { Component } from '@angular/core';
import { IMAGES } from '../../../constants/images';
import { Router } from '@angular/router';
import { ROUTES } from '../../../constants/routes.constant';
import { LANGUAGES, STORAGE } from 'src/constants/constats';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent {

  IMAGES = IMAGES;
  ROUTES =  ROUTES;

  constructor(
    private router: Router,
    private translateService: TranslateService
    ) { }

  // getActiveLink(url) {
  //   return this.router.url.includes(url.replace('#',''));
  // }

  navigate(url) {
    this.router.navigate([url])
  }

  changeLanguage() {
    let currentLang = localStorage.getItem(STORAGE.LANGUAGE);
    if(currentLang == LANGUAGES.ENGLISH.ID) {
      this.translateService.use(LANGUAGES.ARABIC.ID);
      localStorage.setItem(STORAGE.LANGUAGE, LANGUAGES.ARABIC.ID)
    }
    else {
      this.translateService.use(LANGUAGES.ENGLISH.ID);
      localStorage.setItem(STORAGE.LANGUAGE, LANGUAGES.ENGLISH.ID)
    }
  }

}