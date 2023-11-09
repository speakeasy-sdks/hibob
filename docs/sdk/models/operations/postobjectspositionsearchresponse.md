# PostObjectsPositionSearchResponse


## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `error`                                                                   | [shared.ErrorT](../../../sdk/models/shared/errort.md)                     | :heavy_minus_sign:                                                        | Unexpected error.                                                         |
| `positionEntries`                                                         | [shared.PositionEntries](../../../sdk/models/shared/positionentries.md)[] | :heavy_minus_sign:                                                        | Positions                                                                 |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [AxiosResponse](https://axios-http.com/docs/res_schema)                   | :heavy_minus_sign:                                                        | Raw HTTP response; suitable for custom response parsing                   |