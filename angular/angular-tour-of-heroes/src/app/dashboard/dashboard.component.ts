import { ArenaFight } from './../shared/classes/arena-fight';
import { DashboardService } from './dashboard.service';
import { HeroService } from './../heroes/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  arenasFighter: ArenaFight[] = [];

  constructor(
    private _heroService: HeroService,
    private _dashboardService: DashboardService
  ) {}

  async ngOnInit() {
    await this.getHeroes();
    await this.getNrOfFightsByArenas();
  }

  async getHeroes() {
    this.heroes = await this._heroService.getHeroes();
  }

  async getNrOfFightsByArenas() {
    const result = await this._dashboardService.getNrOfFightsByArenas();
    for (let key in result) {
      this.arenasFighter.push({ name: key, quantity: result[key] });
    }
  }
}
