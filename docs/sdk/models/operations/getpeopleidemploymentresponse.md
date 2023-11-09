# GetPeopleIdEmploymentResponse


## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `employmentEntries`                                                         | [shared.EmploymentEntries](../../../sdk/models/shared/employmententries.md) | :heavy_minus_sign:                                                          | List of employment history entries.                                         |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [AxiosResponse](https://axios-http.com/docs/res_schema)                     | :heavy_minus_sign:                                                          | Raw HTTP response; suitable for custom response parsing                     |