import { MetricReporterResponse } from './request';

export class MetricReporterError extends Error {
  constructor(message: string, public readonly response: MetricReporterResponse) {
    super(message);
    this.name = 'MetricReporterError';
  }
}
