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
import { DeletePeopleIdEquitiesEntryIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: DeletePeopleIdEquitiesEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.deletePeopleIdEquitiesEntryId({
    entryId: 258748,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { DeletePeopleIdSalariesEntryIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: DeletePeopleIdSalariesEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.deletePeopleIdSalariesEntryId({
    entryId: 831741,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { DeletePeopleIdTrainingEntryIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: DeletePeopleIdTrainingEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.deletePeopleIdTrainingEntryId({
    entryId: 375590,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { DeletePeopleIdVariableEntryIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: DeletePeopleIdVariableEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.deletePeopleIdVariableEntryId({
    entryId: 318576,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.payroll.getPayrollHistory({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetPeopleIdEquitiesSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetPeopleIdEquitiesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.getPeopleIdEquities({
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetPeopleIdSalariesSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetPeopleIdSalariesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.getPeopleIdSalaries({
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetPeopleIdTrainingSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetPeopleIdTrainingSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.getPeopleIdTraining({
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.payroll.getPeopleIdVariable({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { PostPeopleIdEquitiesSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdEquitiesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.postPeopleIdEquities({
    equityEntry: {
      effectiveDate: new RFCDate("2022-11-21"),
      equityType: "string",
      exercisePrice: {
        currency: "Rial Omani",
        value: 954.25,
      },
      quantity: 5285.48,
    },
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { PostPeopleIdSalariesSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdSalariesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.postPeopleIdSalaries({
    salaryEntry: {
      base: {
        currency: "Cuban Peso Convertible",
        value: 3657.11,
      },
      effectiveDate: new RFCDate("2021-03-10"),
      payPeriod: "string",
    },
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { PostPeopleIdTrainingSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdTrainingSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.postPeopleIdTraining({
    trainingEntry: {
      cost: {
        currency: "Danish Krone",
        value: 9851.31,
      },
      effectiveDate: new RFCDate("2022-07-06"),
    },
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { PostPeopleIdVariableSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdVariableSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.postPeopleIdVariable({
    variableEntry: {
      amount: {
        currency: "Algerian Dinar",
        value: 54.57,
      },
      effectiveDate: new RFCDate("2022-08-17"),
      paymentPeriod: "string",
    },
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { PutPeopleIdEquitiesEntryIdSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PutPeopleIdEquitiesEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.payroll.putPeopleIdEquitiesEntryId({
    equityEntry: {
      effectiveDate: new RFCDate("2023-01-17"),
      equityType: "string",
      exercisePrice: {
        currency: "Seychelles Rupee",
        value: 5610.76,
      },
      quantity: 3860.21,
    },
    entryId: 190967,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PutPeopleIdEquitiesEntryIdRequest](../../models/operations/putpeopleidequitiesentryidrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.PutPeopleIdEquitiesEntryIdSecurity](../../models/operations/putpeopleidequitiesentryidsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PutPeopleIdEquitiesEntryIdResponse](../../models/operations/putpeopleidequitiesentryidresponse.md)>**

