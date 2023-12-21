<!-- Start SDK Example Usage [usage] -->
```typescript
import { Hibob } from "hibob";
import { ImportMethod } from "hibob/sdk/models/operations";

async function run() {
    const sdk = new Hibob({
        security: {
            password: "<YOUR_PASSWORD_HERE>",
        },
    });

    const res = await sdk.attendance.postAttendanceImportImportMethod({
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
    });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->