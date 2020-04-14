import { AppState } from 'src/app/+state/index';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';
import { delay } from 'rxjs/operators';
import { OPTIONS } from './chart-options';

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


    this.options = OPTIONS;
  }
}
