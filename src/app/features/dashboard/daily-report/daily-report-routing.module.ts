import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyReportComponent } from './daily-report.component';

const routes: Routes = [
  {
    path: '',
    component: DailyReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DailyReportRoutingModule { }
