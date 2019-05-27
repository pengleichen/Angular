import { Directive, forwardRef, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HeroService } from "./hero.service";

@Injectable({
  providedIn: 'root'
})
export class UniqueAlterEgoValidator implements AsyncValidator {
  constructor(private heroService: HeroService) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.heroService.isAlterEgoTaken(control.value).pipe(
      map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
      catchError(() => null)
    );
  }

}

@Directive({
  selector: '[appUniqueAlterEgo]',
  providers: [ {
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UniqueAlterEgoValidator),
    multi: true
  } ]
})
export class UniqueAlterEgoValidatorDirective {

  constructor(private validator: UniqueAlterEgoValidator) {
  }

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }

}
