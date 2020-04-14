import { Chat } from './../../../../../shared/model/chat/chat';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsh-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  @Input() chatList: Chat[];

  constructor() { }

  ngOnInit(): void {
  }

}
