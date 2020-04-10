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
import { CardLineChartComponent } from './analytics/card-line-chart/card-line-chart.component';
import { CardWeatherComponent } from './analytics/card-weather/card-weather.component';
import { CardDonutComponent } from './analytics/card-donut/card-donut.component';
import { CardBarComponent } from './analytics/card-bar/card-bar.component';
import { CardDonutDetailComponent } from './analytics/card-donut/card-donut-detail/card-donut-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    ProjectsComponent,
    CardNumberComponent,
    CardDateComponent,
    CardLineChartComponent,
    CardWeatherComponent,
    CardDonutComponent,
    CardBarComponent,
    CardDonutDetailComponent,
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
