# WorkEntry

Work entry to add. This must not conflict with another entry on the same effective date.


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `customColumns`                                                         | [WorkEntryCustomColumns](../../models/shared/workentrycustomcolumns.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `department`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | The employee's department.                                              |
| `effectiveDate`                                                         | [RFCDate](../../types/rfcdate.md)                                       | :heavy_check_mark:                                                      | The date this entry becomes effective.                                  |
| `id`                                                                    | *number*                                                                | :heavy_minus_sign:                                                      | ID.                                                                     |
| `reason`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | The reason for this change.                                             |
| `reportsTo`                                                             | [WorkEntryReportsTo](../../models/shared/workentryreportsto.md)         | :heavy_minus_sign:                                                      | The manager's details.                                                  |
| `site`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | The employee's site.                                                    |
| `siteId`                                                                | *number*                                                                | :heavy_minus_sign:                                                      | The employee's site ID.                                                 |
| `title`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | The employee's job title.                                               |