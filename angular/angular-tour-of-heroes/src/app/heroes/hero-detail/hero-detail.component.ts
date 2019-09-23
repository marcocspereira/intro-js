import { HeroService } from "./../hero.service";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Hero } from "../../classes/hero";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero;

  constructor(
    private _route: ActivatedRoute, //  holds information about the route to this instance of the HeroDetailComponent
    private _heroService: HeroService, // gets hero data from the remote server and this component will use it to get the hero-to-display
    private _location: Location // service for interacting with the browser.
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    // he JavaScript (+) operator converts the string to a number, which is what a hero id should be
    const id = +this._route.snapshot.paramMap.get("id");
    this._heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  save(): void {
    this._heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this._location.back();
  }
}
