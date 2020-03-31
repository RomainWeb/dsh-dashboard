import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AppState } from 'src/app/+state';
import { Store } from '@ngrx/store';
import * as fromUiActions from 'src/app/+state/ui/actions';

@Component({
  selector: 'dsh-setting-panel',
  templateUrl: './setting-panel.component.html',
  styleUrls: ['./setting-panel.component.scss']
})
export class SettingPanelComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  toggleTheme(evt: MatSlideToggleChange): void {
    const theme = evt.checked ? 'dark' : 'light';
    this.store.dispatch(fromUiActions.changeTheme({ theme }));
  }
}
