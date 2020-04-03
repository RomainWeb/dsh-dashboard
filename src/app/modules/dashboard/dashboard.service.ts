import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_API = 'http://monapi:4200/api';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getNumberCardById(id: number): Observable<any> {
    return this.http.get<any>(`${URL_API}/card-number/${id}`);
  }
}
