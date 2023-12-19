# Objects
(*objects*)

### Available Operations

* [postObjectsPositionSearch](#postobjectspositionsearch) - Read company positions

## postObjectsPositionSearch

Returns a list of the company positions, filtered by the specified attributes.  <br /><b>Supported user types:</b> Service.<br><br><b>Note</b>

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostObjectsPositionSearchSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: PostObjectsPositionSearchSecurity = {
    password: "<YOUR_PASSWORD_HERE>",
    username: "<YOUR_USERNAME_HERE>",
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

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.GetPositionsRequest](../../sdk/models/shared/getpositionsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostObjectsPositionSearchSecurity](../../sdk/models/operations/postobjectspositionsearchsecurity.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostObjectsPositionSearchResponse](../../sdk/models/operations/postobjectspositionsearchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
