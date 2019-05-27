import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: [ './pipe-demo.component.styl' ]
})
export class PipeDemoComponent implements OnInit {

  constructor() {
  }

  today: Date = new Date();

  birthday = new Date(1988, 3, 14);
  toggle = true;

  power = 2;
  factor = 0;

  ngOnInit() {
  }

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

}
