# Payroll
(*payroll*)

### Available Operations

* [deletePeopleIdEquitiesEntryId](#deletepeopleidequitiesentryid) - Deletes an equity grant for an employee.
* [deletePeopleIdSalariesEntryId](#deletepeopleidsalariesentryid) - Deletes a salary entry from the employee's list.
* [deletePeopleIdTrainingEntryId](#deletepeopleidtrainingentryid) - Deletes any training records for an employee.
* [deletePeopleIdVariableEntryId](#deletepeopleidvariableentryid) - Deletes a training record for an employee.
* [getPayrollHistory](#getpayrollhistory) - Read payroll history.
* [getPeopleIdEquities](#getpeopleidequities) - List the employee's equity grants.
* [getPeopleIdSalaries](#getpeopleidsalaries) - List employee's salary history.
* [getPeopleIdTraining](#getpeopleidtraining) - List the employee's training records.
* [getPeopleIdVariable](#getpeopleidvariable) - List employee's variable payments
* [postPeopleIdEquities](#postpeopleidequities) - Creates a new equity grant for a given employee.
* [postPeopleIdSalaries](#postpeopleidsalaries) - Creates a new salary entry for a given employee.
* [postPeopleIdTraining](#postpeopleidtraining) - Creates a new training records for a given employee
* [postPeopleIdVariable](#postpeopleidvariable) - Creates a new variable payment for a given employee.
* [putPeopleIdEquitiesEntryId](#putpeopleidequitiesentryid) - Updates an equity grant for an employee

## deletePeopleIdEquitiesEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdEquitiesEntryIdResponse, DeletePeopleIdEquitiesEntryIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeletePeopleIdEquitiesEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.deletePeopleIdEquitiesEntryId({
  entryId: 447926,
  id: "11e5b7fd-2ed0-4289-a1cd-dc692601fb57",
}, operationSecurity).then((res: DeletePeopleIdEquitiesEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeletePeopleIdEquitiesEntryIdRequest](../../models/operations/deletepeopleidequitiesentryidrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.DeletePeopleIdEquitiesEntryIdSecurity](../../models/operations/deletepeopleidequitiesentryidsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeletePeopleIdEquitiesEntryIdResponse](../../models/operations/deletepeopleidequitiesentryidresponse.md)>**


## deletePeopleIdSalariesEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdSalariesEntryIdResponse, DeletePeopleIdSalariesEntryIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeletePeopleIdSalariesEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.deletePeopleIdSalariesEntryId({
  entryId: 420075,
  id: "b0d5f0d3-0c5f-4bb2-9870-53202c73d5fe",
}, operationSecurity).then((res: DeletePeopleIdSalariesEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeletePeopleIdSalariesEntryIdRequest](../../models/operations/deletepeopleidsalariesentryidrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.DeletePeopleIdSalariesEntryIdSecurity](../../models/operations/deletepeopleidsalariesentryidsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeletePeopleIdSalariesEntryIdResponse](../../models/operations/deletepeopleidsalariesentryidresponse.md)>**


## deletePeopleIdTrainingEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdTrainingEntryIdResponse, DeletePeopleIdTrainingEntryIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeletePeopleIdTrainingEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.deletePeopleIdTrainingEntryId({
  entryId: 608253,
  id: "b90c2890-9b3f-4e49-a8d9-cbf48633323f",
}, operationSecurity).then((res: DeletePeopleIdTrainingEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeletePeopleIdTrainingEntryIdRequest](../../models/operations/deletepeopleidtrainingentryidrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.DeletePeopleIdTrainingEntryIdSecurity](../../models/operations/deletepeopleidtrainingentryidsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeletePeopleIdTrainingEntryIdResponse](../../models/operations/deletepeopleidtrainingentryidresponse.md)>**


## deletePeopleIdVariableEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdVariableEntryIdResponse, DeletePeopleIdVariableEntryIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeletePeopleIdVariableEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.deletePeopleIdVariableEntryId({
  entryId: 569574,
  id: "b77f3a41-0067-44eb-b692-80d1ba77a89e",
}, operationSecurity).then((res: DeletePeopleIdVariableEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeletePeopleIdVariableEntryIdRequest](../../models/operations/deletepeopleidvariableentryidrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.DeletePeopleIdVariableEntryIdSecurity](../../models/operations/deletepeopleidvariableentryidsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeletePeopleIdVariableEntryIdResponse](../../models/operations/deletepeopleidvariableentryidresponse.md)>**


## getPayrollHistory

<b>Supported user types:</b> Employee

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPayrollHistoryResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.payroll.getPayrollHistory({
  department: "distinctio",
  showInactive: false,
}).then((res: GetPayrollHistoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetPayrollHistoryRequest](../../models/operations/getpayrollhistoryrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetPayrollHistoryResponse](../../models/operations/getpayrollhistoryresponse.md)>**


## getPeopleIdEquities

Returns a list of equity grants for a given employee.<br /><b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdEquitiesResponse, GetPeopleIdEquitiesSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetPeopleIdEquitiesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.getPeopleIdEquities({
  id: "f737ae42-03ce-45e6-a95d-8a0d446ce2af",
}, operationSecurity).then((res: GetPeopleIdEquitiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetPeopleIdEquitiesRequest](../../models/operations/getpeopleidequitiesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetPeopleIdEquitiesSecurity](../../models/operations/getpeopleidequitiessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetPeopleIdEquitiesResponse](../../models/operations/getpeopleidequitiesresponse.md)>**


## getPeopleIdSalaries

Returns a list of salary history entries for a given employee.<br /><b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdSalariesResponse, GetPeopleIdSalariesSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetPeopleIdSalariesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.getPeopleIdSalaries({
  id: "7a73cf3b-e453-4f87-8b32-6b5a73429cdb",
}, operationSecurity).then((res: GetPeopleIdSalariesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetPeopleIdSalariesRequest](../../models/operations/getpeopleidsalariesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetPeopleIdSalariesSecurity](../../models/operations/getpeopleidsalariessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetPeopleIdSalariesResponse](../../models/operations/getpeopleidsalariesresponse.md)>**


## getPeopleIdTraining

Returns a list of training records for a given employee<br /><b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdTrainingResponse, GetPeopleIdTrainingSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetPeopleIdTrainingSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.getPeopleIdTraining({
  id: "1a8422bb-679d-4232-a715-bf0cbb1e31b8",
}, operationSecurity).then((res: GetPeopleIdTrainingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetPeopleIdTrainingRequest](../../models/operations/getpeopleidtrainingrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetPeopleIdTrainingSecurity](../../models/operations/getpeopleidtrainingsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetPeopleIdTrainingResponse](../../models/operations/getpeopleidtrainingresponse.md)>**


## getPeopleIdVariable

Returns a list of variable payments for a given employee.<br /><b>Supported user types:</b> Employee<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdVariableResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.payroll.getPeopleIdVariable({
  id: "b90f3443-a110-48e0-adcf-4b921879fce9",
}).then((res: GetPeopleIdVariableResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetPeopleIdVariableRequest](../../models/operations/getpeopleidvariablerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetPeopleIdVariableResponse](../../models/operations/getpeopleidvariableresponse.md)>**


## postPeopleIdEquities

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdEquitiesResponse, PostPeopleIdEquitiesSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostPeopleIdEquitiesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.postPeopleIdEquities({
  equityEntry: {
    consentNumber: "quis",
    effectiveDate: new RFCDate("2022-01-15"),
    equityType: "voluptate",
    exercisePrice: {
      currency: "consectetur",
      value: 8788.7,
    },
    grantDate: new RFCDate("2021-07-10"),
    grantNumber: 9413.78,
    grantStatus: "distinctio",
    grantType: "quod",
    id: 486160,
    optionExpiration: new RFCDate("2021-08-01"),
    quantity: 8742.88,
    reason: "ducimus",
    vestingCommencementDate: new RFCDate("2022-02-26"),
    vestingSchedule: 8489.44,
    vestingTerm: "sequi",
  },
  id: "9c0f5d2c-ff7c-470a-8562-6d436813f16d",
}, operationSecurity).then((res: PostPeopleIdEquitiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PostPeopleIdEquitiesRequest](../../models/operations/postpeopleidequitiesrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.PostPeopleIdEquitiesSecurity](../../models/operations/postpeopleidequitiessecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostPeopleIdEquitiesResponse](../../models/operations/postpeopleidequitiesresponse.md)>**


## postPeopleIdSalaries

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdSalariesResponse, PostPeopleIdSalariesSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostPeopleIdSalariesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.postPeopleIdSalaries({
  salaryEntry: {
    base: {
      currency: "excepturi",
      value: 9729.2,
    },
    effectiveDate: new RFCDate("2022-01-15"),
    id: 788873,
    payFrequency: "saepe",
    payPeriod: "ea",
    reason: "impedit",
  },
  id: "556146c3-e250-4fb0-88c4-2e141aac366c",
}, operationSecurity).then((res: PostPeopleIdSalariesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PostPeopleIdSalariesRequest](../../models/operations/postpeopleidsalariesrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.PostPeopleIdSalariesSecurity](../../models/operations/postpeopleidsalariessecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostPeopleIdSalariesResponse](../../models/operations/postpeopleidsalariesresponse.md)>**


## postPeopleIdTraining

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdTrainingResponse, PostPeopleIdTrainingSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostPeopleIdTrainingSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.postPeopleIdTraining({
  trainingEntry: {
    cost: {
      currency: "quas",
      value: 8296.03,
    },
    description: "nulla",
    documentId: 3790.34,
    effectiveDate: new RFCDate("2022-10-22"),
    endDate: new RFCDate("2022-09-29"),
    frequency: "explicabo",
    id: 591935,
    name: "Minnie Gutkowski",
    reason: "esse",
    startDate: new RFCDate("2022-06-23"),
    status: "fuga",
  },
  id: "7bd466d2-8c10-4ab3-8dca-4251904e523c",
}, operationSecurity).then((res: PostPeopleIdTrainingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PostPeopleIdTrainingRequest](../../models/operations/postpeopleidtrainingrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.PostPeopleIdTrainingSecurity](../../models/operations/postpeopleidtrainingsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostPeopleIdTrainingResponse](../../models/operations/postpeopleidtrainingresponse.md)>**


## postPeopleIdVariable

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>:The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdVariableResponse, PostPeopleIdVariableSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostPeopleIdVariableSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.postPeopleIdVariable({
  variableEntry: {
    amount: {
      currency: "esse",
      value: 9251.64,
    },
    companyPercent: 446.12,
    departmentPercent: 7151.79,
    effectiveDate: new RFCDate("2021-07-12"),
    id: 76956,
    individualPercent: 4694.98,
    paymentPeriod: "totam",
    reason: "accusamus",
    variableType: "aliquam",
  },
  id: "796f2a70-c688-4282-aa48-2562f222e981",
}, operationSecurity).then((res: PostPeopleIdVariableResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PostPeopleIdVariableRequest](../../models/operations/postpeopleidvariablerequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.PostPeopleIdVariableSecurity](../../models/operations/postpeopleidvariablesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostPeopleIdVariableResponse](../../models/operations/postpeopleidvariableresponse.md)>**


## putPeopleIdEquitiesEntryId

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>. - Basic: [] - Bearer: []

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutPeopleIdEquitiesEntryIdResponse, PutPeopleIdEquitiesEntryIdSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PutPeopleIdEquitiesEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.payroll.putPeopleIdEquitiesEntryId({
  equityEntry: {
    consentNumber: "esse",
    effectiveDate: new RFCDate("2020-05-10"),
    equityType: "veritatis",
    exercisePrice: {
      currency: "esse",
      value: 8003.79,
    },
    grantDate: new RFCDate("2021-03-31"),
    grantNumber: 3990.25,
    grantStatus: "quasi",
    grantType: "saepe",
    id: 426306,
    optionExpiration: new RFCDate("2022-01-20"),
    quantity: 6996.22,
    reason: "occaecati",
    vestingCommencementDate: new RFCDate("2022-04-14"),
    vestingSchedule: 7567.79,
    vestingTerm: "sit",
  },
  entryId: 636061,
  id: "b3c20c4f-3789-4fd8-b1f9-9dd2efd121aa",
}, operationSecurity).then((res: PutPeopleIdEquitiesEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PutPeopleIdEquitiesEntryIdRequest](../../models/operations/putpeopleidequitiesentryidrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.PutPeopleIdEquitiesEntryIdSecurity](../../models/operations/putpeopleidequitiesentryidsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PutPeopleIdEquitiesEntryIdResponse](../../models/operations/putpeopleidequitiesentryidresponse.md)>**

