import {
  Component,
  AfterViewInit,
  Input, 
  OnChanges,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  NgZone} from '@angular/core';
import {
  ChartData,
  ChartLegendOptions,
  ChartOptions,
  ChartType
} from 'node_modules/chart.js';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

declare var require: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements AfterViewInit, OnChanges {

  chantInstance: any;

  @ViewChild('ref', {static: true}) ref: ElementRef<HTMLCanvasElement>;

  @Output() chartClick = new EventEmitter<ChartClickEvent>();

  @Input() type: ChartType | string = 'doughnut';
  @Input() data: ChartData | any;
  @Input() options: ChartOptions | any = {};

  @Input() height = 150;
  @Input() width = 300;
  @Input() legend: ChartLegendOptions | any = {
    display: true,
    position: 'bottom'
  };
  @Input() plugins: any[];
  @Input() redraw = false;
  @Input() datasetKeyProvider: (x: any) => string = d => d.label;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {}

  ngOnChanges(changes: any) {}
}

export interface ChartClickEvent {
  elements: any[];
  element: any;
  dataset: any[];
  $event: Event;
}
