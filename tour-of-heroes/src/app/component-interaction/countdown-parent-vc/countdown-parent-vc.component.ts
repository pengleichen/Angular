import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from "../countdown-timer/countdown-timer.component";

@Component({
  selector: 'app-countdown-parent-vc',
  template: `
    <h3>Countdown to Liftoff (via ViewChild)</h3>
    <button (click)="start()">Start</button>
    <button (click)="stop()">Stop</button>
    <div class="seconds">{{seconds()}}</div>
    <app-countdown-timer></app-countdown-timer>
  `,
  styles: [ `
    .seconds {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      color: red;
      background-color: black;
      font-size: 80px;
    }
  ` ]
})
export class CountdownParentVcComponent implements OnInit {

  constructor() {
  }

  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  ngOnInit() {
  }

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0)
  }

  start() {
    this.timerComponent.start();
  }
  
  stop() {
    this.timerComponent.stop();
  }
  
}
