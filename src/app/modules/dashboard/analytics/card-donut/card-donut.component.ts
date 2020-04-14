import { MatSidenav } from '@angular/material/sidenav';
import { AppState } from 'src/app/+state/index';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { delay } from 'rxjs/operators';
import { OPTIONS } from './chart-options';


@Component({
  selector: 'dsh-card-donut',
  templateUrl: './card-donut.component.html',
  styleUrls: ['./card-donut.component.scss']
})
export class CardDonutComponent implements OnInit, AfterViewInit {
  @ViewChild('donutSidenav') donutSidenav: MatSidenav;
  options: any;
  theme$: Observable<string>;
  isLoading = true;
  echartsInstance: any;
  donutSelected: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngAfterViewInit(): void {
    this.theme$ = this.store.select(fromUiSelectors.getThemeState).pipe(delay(0));
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    this.options = OPTIONS;
  }

  onChartInit(e: any) {
    this.echartsInstance = e;
  }

  onChartClick(e: any) {
    this.donutSidenav.open();
    this.donutSelected = e.data;
  }
}
