import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyReportRoutingModule } from './daily-report-routing.module';
import { DailyReportComponent } from './daily-report.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DailyReportComponent],
  imports: [
    CommonModule,
    DailyReportRoutingModule,
    SharedModule,
  ]
})
export class DailyReportModule { }
