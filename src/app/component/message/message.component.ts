import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message =[
    // { "name": "a", "text" : "this is a message1" },
    // { "name": "b", "text": "this is b message2" },
    // { "name": "c", "text":"this is c message3" },
    // { "name": "d", "text":"this is d message4" },
    // { "name": "e", "text":"this is e message5" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
