import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Navigation } from 'src/app/shared/model/sidenav/navigation';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor(private http: HttpClient) { }

  getNavigationList(): Observable<Navigation> {
    return this.http.get<Navigation>('/assets/json/navigation.json');
  }
}
