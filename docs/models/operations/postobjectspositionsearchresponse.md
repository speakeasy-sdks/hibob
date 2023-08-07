# PostObjectsPositionSearchResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `contentType`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `error`                                                            | [shared.ErrorT](../../models/shared/errort.md)                     | :heavy_minus_sign:                                                 | Unexpected error.                                                  |
| `positionEntries`                                                  | [shared.PositionEntries](../../models/shared/positionentries.md)[] | :heavy_minus_sign:                                                 | Positions                                                          |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `rawResponse`                                                      | [AxiosResponse>](https://axios-http.com/docs/res_schema)           | :heavy_minus_sign:                                                 | N/A                                                                |