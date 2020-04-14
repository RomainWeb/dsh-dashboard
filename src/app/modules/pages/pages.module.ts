import { IconsModule } from './../../shared/icons.module';
import { MaterialModule } from './../../shared/material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [PagesComponent, LoginComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    SharedModule,
    IconsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
