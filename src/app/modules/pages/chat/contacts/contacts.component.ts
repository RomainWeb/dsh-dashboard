import { Observable } from 'rxjs';
import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/shared/model/chat/chat';

@Component({
  selector: 'dsh-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  chatList$: Observable<Chat[]>;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.chatList$ = this.chatService.getChatList();
  }

}
