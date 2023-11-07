# TimeOff
(*.timeOff*)

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
import { DeleteTimeoffEmployeesIdRequestsRequestIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: DeleteTimeoffEmployeesIdRequestsRequestIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.timeOff.deleteTimeoffEmployeesIdRequestsRequestId({
    id: "<ID>",
    requestId: 313155,
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeoffEmployeesIdBalanceSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetTimeoffEmployeesIdBalanceSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.timeOff.getTimeoffEmployeesIdBalance({
    date: new RFCDate("2021-02-20"),
    id: "<ID>",
    policyType: "string",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeoffEmployeesIdRequestsRequestIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetTimeoffEmployeesIdRequestsRequestIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.timeOff.getTimeoffEmployeesIdRequestsRequestId({
    id: "<ID>",
    requestId: 662911,
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeoffOuttodaySecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetTimeoffOuttodaySecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.timeOff.getTimeoffOuttoday({}, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeoffPoliciesSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetTimeoffPoliciesSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.timeOff.getTimeoffPolicies({
    policyName: "string",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeoffPoliciesNamesSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetTimeoffPoliciesNamesSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.timeOff.getTimeoffPoliciesNames({
    policyTypeName: "string",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeoffPolicyTypesSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetTimeoffPolicyTypesSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.timeOff.getTimeoffPolicyTypes(operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeoffPolicyTypesPolicyTypeSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetTimeoffPolicyTypesPolicyTypeSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.timeOff.getTimeoffPolicyTypesPolicyType({
    policyType: "string",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeoffPolicyTypesPolicyTypeReasonCodesSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetTimeoffPolicyTypesPolicyTypeReasonCodesSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.timeOff.getTimeoffPolicyTypesPolicyTypeReasonCodes({
    policyType: "string",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeoffRequestsChangesSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetTimeoffRequestsChangesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.timeOff.getTimeoffRequestsChanges({
    since: new RFCDate("2021-06-11"),
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTimeoffWhosoutSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetTimeoffWhosoutSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.timeOff.getTimeoffWhosout({
    from: new RFCDate("2021-03-11"),
    to: new RFCDate("2022-04-17"),
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { PostTimeoffEmployeesIdAdjustmentsSecurity } from "hibob/dist/sdk/models/operations";
import { AdjustmentType } from "hibob/dist/sdk/models/shared";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PostTimeoffEmployeesIdAdjustmentsSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.timeOff.postTimeoffEmployeesIdAdjustments({
    adjustmentRequest: {},
    id: "<ID>",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { PostTimeoffEmployeesIdRequestsSecurity } from "hibob/dist/sdk/models/operations";
import {
  DayPortion,
  EndDatePortion,
  StartDatePortion,
  SubmitTimeoffRequestRequestRangeType,
} from "hibob/dist/sdk/models/shared";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PostTimeoffEmployeesIdRequestsSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.timeOff.postTimeoffEmployeesIdRequests({
    submitTimeoffRequest: {
      policyType: "string",
      startDate: new RFCDate("2021-04-15"),
    },
    id: "<ID>",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { PostTimeoffPolicyTypesPolicyTypeReasonCodesSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PostTimeoffPolicyTypesPolicyTypeReasonCodesSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.timeOff.postTimeoffPolicyTypesPolicyTypeReasonCodes({
    reasonCodesNames: {
      reasonCodes: [
        "string",
      ],
    },
    policyType: "string",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.PostTimeoffPolicyTypesPolicyTypeReasonCodesRequest](../../models/operations/posttimeoffpolicytypespolicytypereasoncodesrequest.md)   | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `security`                                                                                                                                       | [operations.PostTimeoffPolicyTypesPolicyTypeReasonCodesSecurity](../../models/operations/posttimeoffpolicytypespolicytypereasoncodessecurity.md) | :heavy_check_mark:                                                                                                                               | The security requirements to use for the request.                                                                                                |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PostTimeoffPolicyTypesPolicyTypeReasonCodesResponse](../../models/operations/posttimeoffpolicytypespolicytypereasoncodesresponse.md)>**

