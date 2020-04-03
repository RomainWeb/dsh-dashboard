import { LeftRightAnimation } from './../../../../shared/animations/slide-left-right';
import { DashboardService } from './../../dashboard.service';
import { CardNumber } from 'src/app/shared/model/dashboard/card-number';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'dsh-card-number',
  templateUrl: './card-number.component.html',
  styleUrls: ['./card-number.component.scss'],
  animations: [LeftRightAnimation]
})
export class CardNumberComponent implements OnInit {
  @Input() cardNumber: CardNumber;
  cardResult: any;
  cardResultSub: Subscription;
  isLoading = false;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.loadCardNumber();
  }

  loadCardNumber(): void {
    this.isLoading = true;

    this.cardResultSub = this.dashboardService.getNumberCardById(this.cardNumber.id).subscribe((res: any) => {
      this.cardResult = res;
      this.isLoading = false;
    });
  }
}
