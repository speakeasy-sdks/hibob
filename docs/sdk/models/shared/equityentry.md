# EquityEntry


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `consentNumber`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | Consent number.                                                     |
| `effectiveDate`                                                     | [RFCDate](../../types/rfcdate.md)                                   | :heavy_check_mark:                                                  | The date this entry becomes effective.                              |
| `equityType`                                                        | *string*                                                            | :heavy_check_mark:                                                  | The type of the grant.                                              |
| `exercisePrice`                                                     | [shared.CurrencyValue](../../../sdk/models/shared/currencyvalue.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `grantDate`                                                         | [RFCDate](../../types/rfcdate.md)                                   | :heavy_minus_sign:                                                  | Date the equity was granted.                                        |
| `grantNumber`                                                       | *number*                                                            | :heavy_minus_sign:                                                  | The Grant number for employee.                                      |
| `grantStatus`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | Grant status. one of: Granted, Pending Approval                     |
| `grantType`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | Grant type. One of: Initial Grant, Merit Grant                      |
| `id`                                                                | *number*                                                            | :heavy_minus_sign:                                                  | ID.                                                                 |
| `optionExpiration`                                                  | [RFCDate](../../types/rfcdate.md)                                   | :heavy_minus_sign:                                                  | Date the options expire.                                            |
| `quantity`                                                          | *number*                                                            | :heavy_check_mark:                                                  | The number of equities granted.                                     |
| `reason`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | The reason for this change.                                         |
| `vestingCommencementDate`                                           | [RFCDate](../../types/rfcdate.md)                                   | :heavy_minus_sign:                                                  | Vesting commencement date.                                          |
| `vestingSchedule`                                                   | *number*                                                            | :heavy_minus_sign:                                                  | The vesting schedule ID assigned to this grant.                     |
| `vestingTerm`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | Terms for exercising this grant.                                    |