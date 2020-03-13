import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dailyreport',
    pathMatch: 'full'
  }, {
    path: 'dailyreport',
    loadChildren: () =>
    import('./daily-report/daily-report.module').then(
      m => m.DailyReportModule
    )
  }, {
    path: '**',
    redirectTo: 'dailyreport'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
