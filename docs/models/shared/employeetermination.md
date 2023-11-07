# EmployeeTermination


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `lastDayOfWork`                                            | [RFCDate](../../types/rfcdate.md)                          | :heavy_minus_sign:                                         | N/A                                                        |
| `noticePeriod`                                             | [shared.NoticePeriod](../../models/shared/noticeperiod.md) | :heavy_minus_sign:                                         | Notice period length                                       |
| `reasonType`                                               | *string*                                                   | :heavy_minus_sign:                                         | The ID of the 'lifecycleReasonType' list entry             |
| `terminationDate`                                          | [RFCDate](../../types/rfcdate.md)                          | :heavy_check_mark:                                         | The employee's termination date                            |
| `terminationReason`                                        | *string*                                                   | :heavy_minus_sign:                                         | The ID of the 'terminationReason' list entry               |