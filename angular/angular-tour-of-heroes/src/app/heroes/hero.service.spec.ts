import { MessageService } from "./../messages/message.service";
import { TestBed } from "@angular/core/testing";

import { HeroService } from "./hero.service";
import { ApiService } from "../api.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("HeroService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ApiService, MessageService]
    })
  );

  it("should be created", () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
