# Attendance
(*attendance*)

### Available Operations

* [postAttendanceImportImportMethod](#postattendanceimportimportmethod) - Import attendance data

## postAttendanceImportImportMethod

Import attendance data

### Example Usage

```typescript
import { Hibob } from "hibob";
import { ImportMethod } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.attendance.postAttendanceImportImportMethod({
    importAttendanceData: {
      dateTimeFormat: "yyyy-MM-dd hh:mm a",
      idType: "<value>",
      requests: [
        {
          clockIn: "2022-06-12T08:00",
          clockOut: "2022-06-12T17:00",
          id: "12356733644",
        },
      ],
    },
    importMethod: ImportMethod.Immediate,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAttendanceImportImportMethodRequest](../../sdk/models/operations/postattendanceimportimportmethodrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostAttendanceImportImportMethodResponse](../../sdk/models/operations/postattendanceimportimportmethodresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
