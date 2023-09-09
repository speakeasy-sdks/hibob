<!-- Start SDK Example Usage -->


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
    idType: "corrupti",
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
<!-- End SDK Example Usage -->