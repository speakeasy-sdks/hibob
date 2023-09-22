# GetProfilesResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `employeesProfiles`                                                  | [shared.EmployeesProfiles](../../models/shared/employeesprofiles.md) | :heavy_minus_sign:                                                   | Employee profiles                                                    |
| `error`                                                              | [shared.ErrorT](../../models/shared/errort.md)                       | :heavy_minus_sign:                                                   | Unexpected error                                                     |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse](https://axios-http.com/docs/res_schema)              | :heavy_minus_sign:                                                   | N/A                                                                  |