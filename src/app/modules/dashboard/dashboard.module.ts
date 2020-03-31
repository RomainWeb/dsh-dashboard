import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

// * Components
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProjectsComponent } from './projects/projects.component';
import { OverlayContainer } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('light-theme');
  }
}
