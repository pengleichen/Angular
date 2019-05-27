import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentVcComponent } from './countdown-parent-vc.component';

describe('CountdownParentVcComponent', () => {
  let component: CountdownParentVcComponent;
  let fixture: ComponentFixture<CountdownParentVcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownParentVcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownParentVcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
