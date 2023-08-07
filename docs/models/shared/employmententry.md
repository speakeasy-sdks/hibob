# EmploymentEntry

Employment entry to add. This must not conflict with another entry on the same effective date.


## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `contract`                             | *string*                               | :heavy_minus_sign:                     | Contract.                              |
| `effectiveDate`                        | [RFCDate](../../types/rfcdate.md)      | :heavy_check_mark:                     | The date this entry becomes effective. |
| `id`                                   | *number*                               | :heavy_minus_sign:                     | ID.                                    |
| `reason`                               | *string*                               | :heavy_minus_sign:                     | The reason for this change.            |
| `salaryPayType`                        | *string*                               | :heavy_minus_sign:                     | Salary pay type.                       |
| `type`                                 | *string*                               | :heavy_minus_sign:                     | Type.                                  |