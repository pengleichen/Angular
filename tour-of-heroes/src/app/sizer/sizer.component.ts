import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  template: `
    <br><br>
    <div>
      <button (click)="dec()" [disabled]="size == min()">-</button>
      <label [style.font-size.px]="size">FontSize: {{size}}px</label>
      <button (click)="inc()" [disabled]="size == max()">+</button>
    </div>
  `
})
export class SizerComponent implements OnInit {

  constructor() {
  }

  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  ngOnInit() {
    this.resize(0);
  }

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  min(): number {
    return 12;
  }

  max(): number {
    return 40;
  }

  private resize(delta: number): void {
    this.size = Math.min(this.max(), Math.max(this.min(), +(this.size || 0) + delta));
    this.sizeChange.emit(this.size);
  }
}
