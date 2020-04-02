import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AppState } from 'src/app/+state';
import { Store, select } from '@ngrx/store';
import * as fromUiActions from 'src/app/+state/ui/actions';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'dsh-setting-panel',
  templateUrl: './setting-panel.component.html',
  styleUrls: ['./setting-panel.component.scss']
})
export class SettingPanelComponent implements OnInit {
  currentTheme$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.currentTheme$ = this.store.pipe(select(fromUiSelectors.getThemeState));
  }

  toggleTheme(evt: MatSlideToggleChange): void {
    const theme = evt.checked ? 'dark' : 'light';
    this.store.dispatch(fromUiActions.changeTheme({ theme }));
    localStorage.setItem('theme', theme);
  }
}
