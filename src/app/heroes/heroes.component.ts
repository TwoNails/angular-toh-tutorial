import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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

  heroes = HEROES;      // is equal to precisely the content of
  selectedHero: Hero;   // is of type H, content undifined yet

  constructor() { }

  ngOnInit() {
  }

  // other methods
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    //alert(this.selectedHero.name);
  }

}