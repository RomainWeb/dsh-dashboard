import { Observable } from 'rxjs';
import { AppState } from './+state/index';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'
import { Store, select } from '@ngrx/store';
import * as fromUiActions from 'src/app/+state/ui/actions';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { delay, map } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';
import { routerTransition } from './app-routing.animation';
import * as fromUserSelectors from 'src/app/+state/user/selectors';
import * as fromUserActions from 'src/app/+state/user/actions';

@Component({
  selector: 'dsh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent implements OnInit, AfterViewInit {
  mobileQuery: MediaQueryList;
  theme$: Observable<string>;
  isLogging$: Observable<boolean>;

  constructor(
    media: MediaMatcher,
    private store: Store<AppState>,
    private overlayContainer: OverlayContainer
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 959px)');
  }

  ngOnInit(): void {
    this.store.dispatch(fromUserActions.changeIsLogging({ isLogging: false }))
    this.store.dispatch(fromUiActions.loadTheme());
    this.isLogging$ = this.store.select(fromUserSelectors.getIsLoggingState).pipe(delay(0));
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

  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
}
