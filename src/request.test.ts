import { ClientRequest, IncomingMessage } from 'http';
import * as https from 'https';
import { EventEmitter } from 'stream';
import { request } from './request';

jest.mock('https', () => ({
  request: jest.fn(),
}));

function createRequest() {
  const request: object = Object.assign(new EventEmitter(), {
    end: jest.fn(function end(this: object) {
      return this;
    }),
  });
  return request as ClientRequest;
}

function createResponse() {
  const response: object = new EventEmitter();
  return response as IncomingMessage;
}

describe('sendHttpRequest', () => {
  it('throws on request error', async () => {
    const req = createRequest();
    jest.spyOn(https, 'request').mockReturnValue(req);
    const pending = request('https://example.com');
    req.emit('error', new Error('request error'));
    await expect(pending).rejects.toThrowError('request error');
  });

  it('throws on response error', async () => {
    const req = createRequest();
    const res = createResponse();
    const httpRequest = jest.spyOn(https, 'request').mockReturnValue(req);
    const pending = request('https://example.com');
    httpRequest.mock.calls[0]?.[2]?.(res);
    res.emit('error', new Error('response error'));
    await expect(pending).rejects.toThrowError('response error');
  });

  it('makes request', async () => {
    const req = createRequest();
    const res = createResponse();
    const httpRequest = jest.spyOn(https, 'request').mockReturnValue(req);
    const pending = request('https://example.com');
    httpRequest.mock.calls[0]?.[2]?.(res);
    res.statusCode = 200;
    res.headers = { 'content-type': 'application/json' };
    res.emit('data', Buffer.from('Hello'));
    res.emit('data', Buffer.from(' '));
    res.emit('data', Buffer.from('world!'));
    res.emit('end');
    await expect(pending).resolves.toMatchObject({
      status: 200,
      headers: { 'content-type': 'application/json' },
      body: Buffer.from('Hello world!'),
    });
  });

  it('makes request without response body', async () => {
    const req = createRequest();
    const res = createResponse();
    const httpRequest = jest.spyOn(https, 'request').mockReturnValue(req);
    const pending = request('https://example.com');
    httpRequest.mock.calls[0]?.[2]?.(res);
    res.statusCode = 200;
    res.headers = { 'content-type': 'application/json' };
    res.emit('end');
    await expect(pending).resolves.toMatchObject({
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  });
});
