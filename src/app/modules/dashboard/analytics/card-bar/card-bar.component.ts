import { AppState } from 'src/app/+state/index';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'dsh-card-bar',
  templateUrl: './card-bar.component.html',
  styleUrls: ['./card-bar.component.scss']
})
export class CardBarComponent implements OnInit, AfterViewInit {
  options: any;
  isLoading = true;
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngAfterViewInit(): void {
    this.theme$ = this.store.select(fromUiSelectors.getThemeState).pipe(delay(0));
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);


    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}'
      },
      legend: {
        orient: 'horizontal',
        data: ['Coka', 'Fanta', 'Orangina', 'Dr Pepper', 'Sprite'],
        align: 'auto'
      },
      xAxis: {
        type: 'category',
        data: ['Feb', 'Mar', 'Apr']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 567],
        name: 'Coka',
        type: 'bar'
      },
      {
        data: [23, 35, 65],
        name: 'Fanta',
        type: 'bar'
      },
      {
        data: [2, 12, 43],
        name: 'Oragina',
        type: 'bar'
      },
      {
        data: [456, 678, 873],
        name: 'Dr Pepper',
        type: 'bar'
      },
      {
        data: [456, 432, 435],
        name: 'Sprite',
        type: 'bar'
      }],
    };
  }
}
