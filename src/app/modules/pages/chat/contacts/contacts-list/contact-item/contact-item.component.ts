import { Chat } from './../../../../../../shared/model/chat/chat';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsh-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() chatItem: Chat;

  constructor() { }

  ngOnInit(): void {
  }

}
