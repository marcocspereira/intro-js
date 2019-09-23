import { ApiService } from "./../api.service";
import { MessageService } from "./../messages/message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Hero } from "./../classes/hero";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HEROES } from "./../mocks/mock-heroes";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  private _apiUrl = "http://10.123.207.42:3000";
  private heroesUrl = "api/heroes"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private _http: HttpClient,
    private _apiService: ApiService,
    private _messageService: MessageService
  ) {}

  async getHeroes(): Promise<Hero[]> {
    const url = `${this._apiUrl}/fighters`;
    this._messageService.add("HeroService: fetched heroes");
    // return of(HEROES); // old
    const heroes = await this._apiService.get(url);
    return await heroes.body;
  }

  getHero(id: number): Observable<Hero> {
    this._messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id)); // old
    const url = `${this.heroesUrl}/${id}`;
    return this._http.get<Hero>(url).pipe(
      tap(_ => this._log(`fetched hero id=${id}`)),
      catchError(this._handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this._http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this._log(`updated hero id=${hero.id}`)),
      catchError(this._handleError<any>("updateHero"))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this._http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this._log(`added hero w/ id=${newHero.id}`)),
      catchError(this._handleError<Hero>("addHero"))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === "number" ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this._http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this._log(`deleted hero id=${id}`)),
      catchError(this._handleError<Hero>("deleteHero"))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this._http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this._log(`found heroes matching "${term}"`)),
      catchError(this._handleError<Hero[]>("searchHeroes", []))
    );
  }

  private _handleError<T>(operation = "operation", result?: T) {
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
    this._messageService.add(`HeroService: ${message}`);
  }
}
