import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-favorite-color',
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor"> {{favoriteColor}}
  `,
  styles: []
})
export class TemplateFavoriteColorComponent implements OnInit {

  constructor() { }

  favoriteColor = 'Blue';

  ngOnInit() {
  }

}
