import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  template: `
    <h2>Source code version</h2>
    <button (click)="newMinor()">New minor version</button>
    <button (click)="newMajor()">New major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `,
  styles: []
})
export class VersionParentComponent implements OnInit {

  constructor() {
  }

  major: number = 1;
  minor: number = 23;

  ngOnInit() {
  }

  newMinor() {
    this.minor ++;
  }

  newMajor() {
    this.major ++;
    this.minor = 0;
  }

}
