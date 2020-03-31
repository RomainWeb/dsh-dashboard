import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { AvatarComponent } from './core/sidenav/avatar/avatar.component';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from './core/topbar/topbar.component';
import { SettingPanelComponent } from './core/setting-panel/setting-panel.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
