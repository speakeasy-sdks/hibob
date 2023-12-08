# People
(*people*)

### Available Operations

* [deletePeopleIdEmploymentEntryId](#deletepeopleidemploymententryid) - Deletes an employment entry from a given employee's employment history.
* [deletePeopleIdEquitiesEntryId](#deletepeopleidequitiesentryid) - Deletes an equity grant for an employee.
* [deletePeopleIdSalariesEntryId](#deletepeopleidsalariesentryid) - Deletes a salary entry from the employee's list.
* [deletePeopleIdTrainingEntryId](#deletepeopleidtrainingentryid) - Deletes any training records for an employee.
* [deletePeopleIdVariableEntryId](#deletepeopleidvariableentryid) - Deletes a training record for an employee.
* [deletePeopleIdWorkEntryId](#deletepeopleidworkentryid) - Deletes a work entry from a given employee's work history.
* [getAvatars](#getavatars) - Read avatar for an employee email
* [getAvatarsEmployeeId](#getavatarsemployeeid) - Read avatar for an employee ID.
* [getMyAvatar](#getmyavatar) - Read avatar for logged-in user
* [~~getPeople~~](#getpeople) - Read all company employees :warning: **Deprecated**
* [~~getPeopleIdentifier~~](#getpeopleidentifier) - Read company employee by ID. :warning: **Deprecated**
* [getPeopleIdEmployment](#getpeopleidemployment) - List employee's employment history.
* [getPeopleIdEquities](#getpeopleidequities) - List the employee's equity grants.
* [getPeopleIdLifecycle](#getpeopleidlifecycle) - List employee's life-cycle status history.
* [getPeopleIdSalaries](#getpeopleidsalaries) - List employee's salary history.
* [getPeopleIdTraining](#getpeopleidtraining) - List the employee's training records.
* [getPeopleIdVariable](#getpeopleidvariable) - List employee's variable payments
* [getPeopleIdWork](#getpeopleidwork) - List employee's work history
* [getProfiles](#getprofiles) - Read the public profile section of all active employees.
* [postEmployeesEmployeeIdInvitations](#postemployeesemployeeidinvitations) - Invite an employee with a welcome wizard ID.
* [postEmployeesEmployeeIdStartDate](#postemployeesemployeeidstartdate) - Set or update an employee's start date.
* [postEmployeesIdentifierTerminate](#postemployeesidentifierterminate) - Terminate company employee.
* [postEmployeesIdentifierUninvite](#postemployeesidentifieruninvite) - Revoke access to Bob for an employee.
* [postPeople](#postpeople) - Create company employee.
* [postPeopleSearch](#postpeoplesearch) - Search for employees
* [postPeopleIdentifier](#postpeopleidentifier) - Read company employee fields by employee ID.
* [postPeopleIdEmployment](#postpeopleidemployment) - Creates a new employment entry for a given employee.
* [postPeopleIdEquities](#postpeopleidequities) - Creates a new equity grant for a given employee.
* [postPeopleIdSalaries](#postpeopleidsalaries) - Creates a new salary entry for a given employee.
* [postPeopleIdTraining](#postpeopleidtraining) - Creates a new training records for a given employee
* [postPeopleIdVariable](#postpeopleidvariable) - Creates a new variable payment for a given employee.
* [postPeopleIdWork](#postpeopleidwork) - Creates a new work entry for a given employee.
* [putAvatarsEmployeeId](#putavatarsemployeeid) - Upload employee's avatar by image url
* [putPeopleIdentifier](#putpeopleidentifier) - Update company employee.
* [putPeopleIdEmail](#putpeopleidemail) - Update an employee's email address.
* [putPeopleIdEmploymentEntryId](#putpeopleidemploymententryid) - Updates an employment entry from a given employee's employment history.
* [putPeopleIdEquitiesEntryId](#putpeopleidequitiesentryid) - Updates an equity grant for an employee
* [putPeopleIdWorkEntryId](#putpeopleidworkentryid) - Updates a work entry from employee's work history

## deletePeopleIdEmploymentEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdEmploymentEntryIdSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: DeletePeopleIdEmploymentEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.deletePeopleIdEmploymentEntryId({
    entryId: 511526,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.DeletePeopleIdEmploymentEntryIdRequest](../../sdk/models/operations/deletepeopleidemploymententryidrequest.md)   | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `security`                                                                                                                   | [operations.DeletePeopleIdEmploymentEntryIdSecurity](../../sdk/models/operations/deletepeopleidemploymententryidsecurity.md) | :heavy_check_mark:                                                                                                           | The security requirements to use for the request.                                                                            |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.DeletePeopleIdEmploymentEntryIdResponse](../../sdk/models/operations/deletepeopleidemploymententryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePeopleIdEquitiesEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdEquitiesEntryIdSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: DeletePeopleIdEquitiesEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.deletePeopleIdEquitiesEntryId({
    entryId: 258748,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeletePeopleIdEquitiesEntryIdRequest](../../sdk/models/operations/deletepeopleidequitiesentryidrequest.md)   | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `security`                                                                                                               | [operations.DeletePeopleIdEquitiesEntryIdSecurity](../../sdk/models/operations/deletepeopleidequitiesentryidsecurity.md) | :heavy_check_mark:                                                                                                       | The security requirements to use for the request.                                                                        |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeletePeopleIdEquitiesEntryIdResponse](../../sdk/models/operations/deletepeopleidequitiesentryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePeopleIdSalariesEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdSalariesEntryIdSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: DeletePeopleIdSalariesEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.deletePeopleIdSalariesEntryId({
    entryId: 831741,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeletePeopleIdSalariesEntryIdRequest](../../sdk/models/operations/deletepeopleidsalariesentryidrequest.md)   | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `security`                                                                                                               | [operations.DeletePeopleIdSalariesEntryIdSecurity](../../sdk/models/operations/deletepeopleidsalariesentryidsecurity.md) | :heavy_check_mark:                                                                                                       | The security requirements to use for the request.                                                                        |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeletePeopleIdSalariesEntryIdResponse](../../sdk/models/operations/deletepeopleidsalariesentryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePeopleIdTrainingEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdTrainingEntryIdSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: DeletePeopleIdTrainingEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.deletePeopleIdTrainingEntryId({
    entryId: 375590,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeletePeopleIdTrainingEntryIdRequest](../../sdk/models/operations/deletepeopleidtrainingentryidrequest.md)   | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `security`                                                                                                               | [operations.DeletePeopleIdTrainingEntryIdSecurity](../../sdk/models/operations/deletepeopleidtrainingentryidsecurity.md) | :heavy_check_mark:                                                                                                       | The security requirements to use for the request.                                                                        |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeletePeopleIdTrainingEntryIdResponse](../../sdk/models/operations/deletepeopleidtrainingentryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePeopleIdVariableEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdVariableEntryIdSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: DeletePeopleIdVariableEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.deletePeopleIdVariableEntryId({
    entryId: 318576,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeletePeopleIdVariableEntryIdRequest](../../sdk/models/operations/deletepeopleidvariableentryidrequest.md)   | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `security`                                                                                                               | [operations.DeletePeopleIdVariableEntryIdSecurity](../../sdk/models/operations/deletepeopleidvariableentryidsecurity.md) | :heavy_check_mark:                                                                                                       | The security requirements to use for the request.                                                                        |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeletePeopleIdVariableEntryIdResponse](../../sdk/models/operations/deletepeopleidvariableentryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePeopleIdWorkEntryId

<b>Supported user types:</b> Employee, Service

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleIdWorkEntryIdSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: DeletePeopleIdWorkEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.deletePeopleIdWorkEntryId({
    entryId: 681162,
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeletePeopleIdWorkEntryIdRequest](../../sdk/models/operations/deletepeopleidworkentryidrequest.md)   | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `security`                                                                                                       | [operations.DeletePeopleIdWorkEntryIdSecurity](../../sdk/models/operations/deletepeopleidworkentryidsecurity.md) | :heavy_check_mark:                                                                                               | The security requirements to use for the request.                                                                |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeletePeopleIdWorkEntryIdResponse](../../sdk/models/operations/deletepeopleidworkentryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAvatars

Returns the avatar image URL of the employee.<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.people.getAvatars({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetAvatarsRequest](../../sdk/models/operations/getavatarsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetAvatarsResponse](../../sdk/models/operations/getavatarsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAvatarsEmployeeId

Returns the avatar image URL of the employee.<b>Supported user types:</b> Employee

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.people.getAvatarsEmployeeId({
    employeeId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetAvatarsEmployeeIdRequest](../../sdk/models/operations/getavatarsemployeeidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetAvatarsEmployeeIdResponse](../../sdk/models/operations/getavatarsemployeeidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getMyAvatar

Returns the avatar image URL of the logged-in user.<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.people.getMyAvatar();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetMyAvatarResponse](../../sdk/models/operations/getmyavatarresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~getPeople~~

<b>Note:</b> Deprecated at the end of March 2024. Please use <b>/people/search</b> ("Search for employees") instead. <br/><br/> This returns a list of all active employees. The data is filtered based on the access level of the logged-in user. Only viewable categories are returned.<br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: GetPeopleSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.getPeople({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetPeopleRequest](../../sdk/models/operations/getpeoplerequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetPeopleSecurity](../../sdk/models/operations/getpeoplesecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetPeopleResponse](../../sdk/models/operations/getpeopleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~getPeopleIdentifier~~

<b>Note:</b> Deprecated at the end of March 2024. Please use <b>POST /people/{identifier}</b> ("Read company employee fields by ID.") instead. <br/><br/> Returns the employee by the specified ID.<br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdentifierSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: GetPeopleIdentifierSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.getPeopleIdentifier({
    fields: [
      "string",
    ],
    identifier: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetPeopleIdentifierRequest](../../sdk/models/operations/getpeopleidentifierrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetPeopleIdentifierSecurity](../../sdk/models/operations/getpeopleidentifiersecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPeopleIdentifierResponse](../../sdk/models/operations/getpeopleidentifierresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPeopleIdEmployment

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>Returns a list of employment history entries for a given employee.<br /><b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>. - Basic: [] - Bearer: []

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdEmploymentSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: GetPeopleIdEmploymentSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.getPeopleIdEmployment({
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetPeopleIdEmploymentRequest](../../sdk/models/operations/getpeopleidemploymentrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.GetPeopleIdEmploymentSecurity](../../sdk/models/operations/getpeopleidemploymentsecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetPeopleIdEmploymentResponse](../../sdk/models/operations/getpeopleidemploymentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPeopleIdEquities

Returns a list of equity grants for a given employee.<br /><b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdEquitiesSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: GetPeopleIdEquitiesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.getPeopleIdEquities({
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetPeopleIdEquitiesRequest](../../sdk/models/operations/getpeopleidequitiesrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetPeopleIdEquitiesSecurity](../../sdk/models/operations/getpeopleidequitiessecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPeopleIdEquitiesResponse](../../sdk/models/operations/getpeopleidequitiesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPeopleIdLifecycle

Returns a list of life-cycle history entries for a given employee.<br /><b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: TThe values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdLifecycleSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: GetPeopleIdLifecycleSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.getPeopleIdLifecycle({
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetPeopleIdLifecycleRequest](../../sdk/models/operations/getpeopleidlifecyclerequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.GetPeopleIdLifecycleSecurity](../../sdk/models/operations/getpeopleidlifecyclesecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetPeopleIdLifecycleResponse](../../sdk/models/operations/getpeopleidlifecycleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPeopleIdSalaries

Returns a list of salary history entries for a given employee.<br /><b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdSalariesSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: GetPeopleIdSalariesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.getPeopleIdSalaries({
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetPeopleIdSalariesRequest](../../sdk/models/operations/getpeopleidsalariesrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetPeopleIdSalariesSecurity](../../sdk/models/operations/getpeopleidsalariessecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPeopleIdSalariesResponse](../../sdk/models/operations/getpeopleidsalariesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPeopleIdTraining

Returns a list of training records for a given employee<br /><b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdTrainingSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: GetPeopleIdTrainingSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.getPeopleIdTraining({
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetPeopleIdTrainingRequest](../../sdk/models/operations/getpeopleidtrainingrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetPeopleIdTrainingSecurity](../../sdk/models/operations/getpeopleidtrainingsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPeopleIdTrainingResponse](../../sdk/models/operations/getpeopleidtrainingresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPeopleIdVariable

Returns a list of variable payments for a given employee.<br /><b>Supported user types:</b> Employee<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.people.getPeopleIdVariable({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetPeopleIdVariableRequest](../../sdk/models/operations/getpeopleidvariablerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetPeopleIdVariableResponse](../../sdk/models/operations/getpeopleidvariableresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPeopleIdWork

Returns a list of work history entries for a given employee.<br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdWorkSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: GetPeopleIdWorkSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.getPeopleIdWork({
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetPeopleIdWorkRequest](../../sdk/models/operations/getpeopleidworkrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetPeopleIdWorkSecurity](../../sdk/models/operations/getpeopleidworksecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetPeopleIdWorkResponse](../../sdk/models/operations/getpeopleidworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getProfiles

Returns the public section of all  active employees of the logged-in user company.<br /><b>Supported user types:</b> Employee.<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value. Use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.people.getProfiles({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetProfilesRequest](../../sdk/models/operations/getprofilesrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetProfilesResponse](../../sdk/models/operations/getprofilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postEmployeesEmployeeIdInvitations

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostEmployeesEmployeeIdInvitationsSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostEmployeesEmployeeIdInvitationsSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postEmployeesEmployeeIdInvitations({
    invitationByWizard: {
      welcomeWizardId: 823551,
    },
    employeeId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PostEmployeesEmployeeIdInvitationsRequest](../../sdk/models/operations/postemployeesemployeeidinvitationsrequest.md)   | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `security`                                                                                                                         | [operations.PostEmployeesEmployeeIdInvitationsSecurity](../../sdk/models/operations/postemployeesemployeeidinvitationssecurity.md) | :heavy_check_mark:                                                                                                                 | The security requirements to use for the request.                                                                                  |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PostEmployeesEmployeeIdInvitationsResponse](../../sdk/models/operations/postemployeesemployeeidinvitationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postEmployeesEmployeeIdStartDate

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostEmployeesEmployeeIdStartDateSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostEmployeesEmployeeIdStartDateSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postEmployeesEmployeeIdStartDate({
    startDateUpdate: {
      startDate: new RFCDate("2022-12-10"),
    },
    employeeId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostEmployeesEmployeeIdStartDateRequest](../../sdk/models/operations/postemployeesemployeeidstartdaterequest.md)   | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `security`                                                                                                                     | [operations.PostEmployeesEmployeeIdStartDateSecurity](../../sdk/models/operations/postemployeesemployeeidstartdatesecurity.md) | :heavy_check_mark:                                                                                                             | The security requirements to use for the request.                                                                              |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostEmployeesEmployeeIdStartDateResponse](../../sdk/models/operations/postemployeesemployeeidstartdateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postEmployeesIdentifierTerminate

This changes the employee’s status to Terminated according to specified termination date. <br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostEmployeesIdentifierTerminateSecurity } from "hibob/dist/sdk/models/operations";
import { EmployeeTerminationUnit } from "hibob/dist/sdk/models/shared";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostEmployeesIdentifierTerminateSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postEmployeesIdentifierTerminate({
    employeeTermination: {
      noticePeriod: {},
      terminationDate: new RFCDate("2023-04-21"),
    },
    identifier: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostEmployeesIdentifierTerminateRequest](../../sdk/models/operations/postemployeesidentifierterminaterequest.md)   | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `security`                                                                                                                     | [operations.PostEmployeesIdentifierTerminateSecurity](../../sdk/models/operations/postemployeesidentifierterminatesecurity.md) | :heavy_check_mark:                                                                                                             | The security requirements to use for the request.                                                                              |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostEmployeesIdentifierTerminateResponse](../../sdk/models/operations/postemployeesidentifierterminateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postEmployeesIdentifierUninvite

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostEmployeesIdentifierUninviteSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostEmployeesIdentifierUninviteSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postEmployeesIdentifierUninvite({
    identifier: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PostEmployeesIdentifierUninviteRequest](../../sdk/models/operations/postemployeesidentifieruninviterequest.md)   | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `security`                                                                                                                   | [operations.PostEmployeesIdentifierUninviteSecurity](../../sdk/models/operations/postemployeesidentifieruninvitesecurity.md) | :heavy_check_mark:                                                                                                           | The security requirements to use for the request.                                                                            |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PostEmployeesIdentifierUninviteResponse](../../sdk/models/operations/postemployeesidentifieruninviteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPeople

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>This creates a new employee record in Bob. You can include only the fields listed in the  [Fields Metadata API](https://apidocs.hibob.com/reference/get_company-people-fields).  <br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostPeopleSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postPeople({
    email: "Lauryn20@hotmail.com",
    firstName: "Addison",
    surname: "string",
    work: {
      site: "string",
      startDate: new RFCDate("2022-06-17"),
    },
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.CreateEmployeeRequest](../../sdk/models/shared/createemployeerequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.PostPeopleSecurity](../../sdk/models/operations/postpeoplesecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PostPeopleResponse](../../sdk/models/operations/postpeopleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPeopleSearch

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>This API returns a list of requested employees with requested fields.  The data is filtered based on the requested fields and access level of the logged-in user.  Only viewable categories are returned.<br /><b>Supported user types:</b> Service.<br> <br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleSearchSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostPeopleSearchSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.people.postPeopleSearch({
    fields: [
      "root.id",
      "root.firstName",
      "root.surname",
      "root.email",
      "work.site",
      "work.department",
    ],
    filters: [
      {
        fieldPath: "root.id",
        operator: "equals",
        values: [
          "employeeId1",
          "employeeId2",
          "employeeId3",
        ],
      },
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.ReadEmployeesRequestReference](../../sdk/models/shared/reademployeesrequestreference.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PostPeopleSearchSecurity](../../sdk/models/operations/postpeoplesearchsecurity.md)   | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PostPeopleSearchResponse](../../sdk/models/operations/postpeoplesearchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPeopleIdentifier

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>Returns the employee's fields by the specified ID or email.<br /><b>Supported user types:</b>Service.<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdentifierSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdentifierSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postPeopleIdentifier({
    readSingleEmployeeRequestReference: {
      fields: [
        "root.id",
        "root.firstName",
        "root.surname",
        "root.email",
        "work.site",
        "work.department",
      ],
    },
    identifier: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostPeopleIdentifierRequest](../../sdk/models/operations/postpeopleidentifierrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.PostPeopleIdentifierSecurity](../../sdk/models/operations/postpeopleidentifiersecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostPeopleIdentifierResponse](../../sdk/models/operations/postpeopleidentifierresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPeopleIdEmployment

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdEmploymentSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdEmploymentSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postPeopleIdEmployment({
    employmentEntry: {
      effectiveDate: new RFCDate("2021-12-05"),
    },
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PostPeopleIdEmploymentRequest](../../sdk/models/operations/postpeopleidemploymentrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.PostPeopleIdEmploymentSecurity](../../sdk/models/operations/postpeopleidemploymentsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostPeopleIdEmploymentResponse](../../sdk/models/operations/postpeopleidemploymentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPeopleIdEquities

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdEquitiesSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdEquitiesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postPeopleIdEquities({
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
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostPeopleIdEquitiesRequest](../../sdk/models/operations/postpeopleidequitiesrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.PostPeopleIdEquitiesSecurity](../../sdk/models/operations/postpeopleidequitiessecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostPeopleIdEquitiesResponse](../../sdk/models/operations/postpeopleidequitiesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPeopleIdSalaries

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdSalariesSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdSalariesSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postPeopleIdSalaries({
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
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostPeopleIdSalariesRequest](../../sdk/models/operations/postpeopleidsalariesrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.PostPeopleIdSalariesSecurity](../../sdk/models/operations/postpeopleidsalariessecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostPeopleIdSalariesResponse](../../sdk/models/operations/postpeopleidsalariesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPeopleIdTraining

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdTrainingSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdTrainingSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postPeopleIdTraining({
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
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostPeopleIdTrainingRequest](../../sdk/models/operations/postpeopleidtrainingrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.PostPeopleIdTrainingSecurity](../../sdk/models/operations/postpeopleidtrainingsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostPeopleIdTrainingResponse](../../sdk/models/operations/postpeopleidtrainingresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPeopleIdVariable

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>:The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdVariableSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdVariableSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postPeopleIdVariable({
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
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostPeopleIdVariableRequest](../../sdk/models/operations/postpeopleidvariablerequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.PostPeopleIdVariableSecurity](../../sdk/models/operations/postpeopleidvariablesecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostPeopleIdVariableResponse](../../sdk/models/operations/postpeopleidvariableresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPeopleIdWork

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdWorkSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostPeopleIdWorkSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.postPeopleIdWork({
    workEntry: {
      customColumns: {},
      effectiveDate: new RFCDate("2023-05-25"),
      reportsTo: {
        id: "<ID>",
      },
    },
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PostPeopleIdWorkRequest](../../sdk/models/operations/postpeopleidworkrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PostPeopleIdWorkSecurity](../../sdk/models/operations/postpeopleidworksecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostPeopleIdWorkResponse](../../sdk/models/operations/postpeopleidworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putAvatarsEmployeeId

Upload an employee's Avatar by providing a URL to the image to upload.<br /><b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.people.putAvatarsEmployeeId({
    uploadAvatar: {
      url: "https://agitated-motor.net",
    },
    employeeId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PutAvatarsEmployeeIdRequest](../../sdk/models/operations/putavatarsemployeeidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PutAvatarsEmployeeIdResponse](../../sdk/models/operations/putavatarsemployeeidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putPeopleIdentifier

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>This updates the employee record in Bob. You can include only the fields listed in the  [Fields Metadata API](https://apidocs.hibob.com/reference/get_company-people-fields) where historical is equal to false.  <br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutPeopleIdentifierSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PutPeopleIdentifierSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.putPeopleIdentifier({
    requestBody: {},
    identifier: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PutPeopleIdentifierRequest](../../sdk/models/operations/putpeopleidentifierrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.PutPeopleIdentifierSecurity](../../sdk/models/operations/putpeopleidentifiersecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PutPeopleIdentifierResponse](../../sdk/models/operations/putpeopleidentifierresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putPeopleIdEmail

Change an employee's email address. If you cannot change the self email an invitation will be sent to the new address to verify the email if the employee is invited/active.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutPeopleIdEmailSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PutPeopleIdEmailSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.putPeopleIdEmail({
    changeEmail: {},
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PutPeopleIdEmailRequest](../../sdk/models/operations/putpeopleidemailrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PutPeopleIdEmailSecurity](../../sdk/models/operations/putpeopleidemailsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PutPeopleIdEmailResponse](../../sdk/models/operations/putpeopleidemailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putPeopleIdEmploymentEntryId

<b>Supported user types:</b> Employee<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.people.putPeopleIdEmploymentEntryId({
    employmentEntry: {
      effectiveDate: new RFCDate("2022-01-16"),
    },
    entryId: 799673,
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PutPeopleIdEmploymentEntryIdRequest](../../sdk/models/operations/putpeopleidemploymententryidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PutPeopleIdEmploymentEntryIdResponse](../../sdk/models/operations/putpeopleidemploymententryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putPeopleIdEquitiesEntryId

<b>Supported user types:</b> Employee, Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>. - Basic: [] - Bearer: []

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutPeopleIdEquitiesEntryIdSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PutPeopleIdEquitiesEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.people.putPeopleIdEquitiesEntryId({
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
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PutPeopleIdEquitiesEntryIdRequest](../../sdk/models/operations/putpeopleidequitiesentryidrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.PutPeopleIdEquitiesEntryIdSecurity](../../sdk/models/operations/putpeopleidequitiesentryidsecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PutPeopleIdEquitiesEntryIdResponse](../../sdk/models/operations/putpeopleidequitiesentryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putPeopleIdWorkEntryId

<b>Supported user types:</b> Employee<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { RFCDate } from "hibob/dist/sdk/types";

async function run() {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.people.putPeopleIdWorkEntryId({
    workEntry: {
      customColumns: {},
      effectiveDate: new RFCDate("2021-07-01"),
      reportsTo: {
        id: "<ID>",
      },
    },
    entryId: 410628,
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutPeopleIdWorkEntryIdRequest](../../sdk/models/operations/putpeopleidworkentryidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutPeopleIdWorkEntryIdResponse](../../sdk/models/operations/putpeopleidworkentryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
