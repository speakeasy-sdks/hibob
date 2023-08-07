# timeOff

### Available Operations

* [deleteTimeoffEmployeesIdRequestsRequestId](#deletetimeoffemployeesidrequestsrequestid) - Cancel an existing timeoff request
* [getTimeoffEmployeesIdBalance](#gettimeoffemployeesidbalance) - Get the balance for a given employee
* [getTimeoffEmployeesIdRequestsRequestId](#gettimeoffemployeesidrequestsrequestid) - Get the details of an existing timeoff request.
* [getTimeoffOuttoday](#gettimeoffouttoday) - Read a list of who's out of the office today or on the specified date.
* [getTimeoffPolicies](#gettimeoffpolicies) - Get Policy details.
* [getTimeoffPoliciesNames](#gettimeoffpoliciesnames) - Get a list of policy names for a given policy type.
* [getTimeoffPolicyTypes](#gettimeoffpolicytypes) - Get all policy types names.
* [getTimeoffPolicyTypesPolicyType](#gettimeoffpolicytypespolicytype) - Get Policy type details
* [getTimeoffPolicyTypesPolicyTypeReasonCodes](#gettimeoffpolicytypespolicytypereasoncodes) - Get Policy type reason codes
* [getTimeoffRequestsChanges](#gettimeoffrequestschanges) - Get all new/deleted time off requests since the specified date.
* [getTimeoffWhosout](#gettimeoffwhosout) - Read a list of who's out of the office.
* [postTimeoffEmployeesIdAdjustments](#posttimeoffemployeesidadjustments) - Create a balance adjustment.
* [postTimeoffEmployeesIdRequests](#posttimeoffemployeesidrequests) - Submit a new time off request.
* [postTimeoffPolicyTypesPolicyTypeReasonCodes](#posttimeoffpolicytypespolicytypereasoncodes) - Add a list of reason codes for a given policy type.

## deleteTimeoffEmployeesIdRequestsRequestId

Cancels an existing time off request.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  DeleteTimeoffEmployeesIdRequestsRequestIdResponse,
  DeleteTimeoffEmployeesIdRequestsRequestIdSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeleteTimeoffEmployeesIdRequestsRequestIdSecurity = {
  bearer: "",
};

sdk.timeOff.deleteTimeoffEmployeesIdRequestsRequestId({
  id: "dd3d6fa1-804e-454c-82f1-68a363c8873e",
  requestId: 271306,
}, operationSecurity).then((res: DeleteTimeoffEmployeesIdRequestsRequestIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.DeleteTimeoffEmployeesIdRequestsRequestIdRequest](../../models/operations/deletetimeoffemployeesidrequestsrequestidrequest.md)   | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `security`                                                                                                                                   | [operations.DeleteTimeoffEmployeesIdRequestsRequestIdSecurity](../../models/operations/deletetimeoffemployeesidrequestsrequestidsecurity.md) | :heavy_check_mark:                                                                                                                           | The security requirements to use for the request.                                                                                            |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.DeleteTimeoffEmployeesIdRequestsRequestIdResponse](../../models/operations/deletetimeoffemployeesidrequestsrequestidresponse.md)>**


## getTimeoffEmployeesIdBalance

Retrieve the balance for a given employee, for a given policy type, as of a given date.<br /><b>Supported user types:</b> Service

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTimeoffEmployeesIdBalanceResponse, GetTimeoffEmployeesIdBalanceSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: GetTimeoffEmployeesIdBalanceSecurity = {
  password: "",
  username: "",
};

sdk.timeOff.getTimeoffEmployeesIdBalance({
  date: new RFCDate("2022-06-26"),
  id: "380b1f6b-8ca2-475a-a0a0-4c495cc69917",
  policyType: "inventore",
}, operationSecurity).then((res: GetTimeoffEmployeesIdBalanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetTimeoffEmployeesIdBalanceRequest](../../models/operations/gettimeoffemployeesidbalancerequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.GetTimeoffEmployeesIdBalanceSecurity](../../models/operations/gettimeoffemployeesidbalancesecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetTimeoffEmployeesIdBalanceResponse](../../models/operations/gettimeoffemployeesidbalanceresponse.md)>**


## getTimeoffEmployeesIdRequestsRequestId

Supplies detailed info about an existing time off request.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  GetTimeoffEmployeesIdRequestsRequestIdResponse,
  GetTimeoffEmployeesIdRequestsRequestIdSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetTimeoffEmployeesIdRequestsRequestIdSecurity = {
  bearer: "",
};

sdk.timeOff.getTimeoffEmployeesIdRequestsRequestId({
  id: "b51c1bdb-1cf4-4b88-8ebd-fc4ccca99bc7",
  requestId: 944033,
}, operationSecurity).then((res: GetTimeoffEmployeesIdRequestsRequestIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetTimeoffEmployeesIdRequestsRequestIdRequest](../../models/operations/gettimeoffemployeesidrequestsrequestidrequest.md)   | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `security`                                                                                                                             | [operations.GetTimeoffEmployeesIdRequestsRequestIdSecurity](../../models/operations/gettimeoffemployeesidrequestsrequestidsecurity.md) | :heavy_check_mark:                                                                                                                     | The security requirements to use for the request.                                                                                      |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetTimeoffEmployeesIdRequestsRequestIdResponse](../../models/operations/gettimeoffemployeesidrequestsrequestidresponse.md)>**


## getTimeoffOuttoday

Returns the list of people that have a time off request today or on the specified date.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTimeoffOuttodayResponse, GetTimeoffOuttodaySecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: GetTimeoffOuttodaySecurity = {
  bearer: "",
};

sdk.timeOff.getTimeoffOuttoday({
  includeHourly: false,
  today: new RFCDate("2022-11-21"),
}, operationSecurity).then((res: GetTimeoffOuttodayResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetTimeoffOuttodayRequest](../../models/operations/gettimeoffouttodayrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.GetTimeoffOuttodaySecurity](../../models/operations/gettimeoffouttodaysecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetTimeoffOuttodayResponse](../../models/operations/gettimeoffouttodayresponse.md)>**


## getTimeoffPolicies

Get details about a given policy.<br /><b>Supported user types:</b> Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTimeoffPoliciesResponse, GetTimeoffPoliciesSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetTimeoffPoliciesSecurity = {
  password: "",
  username: "",
};

sdk.timeOff.getTimeoffPolicies({
  policyName: "soluta",
}, operationSecurity).then((res: GetTimeoffPoliciesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetTimeoffPoliciesRequest](../../models/operations/gettimeoffpoliciesrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.GetTimeoffPoliciesSecurity](../../models/operations/gettimeoffpoliciessecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetTimeoffPoliciesResponse](../../models/operations/gettimeoffpoliciesresponse.md)>**


## getTimeoffPoliciesNames

Get a list of policy names for the user's defined policy type.<br /><b>Supported user types:</b> Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTimeoffPoliciesNamesResponse, GetTimeoffPoliciesNamesSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetTimeoffPoliciesNamesSecurity = {
  password: "",
  username: "",
};

sdk.timeOff.getTimeoffPoliciesNames({
  policyTypeName: "fugit",
}, operationSecurity).then((res: GetTimeoffPoliciesNamesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetTimeoffPoliciesNamesRequest](../../models/operations/gettimeoffpoliciesnamesrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.GetTimeoffPoliciesNamesSecurity](../../models/operations/gettimeoffpoliciesnamessecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetTimeoffPoliciesNamesResponse](../../models/operations/gettimeoffpoliciesnamesresponse.md)>**


## getTimeoffPolicyTypes

Get a list of all policy type names.<br /><b>Supported user types:</b> Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTimeoffPolicyTypesResponse, GetTimeoffPolicyTypesSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetTimeoffPolicyTypesSecurity = {
  password: "",
  username: "",
};

sdk.timeOff.getTimeoffPolicyTypes(operationSecurity).then((res: GetTimeoffPolicyTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `security`                                                                                           | [operations.GetTimeoffPolicyTypesSecurity](../../models/operations/gettimeoffpolicytypessecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetTimeoffPolicyTypesResponse](../../models/operations/gettimeoffpolicytypesresponse.md)>**


## getTimeoffPolicyTypesPolicyType

Get details about a given policy type.<br /><b>Supported user types:</b> Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTimeoffPolicyTypesPolicyTypeResponse, GetTimeoffPolicyTypesPolicyTypeSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetTimeoffPolicyTypesPolicyTypeSecurity = {
  password: "",
  username: "",
};

sdk.timeOff.getTimeoffPolicyTypesPolicyType({
  policyType: "pariatur",
}, operationSecurity).then((res: GetTimeoffPolicyTypesPolicyTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetTimeoffPolicyTypesPolicyTypeRequest](../../models/operations/gettimeoffpolicytypespolicytyperequest.md)   | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `security`                                                                                                               | [operations.GetTimeoffPolicyTypesPolicyTypeSecurity](../../models/operations/gettimeoffpolicytypespolicytypesecurity.md) | :heavy_check_mark:                                                                                                       | The security requirements to use for the request.                                                                        |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetTimeoffPolicyTypesPolicyTypeResponse](../../models/operations/gettimeoffpolicytypespolicytyperesponse.md)>**


## getTimeoffPolicyTypesPolicyTypeReasonCodes

Get list of reason codes for a given policy type.<br /><b>Supported user types:</b> Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  GetTimeoffPolicyTypesPolicyTypeReasonCodesResponse,
  GetTimeoffPolicyTypesPolicyTypeReasonCodesSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetTimeoffPolicyTypesPolicyTypeReasonCodesSecurity = {
  password: "",
  username: "",
};

sdk.timeOff.getTimeoffPolicyTypesPolicyTypeReasonCodes({
  policyType: "eligendi",
}, operationSecurity).then((res: GetTimeoffPolicyTypesPolicyTypeReasonCodesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.GetTimeoffPolicyTypesPolicyTypeReasonCodesRequest](../../models/operations/gettimeoffpolicytypespolicytypereasoncodesrequest.md)   | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `security`                                                                                                                                     | [operations.GetTimeoffPolicyTypesPolicyTypeReasonCodesSecurity](../../models/operations/gettimeoffpolicytypespolicytypereasoncodessecurity.md) | :heavy_check_mark:                                                                                                                             | The security requirements to use for the request.                                                                                              |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetTimeoffPolicyTypesPolicyTypeReasonCodesResponse](../../models/operations/gettimeoffpolicytypespolicytypereasoncodesresponse.md)>**


## getTimeoffRequestsChanges

Returns the list of time off requests approved or canceled since the specified date.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTimeoffRequestsChangesResponse, GetTimeoffRequestsChangesSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: GetTimeoffRequestsChangesSecurity = {
  bearer: "",
};

sdk.timeOff.getTimeoffRequestsChanges({
  since: new RFCDate("2022-10-01"),
}, operationSecurity).then((res: GetTimeoffRequestsChangesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetTimeoffRequestsChangesRequest](../../models/operations/gettimeoffrequestschangesrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.GetTimeoffRequestsChangesSecurity](../../models/operations/gettimeoffrequestschangessecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetTimeoffRequestsChangesResponse](../../models/operations/gettimeoffrequestschangesresponse.md)>**


## getTimeoffWhosout

Returns time off information for a given date range.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTimeoffWhosoutResponse, GetTimeoffWhosoutSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: GetTimeoffWhosoutSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.timeOff.getTimeoffWhosout({
  from: new RFCDate("2022-06-26"),
  includeHourly: false,
  includePrivate: false,
  to: new RFCDate("2022-10-12"),
}, operationSecurity).then((res: GetTimeoffWhosoutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetTimeoffWhosoutRequest](../../models/operations/gettimeoffwhosoutrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetTimeoffWhosoutSecurity](../../models/operations/gettimeoffwhosoutsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetTimeoffWhosoutResponse](../../models/operations/gettimeoffwhosoutresponse.md)>**


## postTimeoffEmployeesIdAdjustments

Create a balance adjustment for a given employee for a given effective date.<br /><b>Supported user types:</b> Service

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  PostTimeoffEmployeesIdAdjustmentsResponse,
  PostTimeoffEmployeesIdAdjustmentsSecurity,
} from "hibob/dist/sdk/models/operations";
import { AdjustmentRequestAdjustmentType } from "hibob/dist/sdk/models/shared";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostTimeoffEmployeesIdAdjustmentsSecurity = {
  password: "",
  username: "",
};

sdk.timeOff.postTimeoffEmployeesIdAdjustments({
  adjustmentRequest: {
    adjustmentType: AdjustmentRequestAdjustmentType.DaysUsed,
    amount: 2742.95,
    effectiveDate: new RFCDate("2022-04-19"),
    policyType: "doloremque",
    reason: "voluptatem",
  },
  id: "6d678878-ba85-481a-9820-8c54fefa9c95",
}, operationSecurity).then((res: PostTimeoffEmployeesIdAdjustmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PostTimeoffEmployeesIdAdjustmentsRequest](../../models/operations/posttimeoffemployeesidadjustmentsrequest.md)   | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `security`                                                                                                                   | [operations.PostTimeoffEmployeesIdAdjustmentsSecurity](../../models/operations/posttimeoffemployeesidadjustmentssecurity.md) | :heavy_check_mark:                                                                                                           | The security requirements to use for the request.                                                                            |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PostTimeoffEmployeesIdAdjustmentsResponse](../../models/operations/posttimeoffemployeesidadjustmentsresponse.md)>**


## postTimeoffEmployeesIdRequests

Submits a new timeoff request.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostTimeoffEmployeesIdRequestsResponse, PostTimeoffEmployeesIdRequestsSecurity } from "hibob/dist/sdk/models/operations";
import {
  SubmitTimeoffRequestDayPortion,
  SubmitTimeoffRequestEndDatePortion,
  SubmitTimeoffRequestRequestRangeType,
  SubmitTimeoffRequestStartDatePortion,
} from "hibob/dist/sdk/models/shared";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostTimeoffEmployeesIdRequestsSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.timeOff.postTimeoffEmployeesIdRequests({
  submitTimeoffRequest: {
    approver: "doloribus",
    dailyHours: 156098,
    dailyMinutes: 887284,
    dayPortion: SubmitTimeoffRequestDayPortion.Afternoon,
    description: "cumque",
    endDate: new RFCDate("2022-09-08"),
    endDatePortion: SubmitTimeoffRequestEndDatePortion.Morning,
    hours: 365539,
    minutes: 849337,
    policyType: "nesciunt",
    reasonCode: 22331,
    requestRangeType: SubmitTimeoffRequestRequestRangeType.Hours,
    skipManagerApproval: false,
    startDate: new RFCDate("2020-01-12"),
    startDatePortion: SubmitTimeoffRequestStartDatePortion.Afternoon,
  },
  id: "e81206e2-813f-4a4a-81c4-80d3f2132af0",
}, operationSecurity).then((res: PostTimeoffEmployeesIdRequestsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PostTimeoffEmployeesIdRequestsRequest](../../models/operations/posttimeoffemployeesidrequestsrequest.md)   | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `security`                                                                                                             | [operations.PostTimeoffEmployeesIdRequestsSecurity](../../models/operations/posttimeoffemployeesidrequestssecurity.md) | :heavy_check_mark:                                                                                                     | The security requirements to use for the request.                                                                      |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PostTimeoffEmployeesIdRequestsResponse](../../models/operations/posttimeoffemployeesidrequestsresponse.md)>**


## postTimeoffPolicyTypesPolicyTypeReasonCodes

Add a list of reason codes for a given policy type.<br /><b>Supported user types:</b> Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  PostTimeoffPolicyTypesPolicyTypeReasonCodesResponse,
  PostTimeoffPolicyTypesPolicyTypeReasonCodesSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostTimeoffPolicyTypesPolicyTypeReasonCodesSecurity = {
  password: "",
  username: "",
};

sdk.timeOff.postTimeoffPolicyTypesPolicyTypeReasonCodes({
  reasonCodesNames: {
    reasonCodes: [
      "architecto",
    ],
  },
  policyType: "aperiam",
}, operationSecurity).then((res: PostTimeoffPolicyTypesPolicyTypeReasonCodesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.PostTimeoffPolicyTypesPolicyTypeReasonCodesRequest](../../models/operations/posttimeoffpolicytypespolicytypereasoncodesrequest.md)   | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `security`                                                                                                                                       | [operations.PostTimeoffPolicyTypesPolicyTypeReasonCodesSecurity](../../models/operations/posttimeoffpolicytypespolicytypereasoncodessecurity.md) | :heavy_check_mark:                                                                                                                               | The security requirements to use for the request.                                                                                                |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PostTimeoffPolicyTypesPolicyTypeReasonCodesResponse](../../models/operations/posttimeoffpolicytypespolicytypereasoncodesresponse.md)>**

