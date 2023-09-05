# people

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
import { DeletePeopleIdEmploymentEntryIdResponse, DeletePeopleIdEmploymentEntryIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeletePeopleIdEmploymentEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.deletePeopleIdEmploymentEntryId({
  entryId: 391774,
  id: "082d68ea-19f1-4d17-8513-39d08086a184",
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

sdk.people.deletePeopleIdEquitiesEntryId({
  entryId: 32465,
  id: "394c2607-1f93-4f5f-8642-dac7af515cc4",
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

sdk.people.deletePeopleIdSalariesEntryId({
  entryId: 70447,
  id: "3aa63aae-8d67-4864-9bb6-75fd5e60b375",
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

sdk.people.deletePeopleIdTrainingEntryId({
  entryId: 937285,
  id: "d4f6fbee-41f3-4331-bfe3-5b60eb1ea426",
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

sdk.people.deletePeopleIdVariableEntryId({
  entryId: 374244,
  id: "55ba3c28-744e-4d53-b88f-3a8d8f5c0b2f",
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

sdk.people.deletePeopleIdWorkEntryId({
  entryId: 131852,
  id: "fb7b194a-276b-4269-96fe-1f08f4294e36",
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


## getAvatars

Returns the avatar image URL of the employee.<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetAvatarsResponse, GetAvatarsSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetAvatarsSecurity = {
  bearer: "",
};

sdk.people.getAvatars({
  email: "occaecati",
}, operationSecurity).then((res: GetAvatarsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetAvatarsRequest](../../models/operations/getavatarsrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetAvatarsSecurity](../../models/operations/getavatarssecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetAvatarsResponse](../../models/operations/getavatarsresponse.md)>**


## getAvatarsEmployeeId

Returns the avatar image URL of the employee.<b>Supported user types:</b> Employee

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetAvatarsEmployeeIdResponse, GetAvatarsEmployeeIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetAvatarsEmployeeIdSecurity = {
  bearer: "",
};

sdk.people.getAvatarsEmployeeId({
  employeeId: "quos",
}, operationSecurity).then((res: GetAvatarsEmployeeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetAvatarsEmployeeIdRequest](../../models/operations/getavatarsemployeeidrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.GetAvatarsEmployeeIdSecurity](../../models/operations/getavatarsemployeeidsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetAvatarsEmployeeIdResponse](../../models/operations/getavatarsemployeeidresponse.md)>**


## getMyAvatar

Returns the avatar image URL of the logged-in user.<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetMyAvatarResponse, GetMyAvatarSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetMyAvatarSecurity = {
  bearer: "",
};

sdk.people.getMyAvatar(operationSecurity).then((res: GetMyAvatarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `security`                                                                       | [operations.GetMyAvatarSecurity](../../models/operations/getmyavatarsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetMyAvatarResponse](../../models/operations/getmyavatarresponse.md)>**


## ~~getPeople~~

<b>Note:</b> Deprecated at the end of March 2024. Please use <b>/people/search</b> ("Search for employees") instead. <br/><br/> This returns a list of all active employees. The data is filtered based on the access level of the logged-in user. Only viewable categories are returned.<br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleResponse, GetPeopleSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetPeopleSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.getPeople({
  humanReadable: false,
  includeHumanReadable: false,
  showInactive: false,
}, operationSecurity).then((res: GetPeopleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetPeopleRequest](../../models/operations/getpeoplerequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.GetPeopleSecurity](../../models/operations/getpeoplesecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetPeopleResponse](../../models/operations/getpeopleresponse.md)>**


## ~~getPeopleIdentifier~~

<b>Note:</b> Deprecated at the end of March 2024. Please use <b>POST /people/{identifier}</b> ("Read company employee fields by ID.") instead. <br/><br/> Returns the employee by the specified ID.<br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleIdentifierResponse, GetPeopleIdentifierSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetPeopleIdentifierSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.getPeopleIdentifier({
  fields: [
    "tempora",
    "tempora",
    "voluptate",
    "reiciendis",
  ],
  humanReadable: false,
  identifier: "ex",
  includeHumanReadable: false,
}, operationSecurity).then((res: GetPeopleIdentifierResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetPeopleIdentifierRequest](../../models/operations/getpeopleidentifierrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetPeopleIdentifierSecurity](../../models/operations/getpeopleidentifiersecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetPeopleIdentifierResponse](../../models/operations/getpeopleidentifierresponse.md)>**


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

sdk.people.getPeopleIdEmployment({
  id: "03e8b445-e80c-4a55-afd2-0e457e1858b6",
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

sdk.people.getPeopleIdEquities({
  id: "a89fbe3a-5aa8-4e48-a4d0-ab4075088e51",
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

sdk.people.getPeopleIdLifecycle({
  id: "862065e9-04f3-4b11-94b8-abf603a79f9d",
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

sdk.people.getPeopleIdSalaries({
  id: "fe0ab7da-8a50-4ce1-87f8-6bc173d689ee",
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

sdk.people.getPeopleIdTraining({
  id: "e9526f8d-986e-4881-aad4-f0e1012563f9",
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

sdk.people.getPeopleIdVariable({
  id: "4e29e973-e922-4a57-a15b-e3e060807e2b",
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

sdk.people.getPeopleIdWork({
  id: "6e3ab884-5f05-497a-a0ff-2a54a31e9476",
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


## getProfiles

Returns the public section of all  active employees of the logged-in user company.<br /><b>Supported user types:</b> Employee.<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value. Use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetProfilesResponse, GetProfilesSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetProfilesSecurity = {
  bearer: "",
};

sdk.people.getProfiles({
  sortBy: "ut",
}, operationSecurity).then((res: GetProfilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetProfilesRequest](../../models/operations/getprofilesrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetProfilesSecurity](../../models/operations/getprofilessecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetProfilesResponse](../../models/operations/getprofilesresponse.md)>**


## postEmployeesEmployeeIdInvitations

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  PostEmployeesEmployeeIdInvitationsResponse,
  PostEmployeesEmployeeIdInvitationsSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostEmployeesEmployeeIdInvitationsSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.postEmployeesEmployeeIdInvitations({
  invitationByWizard: {
    welcomeWizardId: 633062,
  },
  employeeId: "adipisci",
}, operationSecurity).then((res: PostEmployeesEmployeeIdInvitationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostEmployeesEmployeeIdInvitationsRequest](../../models/operations/postemployeesemployeeidinvitationsrequest.md)   | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `security`                                                                                                                     | [operations.PostEmployeesEmployeeIdInvitationsSecurity](../../models/operations/postemployeesemployeeidinvitationssecurity.md) | :heavy_check_mark:                                                                                                             | The security requirements to use for the request.                                                                              |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostEmployeesEmployeeIdInvitationsResponse](../../models/operations/postemployeesemployeeidinvitationsresponse.md)>**


## postEmployeesEmployeeIdStartDate

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  PostEmployeesEmployeeIdStartDateResponse,
  PostEmployeesEmployeeIdStartDateSecurity,
} from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostEmployeesEmployeeIdStartDateSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.postEmployeesEmployeeIdStartDate({
  startDateUpdate: {
    reason: "debitis",
    startDate: new RFCDate("2022-02-19"),
  },
  employeeId: "nemo",
}, operationSecurity).then((res: PostEmployeesEmployeeIdStartDateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PostEmployeesEmployeeIdStartDateRequest](../../models/operations/postemployeesemployeeidstartdaterequest.md)   | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `security`                                                                                                                 | [operations.PostEmployeesEmployeeIdStartDateSecurity](../../models/operations/postemployeesemployeeidstartdatesecurity.md) | :heavy_check_mark:                                                                                                         | The security requirements to use for the request.                                                                          |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PostEmployeesEmployeeIdStartDateResponse](../../models/operations/postemployeesemployeeidstartdateresponse.md)>**


## postEmployeesIdentifierTerminate

This changes the employee’s status to Terminated according to specified termination date. <br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  PostEmployeesIdentifierTerminateResponse,
  PostEmployeesIdentifierTerminateSecurity,
} from "hibob/dist/sdk/models/operations";
import { EmployeeTerminationNoticePeriodUnit } from "hibob/dist/sdk/models/shared";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostEmployeesIdentifierTerminateSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.postEmployeesIdentifierTerminate({
  employeeTermination: {
    lastDayOfWork: new RFCDate("2021-08-19"),
    noticePeriod: {
      length: 592081,
      unit: EmployeeTerminationNoticePeriodUnit.Weeks,
    },
    reasonType: "eum",
    terminationDate: new RFCDate("2021-03-22"),
    terminationReason: "aspernatur",
  },
  identifier: "ullam",
}, operationSecurity).then((res: PostEmployeesIdentifierTerminateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PostEmployeesIdentifierTerminateRequest](../../models/operations/postemployeesidentifierterminaterequest.md)   | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `security`                                                                                                                 | [operations.PostEmployeesIdentifierTerminateSecurity](../../models/operations/postemployeesidentifierterminatesecurity.md) | :heavy_check_mark:                                                                                                         | The security requirements to use for the request.                                                                          |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PostEmployeesIdentifierTerminateResponse](../../models/operations/postemployeesidentifierterminateresponse.md)>**


## postEmployeesIdentifierUninvite

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostEmployeesIdentifierUninviteResponse, PostEmployeesIdentifierUninviteSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostEmployeesIdentifierUninviteSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.postEmployeesIdentifierUninvite({
  identifier: "quasi",
}, operationSecurity).then((res: PostEmployeesIdentifierUninviteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PostEmployeesIdentifierUninviteRequest](../../models/operations/postemployeesidentifieruninviterequest.md)   | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `security`                                                                                                               | [operations.PostEmployeesIdentifierUninviteSecurity](../../models/operations/postemployeesidentifieruninvitesecurity.md) | :heavy_check_mark:                                                                                                       | The security requirements to use for the request.                                                                        |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PostEmployeesIdentifierUninviteResponse](../../models/operations/postemployeesidentifieruninviteresponse.md)>**


## postPeople

This creates a new employee record in Bob. You can include only the fields listed in the  [Fields Metadata API](https://apidocs.hibob.com/reference/get_company-people-fields).  <br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleResponse, PostPeopleSecurity } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob();
const operationSecurity: PostPeopleSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.postPeople({
  email: "Everardo_OHara@yahoo.com",
  firstName: "Magali",
  surname: "ex",
  work: {
    site: "aliquid",
    startDate: new RFCDate("2022-01-01"),
  },
}, operationSecurity).then((res: PostPeopleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.CreateEmployeeRequest](../../models/shared/createemployeerequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.PostPeopleSecurity](../../models/operations/postpeoplesecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPeopleResponse](../../models/operations/postpeopleresponse.md)>**


## postPeopleSearch

This API returns a list of requested employees with requested fields.  The data is filtered based on the requested fields and access level of the logged-in user.  Only viewable categories are returned.<br /><b>Supported user types:</b> Service.<br> <br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleSearchResponse, PostPeopleSearchSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostPeopleSearchSecurity = {
  password: "",
  username: "",
};

sdk.people.postPeopleSearch({
  fields: [
    "ullam",
    "in",
    "nam",
    "earum",
  ],
  filters: [
    {
      fieldPath: "root.id",
      operator: "equals",
      values: [
        "placeat",
        "modi",
        "voluptatibus",
      ],
    },
    {
      fieldPath: "root.id",
      operator: "equals",
      values: [
        "officiis",
        "sapiente",
        "cumque",
      ],
    },
    {
      fieldPath: "root.id",
      operator: "equals",
      values: [
        "rerum",
      ],
    },
  ],
  humanReadable: "tempora",
  showInactive: false,
}, operationSecurity).then((res: PostPeopleSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.ReadEmployeesRequestReference](../../models/shared/reademployeesrequestreference.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.PostPeopleSearchSecurity](../../models/operations/postpeoplesearchsecurity.md)   | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PostPeopleSearchResponse](../../models/operations/postpeoplesearchresponse.md)>**


## postPeopleIdentifier

Returns the employee's fields by the specified ID or email.<br /><b>Supported user types:</b>Service.<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleIdentifierResponse, PostPeopleIdentifierSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostPeopleIdentifierSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.postPeopleIdentifier({
  readSingleEmployeeRequestReference: {
    fields: [
      "inventore",
      "fugit",
    ],
    humanReadable: "cumque",
  },
  identifier: "quae",
}, operationSecurity).then((res: PostPeopleIdentifierResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PostPeopleIdentifierRequest](../../models/operations/postpeopleidentifierrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.PostPeopleIdentifierSecurity](../../models/operations/postpeopleidentifiersecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostPeopleIdentifierResponse](../../models/operations/postpeopleidentifierresponse.md)>**


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

sdk.people.postPeopleIdEmployment({
  employmentEntry: {
    contract: "perferendis",
    effectiveDate: new RFCDate("2022-11-11"),
    id: 432281,
    reason: "eius",
    salaryPayType: "rem",
    type: "at",
  },
  id: "c2f61519-9ebf-4d0e-9fe6-c632ca3aed01",
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

sdk.people.postPeopleIdEquities({
  equityEntry: {
    consentNumber: "et",
    effectiveDate: new RFCDate("2022-05-19"),
    equityType: "occaecati",
    exercisePrice: {
      currency: "suscipit",
      value: 2415.57,
    },
    grantDate: new RFCDate("2022-10-31"),
    grantNumber: 9849.34,
    grantStatus: "nulla",
    grantType: "necessitatibus",
    id: 58534,
    optionExpiration: new RFCDate("2022-07-13"),
    quantity: 4731.9,
    reason: "dicta",
    vestingCommencementDate: new RFCDate("2022-07-18"),
    vestingSchedule: 5083.9,
    vestingTerm: "maiores",
  },
  id: "f61d0174-7636-40a1-9db6-a660659a1ade",
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

sdk.people.postPeopleIdSalaries({
  salaryEntry: {
    base: {
      currency: "mollitia",
      value: 6717.94,
    },
    effectiveDate: new RFCDate("2022-05-09"),
    id: 536923,
    payFrequency: "enim",
    payPeriod: "vitae",
    reason: "repellendus",
  },
  id: "6c645b08-b618-491b-aa0f-e1ade008e6f8",
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

sdk.people.postPeopleIdTraining({
  trainingEntry: {
    cost: {
      currency: "minus",
      value: 3651,
    },
    description: "asperiores",
    documentId: 1905.67,
    effectiveDate: new RFCDate("2022-12-25"),
    endDate: new RFCDate("2021-06-12"),
    frequency: "impedit",
    id: 842777,
    name: "Clyde Nader",
    reason: "inventore",
    startDate: new RFCDate("2022-10-30"),
    status: "tempora",
  },
  id: "30104218-13d5-4208-ace7-e253b668451c",
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

sdk.people.postPeopleIdVariable({
  variableEntry: {
    amount: {
      currency: "autem",
      value: 7510.22,
    },
    companyPercent: 3883.19,
    departmentPercent: 9272.12,
    effectiveDate: new RFCDate("2022-12-21"),
    id: 350207,
    individualPercent: 8956.92,
    paymentPeriod: "quasi",
    reason: "nisi",
    variableType: "at",
  },
  id: "eab3fec9-578a-4645-8427-3a8418d16230",
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

sdk.people.postPeopleIdWork({
  workEntry: {
    customColumns: {},
    department: "cupiditate",
    effectiveDate: new RFCDate("2020-10-05"),
    id: 3860,
    reason: "omnis",
    reportsTo: {
      displayName: "eos",
      email: "Lesley68@yahoo.com",
      firstName: "Shanny",
      id: "fb9f58c4-d86e-468e-8be0-56013f59da75",
      surname: "reprehenderit",
    },
    site: "est",
    siteId: 336102,
    title: "Ms.",
  },
  id: "ecfef66e-f1ca-4a33-83c2-beb477373c8d",
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


## putAvatarsEmployeeId

Upload an employee's Avatar by providing a URL to the image to upload.<br /><b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutAvatarsEmployeeIdResponse, PutAvatarsEmployeeIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PutAvatarsEmployeeIdSecurity = {
  bearer: "",
};

sdk.people.putAvatarsEmployeeId({
  uploadAvatar: {
    url: "iure",
  },
  employeeId: "odit",
}, operationSecurity).then((res: PutAvatarsEmployeeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PutAvatarsEmployeeIdRequest](../../models/operations/putavatarsemployeeidrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.PutAvatarsEmployeeIdSecurity](../../models/operations/putavatarsemployeeidsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PutAvatarsEmployeeIdResponse](../../models/operations/putavatarsemployeeidresponse.md)>**


## putPeopleIdentifier

This updates the employee record in Bob. You can include only the fields listed in the  [Fields Metadata API](https://apidocs.hibob.com/reference/get_company-people-fields) where historical is equal to false.  <br /><b>Supported user types:</b> Employee, Service.<br><br><b>Note</b>

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutPeopleIdentifierResponse, PutPeopleIdentifierSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PutPeopleIdentifierSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.putPeopleIdentifier({
  requestBody: {},
  identifier: "voluptatibus",
}, operationSecurity).then((res: PutPeopleIdentifierResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PutPeopleIdentifierRequest](../../models/operations/putpeopleidentifierrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PutPeopleIdentifierSecurity](../../models/operations/putpeopleidentifiersecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PutPeopleIdentifierResponse](../../models/operations/putpeopleidentifierresponse.md)>**


## putPeopleIdEmail

Change an employee's email address. If you cannot change the self email an invitation will be sent to the new address to verify the email if the employee is invited/active.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutPeopleIdEmailResponse, PutPeopleIdEmailSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PutPeopleIdEmailSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.putPeopleIdEmail({
  changeEmail: {
    email: "Elisabeth81@yahoo.com",
  },
  id: "b1f2c431-0661-4e96-b49e-1cf9e06e3a43",
}, operationSecurity).then((res: PutPeopleIdEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PutPeopleIdEmailRequest](../../models/operations/putpeopleidemailrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.PutPeopleIdEmailSecurity](../../models/operations/putpeopleidemailsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PutPeopleIdEmailResponse](../../models/operations/putpeopleidemailresponse.md)>**


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

sdk.people.putPeopleIdEmploymentEntryId({
  employmentEntry: {
    contract: "iusto",
    effectiveDate: new RFCDate("2022-12-17"),
    id: 7468,
    reason: "officia",
    salaryPayType: "recusandae",
    type: "ea",
  },
  entryId: 693153,
  id: "6bc9b8f7-59ea-4c55-a974-1d311352965b",
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

sdk.people.putPeopleIdEquitiesEntryId({
  equityEntry: {
    consentNumber: "libero",
    effectiveDate: new RFCDate("2021-08-24"),
    equityType: "odio",
    exercisePrice: {
      currency: "fugit",
      value: 5.45,
    },
    grantDate: new RFCDate("2022-07-29"),
    grantNumber: 644.35,
    grantStatus: "quae",
    grantType: "modi",
    id: 208253,
    optionExpiration: new RFCDate("2022-01-25"),
    quantity: 882.48,
    reason: "ipsum",
    vestingCommencementDate: new RFCDate("2021-04-14"),
    vestingSchedule: 7143.76,
    vestingTerm: "maxime",
  },
  entryId: 157222,
  id: "259b1abd-a8c0-470e-9084-cb0672d1ad87",
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

sdk.people.putPeopleIdWorkEntryId({
  workEntry: {
    customColumns: {},
    department: "provident",
    effectiveDate: new RFCDate("2020-04-24"),
    id: 733289,
    reason: "sint",
    reportsTo: {
      displayName: "ea",
      email: "Garett.Prosacco@yahoo.com",
      firstName: "Sid",
      id: "fbd02bae-0be2-4d78-a259-e3ea4b5197f9",
      surname: "fugit",
    },
    site: "numquam",
    siteId: 256916,
    title: "Mrs.",
  },
  entryId: 873557,
  id: "a7ce52b8-95c5-437c-a454-efb0b34896c3",
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

