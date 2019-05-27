import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)" [disabled]="didVote">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `,
  styles: []
})
export class VoterComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  ngOnInit() {
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
