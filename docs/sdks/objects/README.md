# Objects
(*objects*)

### Available Operations

* [postObjectsPositionSearch](#postobjectspositionsearch) - Read company positions

## postObjectsPositionSearch

Returns a list of the company positions, filtered by the specified attributes.  <br /><b>Supported user types:</b> Service.<br><br><b>Note</b>

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostObjectsPositionSearchSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PostObjectsPositionSearchSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.objects.postObjectsPositionSearch({
    fields: [
      "string",
    ],
    filters: [
      {
        fieldId: "string",
        operator: "string",
        values: [
          "string",
        ],
      },
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [shared.GetPositionsRequest](../../sdk/models/shared/getpositionsrequest.md)                                     | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `security`                                                                                                       | [operations.PostObjectsPositionSearchSecurity](../../sdk/models/operations/postobjectspositionsearchsecurity.md) | :heavy_check_mark:                                                                                               | The security requirements to use for the request.                                                                |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostObjectsPositionSearchResponse](../../sdk/models/operations/postobjectspositionsearchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
