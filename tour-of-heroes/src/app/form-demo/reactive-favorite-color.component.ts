import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl"> {{favoriteColorControl.value}}
  `,
  styles: []
})
export class ReactiveFavoriteColorComponent implements OnInit {

  constructor() { }

  favoriteColorControl = new FormControl('');

  ngOnInit() {
    this.favoriteColorControl.setValue('Red');
  }

}
