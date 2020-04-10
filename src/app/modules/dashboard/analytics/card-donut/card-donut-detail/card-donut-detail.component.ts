import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { Observable } from 'rxjs';
import { OPTIONS } from './bar-chart-options';

@Component({
  selector: 'dsh-card-donut-detail',
  templateUrl: './card-donut-detail.component.html',
  styleUrls: ['./card-donut-detail.component.scss']
})
export class CardDonutDetailComponent implements OnInit {
  // TODO Remove autofocus on close button
  @Input() name: string;
  echartsInstance: any;
  options: any;
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.theme$ = this.store.select(fromUiSelectors.getThemeState);

    this.options = OPTIONS;
  }

  onChartInit(e: any) {
    this.echartsInstance = e;
  }
}
