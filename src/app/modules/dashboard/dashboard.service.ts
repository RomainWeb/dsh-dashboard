import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardNumber } from 'src/app/shared/model/dashboard/card-number';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getCardNumberList(): Observable<CardNumber[]> {
    return this.http.get<CardNumber[]>('./assets/mock-data/dashboard/card-number-list.json')
                    .pipe(
                      delay(500)
                    );
  }
}
