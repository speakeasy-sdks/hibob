# Reports

### Available Operations

* [getCompanyReports](#getcompanyreports) - Read company reports
* [getCompanyReportsDownloadReportName](#getcompanyreportsdownloadreportname) - Download report by file URL
* [getCompanyReportsReportIdDownload](#getcompanyreportsreportiddownload) - Download the report by ID
* [getCompanyReportsReportIdDownloadAsync](#getcompanyreportsreportiddownloadasync) - Get the report download URL for polling

## getCompanyReports

Returns a list of all the defined company reports. The data is filtered based on the access level of the user. Only viewable categories are returned.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetCompanyReportsResponse, GetCompanyReportsSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetCompanyReportsSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.reports.getCompanyReports(operationSecurity).then((res: GetCompanyReportsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `security`                                                                                   | [operations.GetCompanyReportsSecurity](../../models/operations/getcompanyreportssecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetCompanyReportsResponse](../../models/operations/getcompanyreportsresponse.md)>**


## getCompanyReportsDownloadReportName

Returns the report data file when it is ready. If the file is not ready yet the response will be 204. It will then have to try again.<br />(This URL is the response of the previous API: https://api.hibob.com/v1/company/reports/reportId/download-async)<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  GetCompanyReportsDownloadReportNameResponse,
  GetCompanyReportsDownloadReportNameSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetCompanyReportsDownloadReportNameSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.reports.getCompanyReportsDownloadReportName({
  reportName: "quis",
}, operationSecurity).then((res: GetCompanyReportsDownloadReportNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetCompanyReportsDownloadReportNameRequest](../../models/operations/getcompanyreportsdownloadreportnamerequest.md)   | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `security`                                                                                                                       | [operations.GetCompanyReportsDownloadReportNameSecurity](../../models/operations/getcompanyreportsdownloadreportnamesecurity.md) | :heavy_check_mark:                                                                                                               | The security requirements to use for the request.                                                                                |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetCompanyReportsDownloadReportNameResponse](../../models/operations/getcompanyreportsdownloadreportnameresponse.md)>**


## getCompanyReportsReportIdDownload

Returns a report data file in the specified format.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  GetCompanyReportsReportIdDownloadFormat,
  GetCompanyReportsReportIdDownloadResponse,
  GetCompanyReportsReportIdDownloadSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetCompanyReportsReportIdDownloadSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.reports.getCompanyReportsReportIdDownload({
  format: GetCompanyReportsReportIdDownloadFormat.Csv,
  includeInfo: false,
  locale: "unde",
  reportId: 4769.46,
}, operationSecurity).then((res: GetCompanyReportsReportIdDownloadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetCompanyReportsReportIdDownloadRequest](../../models/operations/getcompanyreportsreportiddownloadrequest.md)   | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `security`                                                                                                                   | [operations.GetCompanyReportsReportIdDownloadSecurity](../../models/operations/getcompanyreportsreportiddownloadsecurity.md) | :heavy_check_mark:                                                                                                           | The security requirements to use for the request.                                                                            |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetCompanyReportsReportIdDownloadResponse](../../models/operations/getcompanyreportsreportiddownloadresponse.md)>**


## getCompanyReportsReportIdDownloadAsync

Returns the polling URL report file of the specified format under "Location" in the response header.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  GetCompanyReportsReportIdDownloadAsyncFormat,
  GetCompanyReportsReportIdDownloadAsyncResponse,
  GetCompanyReportsReportIdDownloadAsyncSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetCompanyReportsReportIdDownloadAsyncSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.reports.getCompanyReportsReportIdDownloadAsync({
  format: GetCompanyReportsReportIdDownloadAsyncFormat.Xlsx,
  includeInfo: false,
  locale: "cupiditate",
  reportId: 1478.01,
}, operationSecurity).then((res: GetCompanyReportsReportIdDownloadAsyncResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetCompanyReportsReportIdDownloadAsyncRequest](../../models/operations/getcompanyreportsreportiddownloadasyncrequest.md)   | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `security`                                                                                                                             | [operations.GetCompanyReportsReportIdDownloadAsyncSecurity](../../models/operations/getcompanyreportsreportiddownloadasyncsecurity.md) | :heavy_check_mark:                                                                                                                     | The security requirements to use for the request.                                                                                      |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetCompanyReportsReportIdDownloadAsyncResponse](../../models/operations/getcompanyreportsreportiddownloadasyncresponse.md)>**

