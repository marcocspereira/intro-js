import { HEROES } from "./../mocks/mock-heroes";
import { Hero } from "./../classes/hero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor() {}

  getHeroes() {
    return HEROES;
  }
}
