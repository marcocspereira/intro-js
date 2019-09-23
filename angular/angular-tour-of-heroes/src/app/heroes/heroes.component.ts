import { HeroService } from "./hero.service";
import { Hero } from "../classes/hero";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes = [];

  constructor(private _heroService: HeroService) {}

  async ngOnInit() {
    await this.getHeroes();
  }

  async getHeroes() {
    this.heroes = await this._heroService.getHeroes();
  }

  async add(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    const hero = await this._heroService.addHero({ name } as Hero);
    this.heroes.push(hero);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this._heroService.deleteHero(hero).subscribe();
  }
}
