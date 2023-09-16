# Tables

### Available Operations

* [deletePeopleIdEmploymentEntryId](#deletepeopleidemploymententryid) - Deletes an employment entry from a given employee's employment history.
* [deletePeopleIdEquitiesEntryId](#deletepeopleidequitiesentryid) - Deletes an equity grant for an employee.
* [deletePeopleIdSalariesEntryId](#deletepeopleidsalariesentryid) - Deletes a salary entry from the employee's list.
* [deletePeopleIdTrainingEntryId](#deletepeopleidtrainingentryid) - Deletes any training records for an employee.
* [deletePeopleIdVariableEntryId](#deletepeopleidvariableentryid) - Deletes a training record for an employee.
* [deletePeopleIdWorkEntryId](#deletepeopleidworkentryid) - Deletes a work entry from a given employee's work history.
* [getPeopleIdEmployment](#getpeopleidemployment) - List employee's employment history.
* [getPeopleIdEquities](#getpeopleidequities) - List the employee's equity grants.
* [getPeopleIdLifecycle](#getpeopleidlifecycle) - List employee's life-cycle status history.
* [getPeopleIdSalaries](#getpeopleidsalaries) - List employee's salary history.
* [getPeopleIdTraining](#getpeopleidtraining) - List the employee's training records.
* [getPeopleIdVariable](#getpeopleidvariable) - List employee's variable payments
* [getPeopleIdWork](#getpeopleidwork) - List employee's work history
* [postPeopleIdEmployment](#postpeopleidemployment) - Creates a new employment entry for a given employee.
* [postPeopleIdEquities](#postpeopleidequities) - Creates a new equity grant for a given employee.
* [postPeopleIdSalaries](#postpeopleidsalaries) - Creates a new salary entry for a given employee.
* [postPeopleIdTraining](#postpeopleidtraining) - Creates a new training records for a given employee
* [postPeopleIdVariable](#postpeopleidvariable) - Creates a new variable payment for a given employee.
* [postPeopleIdWork](#postpeopleidwork) - Creates a new work entry for a given employee.
* [putPeopleIdEmploymentEntryId](#putpeopleidemploymententryid) - Updates an employment entry from a given employee's employment history.
* [putPeopleIdEquitiesEntryId](#putpeopleidequitiesentryid) - Updates an equity grant for an employee
* [putPeopleIdWorkEntryId](#putpeopleidworkentryid) - Updates a work entry from employee's work history

## deletePeopleIdEmploymentEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdEmploymentEntryIdResponse, DeletePeopleIdEmploymentEntryIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeletePeopleIdEmploymentEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.tables.deletePeopleIdEmploymentEntryId({
  entryId: 253625,
  id: "43da7ce5-2b89-45c5-b7c6-454efb0b3489",
}, operationSecurity).then((res: DeletePeopleIdEmploymentEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeletePeopleIdEmploymentEntryIdRequest](../../models/operations/deletepeopleidemploymententryidrequest.md)   | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `security`                                                                                                               | [operations.DeletePeopleIdEmploymentEntryIdSecurity](../../models/operations/deletepeopleidemploymententryidsecurity.md) | :heavy_check_mark:                                                                                                       | The security requirements to use for the request.                                                                        |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeletePeopleIdEmploymentEntryIdResponse](../../models/operations/deletepeopleidemploymententryidresponse.md)>**


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

sdk.tables.deletePeopleIdEquitiesEntryId({
  entryId: 375994,
  id: "c3ca5acf-be2f-4d57-8757-7929177deac6",
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

sdk.tables.deletePeopleIdSalariesEntryId({
  entryId: 311486,
  id: "6ecb5734-09e3-4eb1-a5a2-b12eb07f116d",
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

sdk.tables.deletePeopleIdTrainingEntryId({
  entryId: 729448,
  id: "99545fc9-5fa8-4897-8e18-9dbb30fcb33e",
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

sdk.tables.deletePeopleIdVariableEntryId({
  entryId: 644420,
  id: "055b197c-d44e-42f5-ad82-d3513bb6f48b",
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


## deletePeopleIdWorkEntryId

<b>Supported user types:</b> Employee, Service

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdWorkEntryIdResponse, DeletePeopleIdWorkEntryIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeletePeopleIdWorkEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.tables.deletePeopleIdWorkEntryId({
  entryId: 392430,
  id: "56bcdb35-ff2e-44b2-b537-a8cd9e7319c1",
}, operationSecurity).then((res: DeletePeopleIdWorkEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeletePeopleIdWorkEntryIdRequest](../../models/operations/deletepeopleidworkentryidrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.DeletePeopleIdWorkEntryIdSecurity](../../models/operations/deletepeopleidworkentryidsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeletePeopleIdWorkEntryIdResponse](../../models/operations/deletepeopleidworkentryidresponse.md)>**


## getPeopleIdEmployment

Returns a list of employment history entries for a given employee.<br /><b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>. - Basic: [] - Bearer: []

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdEmploymentResponse, GetPeopleIdEmploymentSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetPeopleIdEmploymentSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.tables.getPeopleIdEmployment({
  id: "77d525f7-7b11-44ee-b52f-f785fc37814d",
}, operationSecurity).then((res: GetPeopleIdEmploymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetPeopleIdEmploymentRequest](../../models/operations/getpeopleidemploymentrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetPeopleIdEmploymentSecurity](../../models/operations/getpeopleidemploymentsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPeopleIdEmploymentResponse](../../models/operations/getpeopleidemploymentresponse.md)>**


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

sdk.tables.getPeopleIdEquities({
  id: "4c98e0c2-bb89-4eb7-9dad-636c600503d8",
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


## getPeopleIdLifecycle

Returns a list of life-cycle history entries for a given employee.<br /><b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: TThe values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdLifecycleResponse, GetPeopleIdLifecycleSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetPeopleIdLifecycleSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.tables.getPeopleIdLifecycle({
  id: "bb31180f-739a-4e9e-857e-b809e2810331",
}, operationSecurity).then((res: GetPeopleIdLifecycleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetPeopleIdLifecycleRequest](../../models/operations/getpeopleidlifecyclerequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.GetPeopleIdLifecycleSecurity](../../models/operations/getpeopleidlifecyclesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetPeopleIdLifecycleResponse](../../models/operations/getpeopleidlifecycleresponse.md)>**


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

sdk.tables.getPeopleIdSalaries({
  id: "f3981d4c-700b-4607-b3c9-3c73b9da3f2c",
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

sdk.tables.getPeopleIdTraining({
  id: "eda7e23f-2257-4411-baf4-b7544e472e80",
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
import { GetPeopleIdVariableResponse, GetPeopleIdVariableSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetPeopleIdVariableSecurity = {
  bearer: "",
};

sdk.tables.getPeopleIdVariable({
  id: "2857a5b4-0463-4a7d-975f-1400e764ad73",
}, operationSecurity).then((res: GetPeopleIdVariableResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetPeopleIdVariableRequest](../../models/operations/getpeopleidvariablerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetPeopleIdVariableSecurity](../../models/operations/getpeopleidvariablesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetPeopleIdVariableResponse](../../models/operations/getpeopleidvariableresponse.md)>**


## getPeopleIdWork

Returns a list of work history entries for a given employee.<br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdWorkResponse, GetPeopleIdWorkSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetPeopleIdWorkSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.tables.getPeopleIdWork({
  id: "34ec1b78-1b36-4a08-888d-100efada200e",
}, operationSecurity).then((res: GetPeopleIdWorkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetPeopleIdWorkRequest](../../models/operations/getpeopleidworkrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetPeopleIdWorkSecurity](../../models/operations/getpeopleidworksecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetPeopleIdWorkResponse](../../models/operations/getpeopleidworkresponse.md)>**


## postPeopleIdEmployment

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdEmploymentResponse, PostPeopleIdEmploymentSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostPeopleIdEmploymentSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.tables.postPeopleIdEmployment({
  employmentEntry: {
    contract: "hic",
    effectiveDate: new RFCDate("2022-09-21"),
    id: 185448,
    reason: "qui",
    salaryPayType: "necessitatibus",
    type: "harum",
  },
  id: "2164cf9a-b836-46c7-a3ff-da9e06bee482",
}, operationSecurity).then((res: PostPeopleIdEmploymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostPeopleIdEmploymentRequest](../../models/operations/postpeopleidemploymentrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.PostPeopleIdEmploymentSecurity](../../models/operations/postpeopleidemploymentsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostPeopleIdEmploymentResponse](../../models/operations/postpeopleidemploymentresponse.md)>**


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

sdk.tables.postPeopleIdEquities({
  equityEntry: {
    consentNumber: "ullam",
    effectiveDate: new RFCDate("2022-08-22"),
    equityType: "voluptatibus",
    exercisePrice: {
      currency: "eligendi",
      value: 620.35,
    },
    grantDate: new RFCDate("2022-09-13"),
    grantNumber: 1002.51,
    grantStatus: "enim",
    grantType: "optio",
    id: 525951,
    optionExpiration: new RFCDate("2022-04-18"),
    quantity: 9670.55,
    reason: "a",
    vestingCommencementDate: new RFCDate("2022-10-06"),
    vestingSchedule: 5524.39,
    vestingTerm: "ullam",
  },
  id: "44ec42de-fcce-48f1-9777-73e63562a7b4",
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

sdk.tables.postPeopleIdSalaries({
  salaryEntry: {
    base: {
      currency: "ipsa",
      value: 5220.62,
    },
    effectiveDate: new RFCDate("2022-11-23"),
    id: 331452,
    payFrequency: "saepe",
    payPeriod: "neque",
    reason: "facere",
  },
  id: "48fdaf31-3a1f-45fd-9425-9c0b36f25ea9",
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

sdk.tables.postPeopleIdTraining({
  trainingEntry: {
    cost: {
      currency: "ut",
      value: 2567.68,
    },
    description: "tenetur",
    documentId: 2367.9,
    effectiveDate: new RFCDate("2022-02-07"),
    endDate: new RFCDate("2022-08-06"),
    frequency: "minus",
    id: 68880,
    name: "May Huel",
    reason: "ducimus",
    startDate: new RFCDate("2022-05-07"),
    status: "architecto",
  },
  id: "26243835-bbc0-45a2-ba45-cefc5fde10a0",
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

sdk.tables.postPeopleIdVariable({
  variableEntry: {
    amount: {
      currency: "nobis",
      value: 8981.93,
    },
    companyPercent: 1559.78,
    departmentPercent: 1189.32,
    effectiveDate: new RFCDate("2022-05-28"),
    id: 892708,
    individualPercent: 3548.21,
    paymentPeriod: "architecto",
    reason: "accusantium",
    variableType: "perferendis",
  },
  id: "19c6dc5e-3476-4279-9bfb-be6949fb2bb4",
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


## postPeopleIdWork

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdWorkResponse, PostPeopleIdWorkSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostPeopleIdWorkSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.tables.postPeopleIdWork({
  workEntry: {
    customColumns: {},
    department: "recusandae",
    effectiveDate: new RFCDate("2021-01-03"),
    id: 904440,
    reason: "autem",
    reportsTo: {
      displayName: "quo",
      email: "Roslyn_Hilll24@gmail.com",
      firstName: "Lysanne",
      id: "debd5dae-a4c5-406a-8aa9-4c02644cf5e9",
      surname: "nulla",
    },
    site: "error",
    siteId: 653000,
    title: "Mrs.",
  },
  id: "578adc1a-c600-4dec-801a-c802e2ec09ff",
}, operationSecurity).then((res: PostPeopleIdWorkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PostPeopleIdWorkRequest](../../models/operations/postpeopleidworkrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.PostPeopleIdWorkSecurity](../../models/operations/postpeopleidworksecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostPeopleIdWorkResponse](../../models/operations/postpeopleidworkresponse.md)>**


## putPeopleIdEmploymentEntryId

<b>Supported user types:</b> Employee<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutPeopleIdEmploymentEntryIdResponse, PutPeopleIdEmploymentEntryIdSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PutPeopleIdEmploymentEntryIdSecurity = {
  bearer: "",
};

sdk.tables.putPeopleIdEmploymentEntryId({
  employmentEntry: {
    contract: "laudantium",
    effectiveDate: new RFCDate("2022-12-31"),
    id: 992667,
    reason: "rem",
    salaryPayType: "dicta",
    type: "suscipit",
  },
  entryId: 938257,
  id: "f3477c13-e902-4c14-925b-0960a668151a",
}, operationSecurity).then((res: PutPeopleIdEmploymentEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PutPeopleIdEmploymentEntryIdRequest](../../models/operations/putpeopleidemploymententryidrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.PutPeopleIdEmploymentEntryIdSecurity](../../models/operations/putpeopleidemploymententryidsecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PutPeopleIdEmploymentEntryIdResponse](../../models/operations/putpeopleidemploymententryidresponse.md)>**


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

sdk.tables.putPeopleIdEquitiesEntryId({
  equityEntry: {
    consentNumber: "incidunt",
    effectiveDate: new RFCDate("2022-10-31"),
    equityType: "deserunt",
    exercisePrice: {
      currency: "delectus",
      value: 6095.37,
    },
    grantDate: new RFCDate("2022-10-19"),
    grantNumber: 8054.63,
    grantStatus: "quis",
    grantType: "cupiditate",
    id: 303253,
    optionExpiration: new RFCDate("2021-01-15"),
    quantity: 5120.81,
    reason: "velit",
    vestingCommencementDate: new RFCDate("2022-04-23"),
    vestingSchedule: 3638.45,
    vestingTerm: "ipsa",
  },
  entryId: 787916,
  id: "f876ffb9-01c6-4ecb-b4e2-43cf789ffafe",
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


## putPeopleIdWorkEntryId

<b>Supported user types:</b> Employee<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutPeopleIdWorkEntryIdResponse, PutPeopleIdWorkEntryIdSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PutPeopleIdWorkEntryIdSecurity = {
  bearer: "",
};

sdk.tables.putPeopleIdWorkEntryId({
  workEntry: {
    customColumns: {},
    department: "nulla",
    effectiveDate: new RFCDate("2022-04-13"),
    id: 246577,
    reason: "officiis",
    reportsTo: {
      displayName: "enim",
      email: "Stevie.Keeling63@yahoo.com",
      firstName: "Ola",
      id: "184c2b9c-247c-4883-b3a4-0e1942f32e55",
      surname: "eaque",
    },
    site: "exercitationem",
    siteId: 331269,
    title: "Ms.",
  },
  entryId: 320326,
  id: "6f5d56d0-bd0a-4f2d-be13-db4f62cba3f8",
}, operationSecurity).then((res: PutPeopleIdWorkEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PutPeopleIdWorkEntryIdRequest](../../models/operations/putpeopleidworkentryidrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.PutPeopleIdWorkEntryIdSecurity](../../models/operations/putpeopleidworkentryidsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PutPeopleIdWorkEntryIdResponse](../../models/operations/putpeopleidworkentryidresponse.md)>**

