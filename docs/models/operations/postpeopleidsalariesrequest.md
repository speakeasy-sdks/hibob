# PostPeopleIdSalariesRequest


## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `salaryEntry`                                                                              | [shared.SalaryEntry](../../models/shared/salaryentry.md)                                   | :heavy_check_mark:                                                                         | Salary entry to add. This must not conflict with another entry on the same effective date. |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Employee ID.                                                                               |