import { AppConfig } from './../../../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string, rememberMe: boolean): Observable<any> {
    return this.http.post<any>(`${ AppConfig.settings.SERVER_API.ENDPOINT_API_LOGIN }`,
    { email, password, rememberMe });
  }
}
