import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'dsh-card-donut-detail',
  templateUrl: './card-donut-detail.component.html',
  styleUrls: ['./card-donut-detail.component.scss']
})
export class CardDonutDetailComponent implements OnInit {
  // TODO Remove autofocus on close button
  @Input() name: string;
  @Input() donutSidenav: MatSidenav;
  echartsInstance: any;
  options: any;
  theme$: Observable<string>;

  dayDatas: any = [
    { day: 'Monday', value: 213, percent: 2.1, isPositive: false },
    { day: 'Tuesday', value: 324, percent: 3.5, isPositive: true },
    { day: 'Wednesday', value: 642, percent: 7.4, isPositive: true },
    { day: 'Thursday', value: 432, percent: 5.6, isPositive: false },
    { day: 'Friday', value: 234, percent: 2.5, isPositive: true },
    { day: 'Saturday', value: 874, percent: 8.3, isPositive: true },
    { day: 'Sunday', value: 134, percent: 2.9, isPositive: false },
  ]

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.theme$ = this.store.select(fromUiSelectors.getThemeState);
  }

  closeSidenav(): void {
    this.donutSidenav.close();
  }
}
