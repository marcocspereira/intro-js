import { MessageService } from "./../messages/message.service";
import { HEROES } from "./../mocks/mock-heroes";
import { Hero } from "./../classes/hero";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private _messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this._messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }
}
