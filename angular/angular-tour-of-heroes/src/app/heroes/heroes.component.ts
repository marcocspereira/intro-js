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

  async add(name: string, lifeStr: string, strengthStr: string) {
    if (!name || !lifeStr || !strengthStr) {
      return;
    }
    name = name.trim();
    const life = +lifeStr;
    const strength = +strengthStr;
    const hero = await this._heroService.addHero({
      name,
      life,
      strength
    } as Hero);
    this.heroes.push(hero);
  }

  async delete(hero: Hero): Promise<void> {
    this.heroes = this.heroes.filter(h => h !== hero);
    this._heroService.deleteHero(hero);
  }
}
