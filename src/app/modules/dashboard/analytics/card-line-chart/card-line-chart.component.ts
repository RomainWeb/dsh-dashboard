import { AppState } from 'src/app/+state/index';
import { Store } from '@ngrx/store';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { format, subWeeks } from 'date-fns';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { Subscription, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { OPTIONS } from './chat-options';

@Component({
  selector: 'dsh-card-line-chart',
  templateUrl: './card-line-chart.component.html',
  styleUrls: ['./card-line-chart.component.scss']
})
export class CardLineChartComponent implements OnInit, AfterViewInit {
  options: any;
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngAfterViewInit(): void {
    this.theme$ = this.store.select(fromUiSelectors.getThemeState).pipe(delay(0));
  }

  ngOnInit(): void {
    this.options = OPTIONS;
  }
}
