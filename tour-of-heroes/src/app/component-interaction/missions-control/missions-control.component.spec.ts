import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsControlComponent } from './missions-control.component';

describe('MissionsControlComponent', () => {
  let component: MissionsControlComponent;
  let fixture: ComponentFixture<MissionsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
