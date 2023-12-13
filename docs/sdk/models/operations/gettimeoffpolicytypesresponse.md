# GetTimeoffPolicyTypesResponse


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `error`                                                               | [shared.ErrorT](../../../sdk/models/shared/errort.md)                 | :heavy_minus_sign:                                                    | Unexpected error.                                                     |
| `policyTypes`                                                         | [shared.PolicyTypes](../../../sdk/models/shared/policytypes.md)       | :heavy_minus_sign:                                                    | List of policy types names.                                           |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |