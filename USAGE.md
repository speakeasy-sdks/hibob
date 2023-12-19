<!-- Start SDK Example Usage [usage] -->
```typescript
import { Hibob } from "hibob";
import {
    ImportMethod,
    PostAttendanceImportImportMethodSecurity,
} from "hibob/sdk/models/operations";

async function run() {
    const sdk = new Hibob();

    const operationSecurity: PostAttendanceImportImportMethodSecurity = {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
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

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->