import { Injectable } from '@angular/core';
/* injectable allows us to do dependency injections
aka putting it into a component constructor to 
use it inside that component */
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


/* the open source library rxjs offers solutions that Angular uses. It aims at facilitating asynchronous requests */




/* we use here the Injectable Decorator we imported above. root will 'provide' a decorator, which means
creating one single and shared instance of it that
it will provide on demand to the components that need it*/
@Injectable(
   {providedIn: 'root',}
)
export class HeroService {

  constructor() { }

  // get
  getHeroes(): Observable<Hero[]> {
    // return HEROES
    return of(HEROES);
  }

}