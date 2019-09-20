import { HEROES } from "./../mocks/mock-heroes";
import { Hero } from "../classes/hero";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  heroes = [];
  selectedHero: Hero;

  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
