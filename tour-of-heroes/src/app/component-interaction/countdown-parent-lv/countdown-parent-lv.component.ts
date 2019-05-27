import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-parent-lv',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button (click)="timer.start()">Start</button>
    <button (click)="timer.stop()">Stop</button>
    <div class="seconds">{{timer.seconds}}</div>
    <app-countdown-timer #timer></app-countdown-timer>
  `,
  styles: [`
    .seconds {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      color: red;
      background-color: black;
      font-size:80px;
    }
  `]
})
export class CountdownParentLvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
