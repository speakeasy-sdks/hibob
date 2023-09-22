# Attendance

### Available Operations

* [postAttendanceImportImportMethod](#postattendanceimportimportmethod) - Import attendance data

## postAttendanceImportImportMethod

<b>Supported user types:</b> Service

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  PostAttendanceImportImportMethodImportMethod,
  PostAttendanceImportImportMethodResponse,
  PostAttendanceImportImportMethodSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostAttendanceImportImportMethodSecurity = {
  password: "",
  username: "",
};

sdk.attendance.postAttendanceImportImportMethod({
  importAttendanceData: {
    dateTimeFormat: "yyyy-MM-dd hh:mm a",
    idType: "unde",
    requests: [
      {
        clockIn: "2022-06-12T08:00",
        clockOut: "2022-06-12T17:00",
        id: "12356733644",
      },
    ],
  },
  importMethod: PostAttendanceImportImportMethodImportMethod.Immediate,
}, operationSecurity).then((res: PostAttendanceImportImportMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PostAttendanceImportImportMethodRequest](../../models/operations/postattendanceimportimportmethodrequest.md)   | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `security`                                                                                                                 | [operations.PostAttendanceImportImportMethodSecurity](../../models/operations/postattendanceimportimportmethodsecurity.md) | :heavy_check_mark:                                                                                                         | The security requirements to use for the request.                                                                          |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PostAttendanceImportImportMethodResponse](../../models/operations/postattendanceimportimportmethodresponse.md)>**

