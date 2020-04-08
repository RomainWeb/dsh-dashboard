import { MaterialModule } from './../../shared/material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

// * Echarts
import { NgxEchartsModule } from 'ngx-echarts';

// * Components
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProjectsComponent } from './projects/projects.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CardNumberComponent } from './analytics/card-number/card-number.component';
import { CardDateComponent } from './analytics/card-date/card-date.component';
import { LineChartComponent } from './analytics/line-chart/line-chart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    ProjectsComponent,
    CardNumberComponent,
    CardDateComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MaterialModule,
    NgxEchartsModule
  ]
})
export class DashboardModule {

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('light-theme');
  }
}
