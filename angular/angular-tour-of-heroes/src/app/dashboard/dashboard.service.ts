import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from 'selenium-webdriver/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _apiUrl = `${environment.apiUrl}/dashboard`;

  constructor(private _apiService: ApiService) {}

  async getNrOfFightsByArenas() {
    const url = `${this._apiUrl}/nr_of_fights_by_arenas`;
    const result = await this._apiService.get(url);
    return await result.body;
  }

  async getMostVictoriousFighter() {
    const url = `${this._apiUrl}/most_victorious`;
    const result = await this._apiService.get(url);
    return await result.body;
  }

  async getFighterWithMoreLosses() {
    const url = `${this._apiUrl}/fihter_with_more_losses`;
    const result = await this._apiService.get(url);
    return await result.body;
  }

  async getMostChosenWeapon() {
    const url = `${this._apiUrl}/most_chosen_weapon`;
    const result = await this._apiService.get(url);
    return await result.body;
  }
}
