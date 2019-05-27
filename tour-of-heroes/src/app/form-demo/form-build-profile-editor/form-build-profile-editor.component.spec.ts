import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuildProfileEditorComponent } from './form-build-profile-editor.component';

describe('FormBuildProfileEditorComponent', () => {
  let component: FormBuildProfileEditorComponent;
  let fixture: ComponentFixture<FormBuildProfileEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuildProfileEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuildProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
