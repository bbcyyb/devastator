import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyReportRoutingModule } from './daily-report-routing.module';
import { DailyReportComponent } from './daily-report.component';



@NgModule({
  declarations: [DailyReportComponent],
  imports: [
    CommonModule,
    DailyReportRoutingModule
  ]
})
export class DailyReportModule { }
