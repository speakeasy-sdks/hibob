# Reports
(*reports*)

### Available Operations

* [getCompanyReports](#getcompanyreports) - Read company reports
* [getCompanyReportsDownloadReportName](#getcompanyreportsdownloadreportname) - Download report by file URL
* [getCompanyReportsReportIdDownload](#getcompanyreportsreportiddownload) - Download the report by ID
* [getCompanyReportsReportIdDownloadAsync](#getcompanyreportsreportiddownloadasync) - Get the report download URL for polling

## getCompanyReports

Returns a list of all the defined company reports. The data is filtered based on the access level of the user. Only viewable categories are returned.<br />

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.reports.getCompanyReports();

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCompanyReportsResponse](../../sdk/models/operations/getcompanyreportsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCompanyReportsDownloadReportName

Returns the report data file when it is ready. If the file is not ready yet the response will be 204. It will then have to try again.<br />(This URL is the response of the previous API: https://api.hibob.com/v1/company/reports/reportId/download-async)<br />

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.reports.getCompanyReportsDownloadReportName({
    reportName: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompanyReportsDownloadReportNameRequest](../../sdk/models/operations/getcompanyreportsdownloadreportnamerequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCompanyReportsDownloadReportNameResponse](../../sdk/models/operations/getcompanyreportsdownloadreportnameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCompanyReportsReportIdDownload

Returns a report data file in the specified format.<br /><b>Supported user types:</b> Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { QueryParamFormat } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.reports.getCompanyReportsReportIdDownload({
    format: QueryParamFormat.Xlsx,
    reportId: 3566.85,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompanyReportsReportIdDownloadRequest](../../sdk/models/operations/getcompanyreportsreportiddownloadrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCompanyReportsReportIdDownloadResponse](../../sdk/models/operations/getcompanyreportsreportiddownloadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCompanyReportsReportIdDownloadAsync

Returns the polling URL report file of the specified format under "Location" in the response header.<br />

### Example Usage

```typescript
import { Hibob } from "hibob";
import { Format } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.reports.getCompanyReportsReportIdDownloadAsync({
    format: Format.Xlsx,
    reportId: 7232.99,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompanyReportsReportIdDownloadAsyncRequest](../../sdk/models/operations/getcompanyreportsreportiddownloadasyncrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCompanyReportsReportIdDownloadAsyncResponse](../../sdk/models/operations/getcompanyreportsreportiddownloadasyncresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
