import { Chat } from './../../../shared/model/chat/chat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getChatList():Observable<Chat[]> {
    return this.http.get<Chat[]>(`/assets/mock-data/chat/chat-list.json`);
  }
}
