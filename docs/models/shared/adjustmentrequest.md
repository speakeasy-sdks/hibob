# AdjustmentRequest


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `adjustmentType`                                               | [shared.AdjustmentType](../../models/shared/adjustmenttype.md) | :heavy_minus_sign:                                             | Adjustment type - balance or time used.                        |
| `amount`                                                       | *number*                                                       | :heavy_minus_sign:                                             | The amount of days/hours to add/subtract.                      |
| `effectiveDate`                                                | [RFCDate](../../types/rfcdate.md)                              | :heavy_minus_sign:                                             | The date this adjustment becomes effective.                    |
| `policyType`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Policy type name.                                              |
| `reason`                                                       | *string*                                                       | :heavy_minus_sign:                                             | A reason for this adjustment.                                  |