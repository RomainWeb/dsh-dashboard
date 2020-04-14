import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAppConfig } from './app.config.model';

@Injectable()
export class AppConfig {

  static settings: IAppConfig;
  jsonFile: string;

  constructor(private http: HttpClient) { }

  load() {
    if (environment.production) {
      this.jsonFile = 'assets/config/app.config.prod.json';
    } else {
      this.jsonFile = 'assets/config/app.config.json';
    }
    return new Promise<void>((resolve, reject) => {
      this.http.get<IAppConfig>(this.jsonFile).toPromise().then(response => {
        AppConfig.settings = response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${this.jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
