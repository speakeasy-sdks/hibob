# GetCompanyReportsReportIdDownloadResponse


## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `error`                                                                                         | [shared.ErrorT](../../models/shared/errort.md)                                                  | :heavy_minus_sign:                                                                              | Unexpected error                                                                                |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `rawResponse`                                                                                   | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `getCompanyReportsReportIdDownload200ApplicationJSONBinaryString`                               | *Uint8Array*                                                                                    | :heavy_minus_sign:                                                                              | Includes the report name and execution date in the report file. By default this is set to True. |