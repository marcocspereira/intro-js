import { MessageService } from "./message.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  // messageService must be public because we're going to bind it in the template
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
