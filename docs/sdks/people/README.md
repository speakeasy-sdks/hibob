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
import { DeletePeopleIdEmploymentEntryIdResponse, DeletePeopleIdEmploymentEntryIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeletePeopleIdEmploymentEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.people.deletePeopleIdEmploymentEntryId({
  entryId: 511526,
  id: "<ID>",
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
  entryId: 258748,
  id: "<ID>",
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
  entryId: 831741,
  id: "<ID>",
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
  entryId: 375590,
  id: "<ID>",
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
  entryId: 318576,
  id: "<ID>",
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
  entryId: 681162,
  id: "<ID>",
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
import { GetAvatarsResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.people.getAvatars({
  email: "Forges Northeast",
}).then((res: GetAvatarsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetAvatarsRequest](../../models/operations/getavatarsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetAvatarsResponse](../../models/operations/getavatarsresponse.md)>**


## getAvatarsEmployeeId

Returns the avatar image URL of the employee.<b>Supported user types:</b> Employee

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetAvatarsEmployeeIdResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.people.getAvatarsEmployeeId({
  employeeId: "composite",
}).then((res: GetAvatarsEmployeeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetAvatarsEmployeeIdRequest](../../models/operations/getavatarsemployeeidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetAvatarsEmployeeIdResponse](../../models/operations/getavatarsemployeeidresponse.md)>**


## getMyAvatar

Returns the avatar image URL of the logged-in user.<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetMyAvatarResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.people.getMyAvatar().then((res: GetMyAvatarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


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
    "Folk",
  ],
  humanReadable: false,
  identifier: "fava",
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
  id: "<ID>",
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
  id: "<ID>",
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
  id: "<ID>",
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
  id: "<ID>",
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
  id: "<ID>",
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

sdk.people.getPeopleIdVariable({
  id: "<ID>",
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
  id: "<ID>",
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
import { GetProfilesResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.people.getProfiles({
  sortBy: "Southeast architect Analyst",
}).then((res: GetProfilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetProfilesRequest](../../models/operations/getprofilesrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


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
    welcomeWizardId: 823551,
  },
  employeeId: "female",
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
    reason: "Hybrid Recycled",
    startDate: new RFCDate("2021-04-22"),
  },
  employeeId: "Account",
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
    lastDayOfWork: new RFCDate("2023-04-21"),
    noticePeriod: {
      length: 639545,
      unit: EmployeeTerminationNoticePeriodUnit.Month,
    },
    reasonType: "second Rubber",
    terminationDate: new RFCDate("2021-01-14"),
    terminationReason: "North",
  },
  identifier: "Account Producer",
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
  identifier: "teal",
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
  email: "Lauryn20@hotmail.com",
  firstName: "Addison",
  surname: "through Bugatti",
  work: {
    site: "Brazil Northeast",
    startDate: new RFCDate("2021-06-01"),
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
    "sky",
  ],
  filters: [
    {
      fieldPath: "root.id",
      operator: "equals",
      values: [
        "input",
      ],
    },
  ],
  humanReadable: "aut olive",
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
      "Northeast",
    ],
    humanReadable: "Italy compressing directional",
  },
  identifier: "sexy male",
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
    contract: "East",
    effectiveDate: new RFCDate("2021-07-23"),
    id: 587532,
    reason: "elm Northwest",
    salaryPayType: "orchestration transparent partnerships",
    type: "than primary",
  },
  id: "<ID>",
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
    consentNumber: "woman Bespoke",
    effectiveDate: new RFCDate("2022-08-02"),
    equityType: "Mercedes architecture extensible",
    exercisePrice: {
      currency: "UIC-Franc",
      value: 7161.13,
    },
    grantDate: new RFCDate("2021-09-30"),
    grantNumber: 9554.26,
    grantStatus: "voluptates Southeast Investor",
    grantType: "Sarasota",
    id: 414364,
    optionExpiration: new RFCDate("2022-08-09"),
    quantity: 2637.07,
    reason: "program",
    vestingCommencementDate: new RFCDate("2023-06-06"),
    vestingSchedule: 4878.63,
    vestingTerm: "transmitter",
  },
  id: "<ID>",
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
      currency: "Cuban Peso Convertible",
      value: 3657.11,
    },
    effectiveDate: new RFCDate("2021-03-10"),
    id: 359567,
    payFrequency: "eos",
    payPeriod: "entrap",
    reason: "pascal Chair Sedan",
  },
  id: "<ID>",
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
      currency: "Danish Krone",
      value: 9851.31,
    },
    description: "Object-based empowering hub",
    documentId: 5451.57,
    effectiveDate: new RFCDate("2023-06-08"),
    endDate: new RFCDate("2022-10-04"),
    frequency: "tan empower withdrawal",
    id: 233804,
    name: "Handmade",
    reason: "Chair",
    startDate: new RFCDate("2023-11-25"),
    status: "Tennessee Balanced Paradigm",
  },
  id: "<ID>",
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
      currency: "Algerian Dinar",
      value: 54.57,
    },
    companyPercent: 5416.79,
    departmentPercent: 5669.24,
    effectiveDate: new RFCDate("2023-11-02"),
    id: 810143,
    individualPercent: 8398.95,
    paymentPeriod: "East",
    reason: "Southwest Lesotho",
    variableType: "illum",
  },
  id: "<ID>",
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
    department: "West Integration Sedan",
    effectiveDate: new RFCDate("2021-12-23"),
    id: 530148,
    reason: "brr Account",
    reportsTo: {
      displayName: "Rhode invoice",
      email: "Jadyn.Schoen76@yahoo.com",
      firstName: "Frederic",
      id: "<ID>",
      surname: "Ramon Connecticut newton",
    },
    site: "Honduras Yttrium gold",
    siteId: 672136,
    title: "Northwest Buckinghamshire",
  },
  id: "<ID>",
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
import { PutAvatarsEmployeeIdResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.people.putAvatarsEmployeeId({
  uploadAvatar: {
    url: "https://agitated-motor.net",
  },
  employeeId: "Blues Data pish",
}).then((res: PutAvatarsEmployeeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PutAvatarsEmployeeIdRequest](../../models/operations/putavatarsemployeeidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


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
  identifier: "male",
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
    email: "Jeramy67@yahoo.com",
  },
  id: "<ID>",
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
import { PutPeopleIdEmploymentEntryIdResponse } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.people.putPeopleIdEmploymentEntryId({
  employmentEntry: {
    contract: "black transmitter",
    effectiveDate: new RFCDate("2021-10-20"),
    id: 181946,
    reason: "lavender teal",
    salaryPayType: "niches livid Fish",
    type: "Cloned Dirham",
  },
  entryId: 61642,
  id: "<ID>",
}).then((res: PutPeopleIdEmploymentEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PutPeopleIdEmploymentEntryIdRequest](../../models/operations/putpeopleidemploymententryidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


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
    consentNumber: "male collaboration system",
    effectiveDate: new RFCDate("2023-11-20"),
    equityType: "saepe",
    exercisePrice: {
      currency: "Bahraini Dinar",
      value: 35.59,
    },
    grantDate: new RFCDate("2023-03-24"),
    grantNumber: 3722.5,
    grantStatus: "connect Southwest",
    grantType: "Tandem syndicate",
    id: 557003,
    optionExpiration: new RFCDate("2022-07-24"),
    quantity: 911.23,
    reason: "Sleek accelerant",
    vestingCommencementDate: new RFCDate("2023-05-26"),
    vestingSchedule: 16.37,
    vestingTerm: "application Wooden",
  },
  entryId: 751338,
  id: "<ID>",
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
import { PutPeopleIdWorkEntryIdResponse } from "hibob/dist/sdk/models/operations";
import { RFCDate } from "hibob/dist/sdk/types";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.people.putPeopleIdWorkEntryId({
  workEntry: {
    customColumns: {},
    department: "Loan",
    effectiveDate: new RFCDate("2022-01-23"),
    id: 51725,
    reason: "connecting Fresh",
    reportsTo: {
      displayName: "gleefully Southeast optical",
      email: "Rene.Cronin@yahoo.com",
      firstName: "Devan",
      id: "<ID>",
      surname: "Chair",
    },
    site: "Practical",
    siteId: 391756,
    title: "input Awesome",
  },
  entryId: 234699,
  id: "<ID>",
}).then((res: PutPeopleIdWorkEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PutPeopleIdWorkEntryIdRequest](../../models/operations/putpeopleidworkentryidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PutPeopleIdWorkEntryIdResponse](../../models/operations/putpeopleidworkentryidresponse.md)>**

