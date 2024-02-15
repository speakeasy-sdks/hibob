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
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->