import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message = [
    { "name": "a", "text" : "this is a message1" },
    { "name": "b", "text": "this is b message2" },
    { "name": "c", "text":"this is c message3" },
    { "name": "d", "text":"this is d message4" },
    { "name": "e", "text":"this is e message5" }
    ];
  constructor() { }
  addMessage() { }
  getMessages(): Observable<any> {
    return this.message;
  }
}
