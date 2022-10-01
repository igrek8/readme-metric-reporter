export interface MetricGroup {
  /** @description Email associated with the API call */
  email?: string;
  /** @description Human-readable description of user or project making the API call. Ex) Company Name/User Name/Project Name */
  label?: string;
  /** @description The API key for your user. Note: This field is called `apiKey` in the official SDKs and in the future we will accept this parameter as `apiKey`. */
  id: string | number;
}

export interface MetricCreator {
  /**
   * @description Name of the package or HTTP module used.
   * @example readmeio
   */
  name: string;
  /**
   * @description Version of the package or HTTP module.
   * @example 1.2.1
   */
  version: string;
  /**
   * @description The OS and Version of the log. For the OS use `mac`, `windows`, `linux` or `unknown`. The format should match {osName}/version.
   * @example mac/v10.16.0
   */
  comment?: string;
}

export interface MetricRequestQueryString {
  /** @description The query string parameter name */
  name: string;
  /** @description The query string parameter value */
  value: string;
}

export interface MetricRequestHeader {
  /** @description The header name */
  name: string;
  /** @description The header value */
  value: string | number;
}

export interface MetricResponseHeader {
  /** @description The header name */
  name: string;
  /** @description The header value */
  value: string | number;
}

export interface MetricRequestParameter {
  /** @description The request body parameter name */
  name: string;
  /** @description The request body parameter value */
  value: string;
  fileName?: string;
  /** @description Content type of posted file */
  contentType?: string;
  comment?: string;
}

export interface MetricRequestData {
  mimeType?: string;
  /** @description If the request body is url encoded (e.g. `a=b&c=d`) then those parameters are provided via the `params` array. Otherwise see `text` */
  params?: MetricRequestParameter[];
  /** @description The string representation of the request body. Used for all cases except for a form-encoded body */
  text?: string;
  comment?: string;
}

export interface MetricRequestObject {
  /** @description HTTP Method */
  method: string;
  /** @description Full URL of Request */
  url: string;
  /** @description Name and revision of the information protocol via which the page was requested. */
  httpVersion: string;
  /** @description Headers */
  headers: MetricRequestHeader[];
  queryString: MetricRequestQueryString[];
  postData?: MetricRequestData;
}

export interface MetricResponseData {
  /** @description Length of the returned content in bytes */
  size?: number | string;
  mimeType?: string;
  /** @description Response body sent from the server. This field is populated with textual content only. The text field is either HTTP decoded text or an encoded (e.g. "base64") representation of the response body. Leave out this field if the information is not available. */
  text?: string;
  /**
   * @description Encoding used for response text field. Leave out this field if the text field is HTTP decoded (decompressed and unchunked), then transcoded from its original character set into UTF-8.
   * @example base64
   */
  encoding?: string;
}

export interface MetricResponseObject {
  /** @description HTTP Status Code */
  status: number;
  /** @description Description of the HTTP status code */
  statusText: string;
  headers: MetricResponseHeader[];
  /** @description Details about the response body */
  content: MetricResponseData;
}

export interface MetricEntry {
  /**
   * @description The API endpoint or page that was accessed. If you would like to group similar endpoints together you can use your route with a variable instead, e.g. the literal string /users/{user_id}
   * @example https://api.example.com/v1/pets
   */
  pageref?: string;
  /**
   * Format: date-time
   * @description HTTP request start time. This should be the moment the server receives the request.
   * @example 2020-09-09T18:54:02.797Z
   */
  startedDateTime: string;
  /** @description Total elapsed time in milliseconds between the `startedDateTime` and the completion of sending the response */
  time: number | string;
  request: MetricRequestObject;
  response: MetricResponseObject;
}

export interface MetricLog {
  /** @description Information about the package or HTTP module used to log the request. */
  creator?: MetricCreator;
  /** @description HTTP Requests made */
  entries?: MetricEntry[];
}

export interface MetricRequest {
  /** @description Root of HAR object */
  log?: MetricLog;
}

/**
 * Generated from Open API Specification
 *
 * https://metrics.readme.io/request
 */
export interface Metric {
  /** @description A uuidv4 identifier for this log. If not provided we will generate one for you. This ID can be used to view the logged request and response information at `{your url}/logs/{id}` */
  _id?: string;
  /** @description IP Address making request */
  clientIPAddress: string;
  /** @default true */
  development?: boolean;
  /** @description Data about the user or project making the API call */
  group: MetricGroup;
  /** @description HAR Object for Request */
  request: MetricRequest;
}
