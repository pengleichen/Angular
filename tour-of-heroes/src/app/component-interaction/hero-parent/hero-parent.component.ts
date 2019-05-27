import { Component, OnInit } from '@angular/core';
import { Hero } from "../../hero";
import { HeroService } from "../../hero.service";

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor="let hero of heroes" 
                    [hero]="hero" 
                    [master]="master">
    </app-hero-child>
  `,
  styles: []
})
export class HeroParentComponent implements OnInit {

  constructor( private heroService: HeroService) { }

  heroes: Hero[] = [];
  master: string = "Master";

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
