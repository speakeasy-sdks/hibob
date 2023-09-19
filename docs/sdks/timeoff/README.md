# TimeOff

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
  basic: {
    password: "",
    username: "",
  },
};

sdk.timeOff.deleteTimeoffEmployeesIdRequestsRequestId({
  id: "aebc0b80-a692-44d3-b2ec-fcc8f895010f",
  requestId: 342104,
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
  date: new RFCDate("2020-07-13"),
  id: "3d6fa180-4e54-4c82-b168-a363c8873e48",
  policyType: "numquam",
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
  basic: {
    password: "",
    username: "",
  },
};

sdk.timeOff.getTimeoffEmployeesIdRequestsRequestId({
  id: "380b1f6b-8ca2-475a-a0a0-4c495cc69917",
  requestId: 78246,
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
  basic: {
    password: "",
    username: "",
  },
};

sdk.timeOff.getTimeoffOuttoday({
  includeHourly: false,
  includePrivate: false,
  siteId: 725316,
  today: new RFCDate("2022-11-26"),
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
  policyName: "cumque",
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
  policyTypeName: "dicta",
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
  policyType: "harum",
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
  policyType: "facere",
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
  basic: {
    password: "",
    username: "",
  },
};

sdk.timeOff.getTimeoffRequestsChanges({
  since: new RFCDate("2022-10-16"),
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
  from: new RFCDate("2020-02-09"),
  includeHourly: false,
  includePending: false,
  includePrivate: false,
  to: new RFCDate("2022-04-15"),
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
    amount: 5239.95,
    effectiveDate: new RFCDate("2021-03-25"),
    policyType: "cum",
    reason: "pariatur",
  },
  id: "fc4ccca9-9bc7-4fc0-b2dc-e10873e42b00",
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
    approver: "eum",
    dailyHours: 873320,
    dailyMinutes: 431253,
    dayPortion: SubmitTimeoffRequestDayPortion.Morning,
    description: "voluptatum",
    endDate: new RFCDate("2022-01-22"),
    endDatePortion: SubmitTimeoffRequestEndDatePortion.Morning,
    hours: 697994,
    minutes: 645544,
    policyType: "atque",
    reasonCode: 344856,
    requestRangeType: SubmitTimeoffRequestRequestRangeType.PortionOnRange,
    skipManagerApproval: false,
    startDate: new RFCDate("2022-05-02"),
    startDatePortion: SubmitTimeoffRequestStartDatePortion.AllDay,
  },
  id: "8208c54f-efa9-4c95-b2ea-c5565d307cfe",
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
      "voluptates",
    ],
  },
  policyType: "praesentium",
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

