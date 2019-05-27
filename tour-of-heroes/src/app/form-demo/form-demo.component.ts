import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  template: `
    <app-reactive-favorite-color></app-reactive-favorite-color><br><br>
    <app-template-favorite-color></app-template-favorite-color><br><br>
    <app-name-editor></app-name-editor><br><br>
    <app-profile-editor></app-profile-editor><br><br>
    <app-form-build-profile-editor></app-form-build-profile-editor>
  `,
  styles: []
})
export class FormDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
