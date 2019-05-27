import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-build-profile-editor',
  templateUrl: './form-build-profile-editor.component.html',
  styleUrls: ['./form-build-profile-editor.component.styl']
})
export class FormBuildProfileEditorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray
  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value)
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    })
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
