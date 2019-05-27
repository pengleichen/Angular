import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <app-voter *ngFor="let voter of voters"
               [name]="voter"
               (voted)="onVoted($event)"></app-voter>
  `,
  styles: []
})
export class VoteTakerComponent implements OnInit {

  constructor() {
  }

  agreed: number = 0;
  disagreed: number = 0;
  voters: string[] = [ 'Mr. IQ', 'Ms. Universe', 'Bombasto' ];

  ngOnInit() {
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
