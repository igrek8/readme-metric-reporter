import { Metric } from './Metric';

export interface IMetricReporter {
  start(): void;
  report(metric: Metric): Promise<void>;
  stop(): void;
}
