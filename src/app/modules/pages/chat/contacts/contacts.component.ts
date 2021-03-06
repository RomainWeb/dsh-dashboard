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
  chatList: Chat[];
  isLoading = false;
  ghosts = [];

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.loadDatas();
    this.ghosts = new Array(10);
  }

  loadDatas(): void {
    this.isLoading = true;
    this.chatService.getMessageList().subscribe((response: Chat[]) => {
      this.chatList = response;
      this.isLoading = false;
    });
  }
}
