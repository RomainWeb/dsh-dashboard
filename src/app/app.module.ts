import { AppConfig } from './../config/app.config';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { AvatarComponent } from './core/sidenav/avatar/avatar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopbarComponent } from './core/topbar/topbar.component';
import { SettingPanelComponent } from './core/setting-panel/setting-panel.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './+state';
import { environment } from 'src/environments/environment';
import { FakeBackendInterceptor } from './shared/helpers/fake-backend-interceptor';

// APP_INITIALIZER
export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AvatarComponent,
    TopbarComponent,
    SettingPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppConfig], multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
