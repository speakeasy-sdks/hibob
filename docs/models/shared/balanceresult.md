# BalanceResult

Balance result.


## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `annualAllowance`                              | *number*                                       | :heavy_minus_sign:                             | Annual allowance.                              |
| `employeeId`                                   | *string*                                       | :heavy_minus_sign:                             | Employee ID.                                   |
| `pointInTime`                                  | [RFCDate](../../types/rfcdate.md)              | :heavy_minus_sign:                             | The balance date.                              |
| `policy`                                       | *string*                                       | :heavy_minus_sign:                             | Policy name.                                   |
| `startingBalance`                              | *number*                                       | :heavy_minus_sign:                             | The balance as of the cycle start date.        |
| `startingBalanceAsOf`                          | [RFCDate](../../types/rfcdate.md)              | :heavy_minus_sign:                             | The cycle start date.                          |
| `totalAdminAdjustments`                        | *number*                                       | :heavy_minus_sign:                             | Total number of days/hours manually adjusted.  |
| `totalBalanceAsOfDate`                         | *number*                                       | :heavy_minus_sign:                             | The retrieved balance as of this date.         |
| `totalRoundedBalanceAsOfDate`                  | *number*                                       | :heavy_minus_sign:                             | The retrieved rounded balance as of this date. |
| `totalSystemAdjustments`                       | *number*                                       | :heavy_minus_sign:                             | Total number of days/hours adjusted.           |
| `totalTaken`                                   | *number*                                       | :heavy_minus_sign:                             | Total number of days/hours taken.              |