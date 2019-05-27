import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.styl']
})
export class DirectiveDemoComponent implements OnInit {

  constructor() { }

  color: string;

  condition: boolean = false;

  ngOnInit() {
  }

}
