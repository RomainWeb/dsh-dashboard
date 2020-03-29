import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard-one', pathMatch: 'full' },
  { path: 'dashboard-one', component: DashboardOneComponent },
  { path: 'dashboard-two', component: DashboardOneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
