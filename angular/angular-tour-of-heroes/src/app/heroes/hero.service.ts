import { environment } from './../../environments/environment';
import { ApiService } from './../api.service';
import { MessageService } from './../messages/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from './../classes/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './../mocks/mock-heroes';
import { debug } from 'util';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _apiUrl = `${environment.apiUrl}/fighters`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private _http: HttpClient,
    private _apiService: ApiService,
    private _messageService: MessageService,
    private _snackBar: MatSnackBar
  ) {}

  async getHeroes(): Promise<Hero[]> {
    const url = `${this._apiUrl}`;
    this._messageService.add('HeroService: fetched heroes');
    // return of(HEROES); // old
    const heroes = await this._apiService.get(url);
    return await heroes.body;
  }

  async getHero(id: number): Promise<Hero> {
    const url = `${this._apiUrl}/${id}`;
    this._messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id)); // old
    const hero = await this._apiService.get(url);
    return await hero.body;
  }

  async updateHero(hero: Hero | number): Promise<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this._apiUrl}/fighters/${id}`;
    const updatedHero = await this._apiService.put(url, hero);
    return await updatedHero.body;
  }

  async addHero(hero: Hero): Promise<Hero> {
    const url = `${this._apiUrl}/fighters`;
    const createdHero = await this._apiService.post(url, hero);
    return await createdHero.body;
  }

  async deleteHero(hero: Hero | number): Promise<void> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this._apiUrl}/fighters/${id}`;
    const response = await this._apiService.delete(url);
    await console.log(response.status);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this._http.get<Hero[]>(`${this._apiUrl}/?name=${term}`).pipe(
      tap(result => this._checkResult(result, term)),
      //tap(result => this._log(`found heroes matching "${result}"`)),
      catchError(this._handleError<Hero[]>('searchHeroes', []))
    );
  }

  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this._log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private _log(message: String) {
    this._snackBar.open(`HeroService: ${message}`, null, {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  private _checkResult(arg: any, term: string) {
    if (arg.length) {
      this._log(`found heroes matching "${term}"`);
      return;
    }
    this._log(`NOT found heroes matching "${term}"`);
  }
}
