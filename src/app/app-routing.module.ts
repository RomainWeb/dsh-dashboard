import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module')
    .then(m => m.DashboardModule),
    data: { state: 'dashboard' },
  },
  {
    path: 'static',
    loadChildren: () => import('./modules/static/static.module')
    .then(m => m.StaticModule),
    data: { state: 'static' }
  },
  { path: '**', redirectTo: 'static/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
