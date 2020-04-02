import { CardNumber } from './../../../shared/model/dashboard/card-number';
import { DashboardService } from './../dashboard.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'dsh-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit, OnDestroy {
  cardNumberList: CardNumber[];
  cardNumberListSub: Subscription;
  isLoading = false;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.loadCardNumberList();
  }

  ngOnDestroy(): void {
    this.cardNumberListSub.unsubscribe();
  }

  loadCardNumberList(): void {
    this.isLoading = true;
    this.cardNumberListSub = this.dashboardService.getCardNumberList().subscribe((result) => {
      this.cardNumberList = result;
      this.isLoading = false;
    })
  }
}
