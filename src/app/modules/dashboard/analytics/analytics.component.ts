import { CardNumber } from './../../../shared/model/dashboard/card-number';
import { DashboardService } from './../dashboard.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state';
import * as fromUserActions from 'src/app/+state/user/actions';


@Component({
  selector: 'dsh-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit, OnDestroy {
  cardNumberList: CardNumber[] = [
    {
      id: 1,
      icon: 'charging-station',
      route: '.',
      title: 'Electric cars',
      color: '#5c6bc0'
    },
    {
      id: 2,
      icon: 'smog',
      route: '.',
      title: 'Co2 emmission',
      color: '#29b6f6'
    },
    {
      id: 3,
      icon: 'leaf-heart',
      route: '.',
      title: 'Vegetation',
      color: '#ab47bc'
    },
    {
      id: 4,
      icon: 'temperature-hot',
      route: '.',
      title: 'Temperature anomally',
      color: '#ff9800'
    }
  ];
  isLoading = false;

  constructor(
    private dashboardService: DashboardService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromUserActions.changeIsLogging({ isLogging: true }));
  }

  ngOnDestroy(): void {
  }

  loadCardNumberList(): void {
    this.isLoading = true;
  }
}
