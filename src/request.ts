import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import * as https from 'https';

export interface MetricReporterRequest {
  method?: string;
  headers?: OutgoingHttpHeaders;
  body?: Buffer;
}

export interface MetricReporterResponse {
  status?: number;
  headers: IncomingHttpHeaders;
  body?: Buffer;
}

export function request(url: string, options: MetricReporterRequest = {}) {
  let chunks: Buffer[];
  return new Promise<MetricReporterResponse>((resolve, reject) =>
    https
      .request(url, options, (message) => {
        message
          .on('data', (chunk: Buffer) => {
            chunks ??= [];
            chunks.push(chunk);
          })
          .once('error', (error) => reject(error))
          .once('end', () =>
            resolve({
              status: message.statusCode,
              headers: message.headers,
              body: chunks ? Buffer.concat(chunks) : undefined,
            })
          );
      })
      .once('error', (error) => reject(error))
      .end(options.body)
  );
}
