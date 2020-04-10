import { MatSidenav } from '@angular/material/sidenav';
import { AppState } from 'src/app/+state/index';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { delay } from 'rxjs/operators';


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

    this.options = {
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
          orient: 'vertical',
          left: 10,
          data: ['Coka', 'Fanta', 'Orangina', 'Dr Pepper', 'Sprite']
      },
      series: [
          {
              name: 'Drink rate',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  {value: 1234, name: 'Coka'},
                  {value: 310, name: 'Fanta'},
                  {value: 234, name: 'Orangina'},
                  {value: 135, name: 'Dr Pepper'},
                  {value: 65, name: 'Sprite'}
              ]
          }
      ]
    };
  }

  onChartInit(e: any) {
    this.echartsInstance = e;
  }

  onChartClick(e: any) {
    this.donutSidenav.open();
    this.donutSelected = e.data;
  }
}
