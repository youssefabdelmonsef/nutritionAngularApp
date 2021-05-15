import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'src/constants/routes.constant';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  ROUTES = ROUTES;
  
  constructor() { }

  ngOnInit(): void {
  }

  navigate(url) {
    let win = window.open(url, '_blank');
    win.focus();
  }

}
