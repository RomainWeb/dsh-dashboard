import { Observable } from 'rxjs';
import { AppState } from './+state/index';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'
import { Store, select } from '@ngrx/store';
import * as fromUiActions from 'src/app/+state/ui/actions';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { delay, map } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'dsh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  mobileQuery: MediaQueryList;
  theme$: Observable<string>;

  constructor(
    media: MediaMatcher,
    private store: Store<AppState>,
    private overlayContainer: OverlayContainer
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {
    this.store.dispatch(fromUiActions.loadTheme());
  }

  ngAfterViewInit(): void {
    this.theme$ = this.store.pipe(
      select(fromUiSelectors.getThemeState),
      delay(0),
      map((theme: string) => {
        this.overlayContainer.getContainerElement().classList.add(`${theme}-theme`)
        return theme
      })
    )
  }
}
