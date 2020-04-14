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
      icon: 'cloud-upload',
      route: '.',
      title: 'Uploads',
      color: '#5c6bc0'
    },
    {
      id: 2,
      icon: 'comments',
      route: '.',
      title: 'Comments',
      color: '#29b6f6'
    },
    {
      id: 3,
      icon: 'chart-network',
      route: '.',
      title: 'Incomes',
      color: '#ab47bc'
    },
    {
      id: 4,
      icon: 'heart',
      route: '.',
      title: 'Likes',
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
