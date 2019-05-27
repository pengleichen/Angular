import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
  selector: '[appIdentityRevealed]',
  providers: [ { provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true } ]
})
export class IdentityRevealedValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return identityRevealedValidator(control);
  }

}

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get('name');
  const alterEgo = control.get('alterEgo');
  return name && alterEgo && name.value === alterEgo.value ? {
    'identityRevealed': true
  } : null;
};
