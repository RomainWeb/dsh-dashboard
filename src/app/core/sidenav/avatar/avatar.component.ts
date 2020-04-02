import { Observable } from 'rxjs';
import { AppState } from 'src/app/+state';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromUiSelectors from 'src/app/+state/ui/selectors';

@Component({
  selector: 'dsh-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.theme$ = this.store.pipe(select(fromUiSelectors.getThemeState));
  }

}
