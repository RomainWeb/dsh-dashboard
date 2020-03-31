import { ProjectsComponent } from './projects/projects.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard-one', pathMatch: 'full' },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
