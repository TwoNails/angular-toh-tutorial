import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
/* import { HEROES } from '../mock-heroes';
We now get HEROES from the hero service*/
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /*
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };  //NO USE FOR THIS PART ANYMORE - SEE 'selectedHero' BELOW */ 

  //heroes = HEROES;       is equal to precisely the content of what's right of the equal side
  heroes: Hero[];   
  selectedHero: Hero;   // is of type H, content undifined yet

  constructor(
                private heroService: HeroService
              ) { }
// a good constructor shouldn't do anything other besides setting things up.

  ngOnInit() {
    this.getHeroes();
  }

  // indirect get
  getHeroes(): void {
    /* this.heroes = this.heroService.getHeroes();
    mock used as a simple var, sync */
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // mock properly simulating an async behavior
  }

  // other methods
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    //alert(this.selectedHero.name);
  }

}