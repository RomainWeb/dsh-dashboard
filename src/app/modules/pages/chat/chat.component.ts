import { AppState } from 'src/app/+state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUserActions from 'src/app/+state/user/actions';

@Component({
  selector: 'dsh-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromUserActions.changeIsLogging({ isLogging: true }));
  }

}
