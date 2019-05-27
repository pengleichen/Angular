import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: `
    <h3>"{{name}}"</h3>
  `,
  styles: []
})
export class NameChildComponent implements OnInit {

  constructor() {
  }

  private _name: string = '';

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name() {
    return this._name;
  }

  ngOnInit() {
  }

}
