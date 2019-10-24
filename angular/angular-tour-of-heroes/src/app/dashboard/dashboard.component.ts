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
  arenasFighter: any;

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
    this.arenasFighter = await this._dashboardService.getNrOfFightsByArenas();
  }
}
