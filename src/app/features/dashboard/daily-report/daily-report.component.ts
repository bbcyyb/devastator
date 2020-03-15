import { Component, OnInit } from '@angular/core';
import { DailyReportService } from 'src/app/services/daily-report.service';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {
  title = 'This is DailyReport Page.';

  constructor(private service: DailyReportService) {}

  ngOnInit(): void {
    const result = this.service.getAll();
  }
}
