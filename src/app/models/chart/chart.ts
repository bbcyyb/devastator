import { ChartLine } from './chartLine';

export interface Chart {
  labels: Array<string>;
  datasets: Array<ChartLine>;
  benchmark: number;
}
