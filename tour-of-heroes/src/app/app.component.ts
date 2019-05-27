import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.styl' ]
})
export class AppComponent {
  title = 'Tour of Heroes';
  fontSizePx: number | string = 20;
}
