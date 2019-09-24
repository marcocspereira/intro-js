import { ApiService } from "./../../api.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeroService } from "./../hero.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeroSearchComponent } from "./hero-search.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("HeroSearchComponent", () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [HeroSearchComponent],
      providers: [HeroService, ApiService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
