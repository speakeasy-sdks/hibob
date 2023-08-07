# objects

### Available Operations

* [postObjectsPositionSearch](#postobjectspositionsearch) - Read company positions

## postObjectsPositionSearch

Returns a list of the company positions, filtered by the specified attributes.  <br /><b>Supported user types:</b> Service.<br><br><b>Note</b>

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostObjectsPositionSearchResponse, PostObjectsPositionSearchSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostObjectsPositionSearchSecurity = {
  password: "",
  username: "",
};

sdk.objects.postObjectsPositionSearch({
  fields: [
    "maxime",
    "deleniti",
  ],
  filters: [
    {
      fieldId: "in",
      operator: "architecto",
      values: [
        "repudiandae",
      ],
    },
    {
      fieldId: "ullam",
      operator: "expedita",
      values: [
        "repellat",
        "quibusdam",
      ],
    },
    {
      fieldId: "sed",
      operator: "saepe",
      values: [
        "accusantium",
        "consequuntur",
        "praesentium",
        "natus",
      ],
    },
  ],
  includeHumanReadable: false,
}, operationSecurity).then((res: PostObjectsPositionSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [shared.GetPositionsRequest](../../models/shared/getpositionsrequest.md)                                     | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.PostObjectsPositionSearchSecurity](../../models/operations/postobjectspositionsearchsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostObjectsPositionSearchResponse](../../models/operations/postobjectspositionsearchresponse.md)>**

