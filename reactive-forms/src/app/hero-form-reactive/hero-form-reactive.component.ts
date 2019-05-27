import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Hero } from "../hero";
import { forbiddenNameValidator } from '../forbidden-name.directive'
import { identityRevealedValidator } from "../identity-revealed.directive";

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: [ './hero-form-reactive.component.less' ]
})
export class HeroFormReactiveComponent implements OnInit {

  constructor() {
  }

  heroForm: FormGroup;
  submitted = false;
  powers = [ 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer' ];
  hero: Hero = { id: 24, name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[ 0 ] };

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/^bob$/i)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    }, {
      validators: identityRevealedValidator
    })
  }

  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }

  get diagnostic() {
    return JSON.stringify(this.heroForm.value);
  }

  onSubmit() {

  }
}
