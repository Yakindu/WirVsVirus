import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `<div class="landing">
  <app-nav-bar></app-nav-bar>
  <app-portfolio></app-portfolio>
  <app-footer></app-footer>
  </div>`
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
