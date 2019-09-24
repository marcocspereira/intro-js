import { ApiService } from "./../../api.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeroDetailComponent } from "./hero-detail.component";
import { RouterModule } from "@angular/router";

describe("HeroDetailComponent", () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterModule.forRoot([])],
      declarations: [HeroDetailComponent],
      providers: [ApiService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
