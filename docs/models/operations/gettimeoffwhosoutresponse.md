# GetTimeoffWhosoutResponse


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `error`                                                                 | [shared.ErrorT](../../models/shared/errort.md)                          | :heavy_minus_sign:                                                      | Unexpected error                                                        |
| `requests`                                                              | [shared.Requests](../../models/shared/requests.md)                      | :heavy_minus_sign:                                                      | Time off requests as seen by the logged in user for a given date range. |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `rawResponse`                                                           | [AxiosResponse>](https://axios-http.com/docs/res_schema)                | :heavy_minus_sign:                                                      | N/A                                                                     |