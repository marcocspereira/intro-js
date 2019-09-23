import { HeroService } from "./../heroes/hero.service";
import { Component, OnInit } from "@angular/core";
import { Hero } from "../classes/hero";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private _heroService: HeroService) {}

  async ngOnInit() {
    await this.getHeroes();
  }

  async getHeroes() {
    this.heroes = await this._heroService.getHeroes();
  }
}
