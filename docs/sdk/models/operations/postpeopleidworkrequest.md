# PostPeopleIdWorkRequest


## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `workEntry`                                                                              | [shared.WorkEntry](../../../sdk/models/shared/workentry.md)                              | :heavy_check_mark:                                                                       | Work entry to add. This must not conflict with another entry on the same effective date. |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Employee ID.                                                                             |