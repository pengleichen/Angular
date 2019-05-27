import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-model-binding-demo',
  templateUrl: './model-binding-demo.component.html',
  styleUrls: ['./model-binding-demo.component.styl']
})
export class ModelBindingDemoComponent implements OnInit {

  constructor() { }

  firstName: string = 'Hercules';

  ngOnInit() {
  }

  setUpperCaseName(event: string): void {
    this.firstName = event.toUpperCase();
  }

}
