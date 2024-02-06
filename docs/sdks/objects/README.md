# Objects
(*objects*)

### Available Operations

* [postObjectsPositionSearch](#postobjectspositionsearch) - Read company positions

## postObjectsPositionSearch

Returns a list of the company positions, filtered by the specified attributes.  <br /><br><b>Note</b>

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.objects.postObjectsPositionSearch({
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
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.GetPositionsRequest](../../sdk/models/shared/getpositionsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostObjectsPositionSearchResponse](../../sdk/models/operations/postobjectspositionsearchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
