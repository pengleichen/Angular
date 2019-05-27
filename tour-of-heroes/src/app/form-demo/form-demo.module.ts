import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFavoriteColorComponent } from './reactive-favorite-color.component';
import { FormDemoComponent } from './form-demo.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateFavoriteColorComponent } from './template-favorite-color.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormBuildProfileEditorComponent } from './form-build-profile-editor/form-build-profile-editor.component';

@NgModule({
  declarations: [ReactiveFavoriteColorComponent, FormDemoComponent, TemplateFavoriteColorComponent, NameEditorComponent, ProfileEditorComponent, FormBuildProfileEditorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class FormDemoModule { }
