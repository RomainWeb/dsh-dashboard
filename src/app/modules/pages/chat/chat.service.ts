import { AppConfig } from './../../../../config/app.config';
import { Chat } from './../../../shared/model/chat/chat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getMessageList():Observable<Chat[]> {
    return this.http.get<Chat[]>(`${AppConfig.settings.SERVER_API.ENDPOINT_API_CHAT}/messages`);
  }
}
