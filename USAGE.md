<!-- Start SDK Example Usage -->
```typescript
import { Hibob } from "hibob";
import {
    ImportMethod,
    PostAttendanceImportImportMethodSecurity,
} from "hibob/dist/sdk/models/operations";

(async () => {
    const sdk = new Hibob();
    const operationSecurity: PostAttendanceImportImportMethodSecurity = {
        password: "",
        username: "",
    };

    const res = await sdk.attendance.postAttendanceImportImportMethod(
        {
            importAttendanceData: {
                dateTimeFormat: "yyyy-MM-dd hh:mm a",
                idType: "string",
                requests: [
                    {
                        clockIn: "2022-06-12T08:00",
                        clockOut: "2022-06-12T17:00",
                        id: "12356733644",
                    },
                ],
            },
            importMethod: ImportMethod.Immediate,
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->