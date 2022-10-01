import { Metric } from './Metric';
import { MetricReporter } from './MetricReporter';
import { MetricReporterError } from './MetricReporterError';
import { MetricReporterResponse, request } from './request';

jest.mock('./request');

jest.useFakeTimers();

const apiKey = 'apiKey';

describe('MetricReporter', () => {
  describe('constructor', () => {
    it('calls start', () => {
      const start = jest.spyOn(MetricReporter.prototype, 'start').mockImplementationOnce(() => {});
      new MetricReporter(apiKey, MetricReporter.defaultOptions);
      expect(start).toHaveBeenCalled();
    });
  });

  describe('start', () => {
    it('creates an interval', () => {
      const setInterval = jest.spyOn(global, 'setInterval');
      new MetricReporter(apiKey, MetricReporter.defaultOptions);
      expect(setInterval).toHaveBeenCalledWith(expect.any(Function), MetricReporter.defaultOptions.buffer.interval);
    });

    it('flushes on time', () => {
      const reporter = new MetricReporter(apiKey, MetricReporter.defaultOptions);
      const flush = jest.spyOn(reporter, 'flush').mockImplementation(async () => {});
      jest.advanceTimersByTime(MetricReporter.defaultOptions.buffer.interval);
      expect(flush).toHaveBeenCalled();
    });
  });

  describe('stop', () => {
    it('clears an interval', () => {
      const interval = {} as NodeJS.Timer;
      jest.spyOn(global, 'setInterval').mockReturnValue(interval);
      const clearInterval = jest.spyOn(global, 'clearInterval');
      new MetricReporter(apiKey, MetricReporter.defaultOptions).stop();
      expect(clearInterval).toHaveBeenCalledWith(interval);
    });
  });

  describe('ref', () => {
    it('calls interval ref', () => {
      const setInterval = jest.spyOn(global, 'setInterval');
      const reporter = new MetricReporter(apiKey, MetricReporter.defaultOptions);
      const interval: NodeJS.Timer = setInterval.mock.results[0]?.value;
      const ref = jest.spyOn(interval, 'ref');
      reporter.ref();
      expect(ref).toHaveBeenCalled();
    });
  });

  describe('unref', () => {
    it('calls interval unref', () => {
      const setInterval = jest.spyOn(global, 'setInterval');
      const reporter = new MetricReporter(apiKey, MetricReporter.defaultOptions);
      const interval: NodeJS.Timer = setInterval.mock.results[0]?.value;
      const unref = jest.spyOn(interval, 'unref');
      reporter.unref();
      expect(unref).toHaveBeenCalled();
    });
  });

  describe('report', () => {
    const metrics = new Array(MetricReporter.defaultOptions.buffer.size).fill(0).map(() => {
      return { development: true } as Metric;
    });

    it('does not send metrics immediately', async () => {
      const reporter = new MetricReporter(apiKey, MetricReporter.defaultOptions);
      reporter.report({} as Metric);
      expect(request).not.toHaveBeenCalled();
    });

    it('sends metric', async () => {
      const reporter = new MetricReporter(apiKey, MetricReporter.defaultOptions);
      const response: MetricReporterResponse = { status: 202, headers: {}, body: Buffer.alloc(0) };
      (request as jest.MockedFunction<typeof request>).mockResolvedValue(response);
      await Promise.all(metrics.map((metric) => reporter.report(metric)));
      expect(request).toHaveBeenCalledWith(
        MetricReporter.defaultOptions.http.url,
        expect.objectContaining({
          method: 'POST',
          body: expect.any(Buffer),
          headers: {
            'Content-Type': 'application/json',
            Authorization: expect.any(String),
          },
        })
      );
    });

    it('emits error and metrics on error', async () => {
      const onError = jest.fn();
      const reporter = new MetricReporter(apiKey, MetricReporter.defaultOptions);
      reporter.once('error', onError);
      const error = new Error('getaddrinfo ENOTFOUND test.com');
      (request as jest.MockedFunction<typeof request>).mockRejectedValue(error);
      await Promise.all(metrics.map((metric) => reporter.report(metric)));
      expect(onError).toHaveBeenCalledWith(error, metrics);
    });

    it('emits error and metrics on unexpected response', async () => {
      const onError = jest.fn();
      const reporter = new MetricReporter(apiKey, MetricReporter.defaultOptions);
      reporter.once('error', onError);
      const response: MetricReporterResponse = { status: 400, headers: {}, body: Buffer.from('Bad Request') };
      (request as jest.MockedFunction<typeof request>).mockResolvedValue(response);
      await Promise.all(metrics.map((metric) => reporter.report(metric)));
      expect(onError).toHaveBeenCalledWith(expect.any(MetricReporterError), metrics);
    });
  });

  describe('size', () => {
    it('returns a number of metrics', async () => {
      const reporter = new MetricReporter(apiKey, MetricReporter.defaultOptions);
      await reporter.report({} as Metric);
      expect(reporter.size).toBe(1);
    });
  });

  describe('clear', () => {
    it('removes metrics', async () => {
      const reporter = new MetricReporter(apiKey, MetricReporter.defaultOptions);
      await reporter.report({} as Metric);
      expect(reporter.size).toBe(1);
      reporter.clear();
      expect(reporter.size).toBe(0);
    });
  });
});
