import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentLvComponent } from './countdown-parent-lv.component';

describe('CountdownParentLvComponent', () => {
  let component: CountdownParentLvComponent;
  let fixture: ComponentFixture<CountdownParentLvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownParentLvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownParentLvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
