import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  animations : [
    trigger('showPortfolio', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(7%)'
      })),
      transition('hide => show', animate('1000ms ease'))
    ])
  ]
})
export class SeriesComponent implements OnInit {

  show = false;


  constructor() { }

  ngOnInit() {
    this.startPortfolioAnimation();
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async startPortfolioAnimation() {

    await this.delay(300);
    this.show = !this.show;
  }

}
