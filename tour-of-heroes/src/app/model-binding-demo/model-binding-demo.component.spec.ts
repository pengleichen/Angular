import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBindingDemoComponent } from './model-binding-demo.component';

describe('ModelBindingDemoComponent', () => {
  let component: ModelBindingDemoComponent;
  let fixture: ComponentFixture<ModelBindingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBindingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
