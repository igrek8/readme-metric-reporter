import AwaitLock from 'await-lock';
import { EventEmitter } from 'events';
import type { DeepPartial } from 'utility-types';
import { IMetricReporter } from './IMetricReporter';
import type { Metric } from './Metric';
import { MetricReporterError } from './MetricReporterError';
import { MetricReporterMode } from './MetricReporterMode';
import { MetricReporterRequest, request } from './request';

export interface MetricReporterOptions {
  buffer: {
    /**
     * Number of log entries to collect before flushing
     */
    size: number;
    /**
     * How often a buffer is flushed
     */
    interval: number;
  };

  /**
   * HTTP client options
   */
  http: Omit<MetricReporterRequest, 'body'> & { url: string };

  /**
   * Development logs will not affect production statistics
   */
  mode: MetricReporterMode;
}

export interface MetricReporter extends EventEmitter, IMetricReporter {
  on(eventName: 'error', listener: (error: Error, metrics: Metric[]) => void): this;
  once(eventName: 'error', listener: (error: Error, metrics: Metric[]) => void): this;
  off(eventName: 'error', listener: (error: Error, metrics: Metric[]) => void): this;
  emit(eventName: 'error', error: Error, metrics: Metric[]): boolean;
}

export class MetricReporter extends EventEmitter implements IMetricReporter {
  protected readonly options: MetricReporterOptions;

  protected metrics: Metric[];

  protected interval?: NodeJS.Timer;

  protected readonly mutex: AwaitLock;

  public static defaultOptions: MetricReporterOptions = {
    mode: MetricReporterMode.PRODUCTION,
    buffer: {
      interval: 60000,
      size: 25,
    },
    http: {
      url: 'https://metrics.readme.io/request',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  constructor(apiKey: string, options?: DeepPartial<MetricReporterOptions>) {
    super();
    this.options = {
      ...MetricReporter.defaultOptions,
      ...options,
      buffer: {
        ...MetricReporter.defaultOptions.buffer,
        ...options?.buffer,
      },
      http: {
        ...MetricReporter.defaultOptions.http,
        ...options?.http,
        headers: {
          ...MetricReporter.defaultOptions.http.headers,
          ...options?.http?.headers,
          Authorization: 'Basic ' + Buffer.from(apiKey + ':').toString('base64'),
        },
      },
    };
    this.mutex = new AwaitLock();
    this.metrics = [];
    this.start();
  }

  /**
   * Enqueues an API metric
   */
  public async report(metric: Metric): Promise<void> {
    await this.mutex.acquireAsync();
    try {
      const development = metric.development ?? this.options.mode === MetricReporterMode.DEVELOPMENT;
      this.metrics.push({ ...metric, development });
      if (this.metrics.length >= this.options.buffer.size) {
        await this.flushUnsafe();
      }
    } finally {
      this.mutex.release();
    }
  }

  /**
   * Starts sending metrics
   */
  public start(): void {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.flush();
      }, this.options.buffer.interval);
    }
  }

  /**
   * Stops sending metrics
   */
  public stop(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  public ref(): void {
    this.interval?.ref();
  }

  public unref(): void {
    this.interval?.unref();
  }

  /**
   * Force flush metrics
   */
  public async flush(): Promise<void> {
    await this.mutex.acquireAsync();
    try {
      await this.flushUnsafe();
    } finally {
      this.mutex.release();
    }
  }

  protected async flushUnsafe(): Promise<void> {
    if (this.metrics.length > 0) {
      const metrics = this.metrics;
      try {
        await this.send(metrics);
      } catch (error) {
        if (error instanceof Error) {
          this.emit('error', error, metrics);
        }
      } finally {
        this.metrics = [];
      }
    }
  }

  protected async send(metrics: Metric[]): Promise<void> {
    const res = await request(this.options.http.url, {
      ...this.options.http,
      body: Buffer.from(JSON.stringify(metrics)),
    });
    if (res.status === 202) return;
    throw new MetricReporterError('Unexpected status code', res);
  }

  public get size(): number {
    return this.metrics.length;
  }

  public clear(): void {
    this.metrics = [];
  }
}
