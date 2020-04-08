import { AppState } from 'src/app/+state/index';
import { Store } from '@ngrx/store';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { format, subWeeks } from 'date-fns';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { Subscription, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'dsh-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewInit {
  isLoading = true;
  options: any;
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngAfterViewInit(): void {
    this.theme$ = this.store.select(fromUiSelectors.getThemeState);
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    const xAxisData = [];
    const sales = [];
    const visitors = [];

    const colorPalette = ['#5c6bc0','#29b6f6','#ab47bc','#ec407a','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'];

    for (let i = 0; i < 50; i++) {
      xAxisData.push(format(subWeeks(new Date(), i), 'LLL dd yyyy'));
      sales.push((Math.sin(i / 5) * (i / 5) + i / 6) * 5);
      visitors.push((Math.cos(i / 4) * (i / 5) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['Sales', 'Visitors'],
        align: 'left'
      },
      tooltip: {},
      colorPalette,
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'Sales',
        type: 'line',
        data: sales,
        areaStyle: {},
        smooth: true,
        animationDelay: (idx) => {
          return idx * 10;
        }
      }, {
        name: 'Visitors',
        type: 'line',
        data: visitors,
        areaStyle: {},
        smooth: true,
        animationDelay: (idx) => {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => {
        return idx * 5;
      }
    };
  }
}
