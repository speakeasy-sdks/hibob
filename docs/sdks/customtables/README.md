# CustomTables
(*customTables*)

### Available Operations

* [deletePeopleCustomTablesEmployeeIdCustomTableIdEntryId](#deletepeoplecustomtablesemployeeidcustomtableidentryid) - Delete custom table entry
* [getPeopleCustomTablesEmployeeIdCustomTableId](#getpeoplecustomtablesemployeeidcustomtableid) - Read all entries of the given custom table
* [postPeopleCustomTablesEmployeeIdCustomTableId](#postpeoplecustomtablesemployeeidcustomtableid) - Create new custom table entry
* [putPeopleCustomTablesEmployeeIdCustomTableIdEntryId](#putpeoplecustomtablesemployeeidcustomtableidentryid) - Update custom table entry

## deletePeopleCustomTablesEmployeeIdCustomTableIdEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const result = await sdk.customTables.deletePeopleCustomTablesEmployeeIdCustomTableIdEntryId({
    customTableId: "string",
    employeeId: "string",
    entryId: "string",
  }, operationSecurity);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest](../../sdk/models/operations/deletepeoplecustomtablesemployeeidcustomtableidentryidrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity](../../sdk/models/operations/deletepeoplecustomtablesemployeeidcustomtableidentryidsecurity.md)     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse](../../sdk/models/operations/deletepeoplecustomtablesemployeeidcustomtableidentryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPeopleCustomTablesEmployeeIdCustomTableId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleCustomTablesEmployeeIdCustomTableIdSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: GetPeopleCustomTablesEmployeeIdCustomTableIdSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const result = await sdk.customTables.getPeopleCustomTablesEmployeeIdCustomTableId({
    customTableId: "string",
    employeeId: "string",
  }, operationSecurity);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPeopleCustomTablesEmployeeIdCustomTableIdRequest](../../sdk/models/operations/getpeoplecustomtablesemployeeidcustomtableidrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetPeopleCustomTablesEmployeeIdCustomTableIdSecurity](../../sdk/models/operations/getpeoplecustomtablesemployeeidcustomtableidsecurity.md)                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetPeopleCustomTablesEmployeeIdCustomTableIdResponse](../../sdk/models/operations/getpeoplecustomtablesemployeeidcustomtableidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postPeopleCustomTablesEmployeeIdCustomTableId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostPeopleCustomTablesEmployeeIdCustomTableIdSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: PostPeopleCustomTablesEmployeeIdCustomTableIdSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const result = await sdk.customTables.postPeopleCustomTablesEmployeeIdCustomTableId({
    requestBody: {},
    customTableId: "string",
    employeeId: "string",
  }, operationSecurity);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostPeopleCustomTablesEmployeeIdCustomTableIdRequest](../../sdk/models/operations/postpeoplecustomtablesemployeeidcustomtableidrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostPeopleCustomTablesEmployeeIdCustomTableIdSecurity](../../sdk/models/operations/postpeoplecustomtablesemployeeidcustomtableidsecurity.md)                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostPeopleCustomTablesEmployeeIdCustomTableIdResponse](../../sdk/models/operations/postpeoplecustomtablesemployeeidcustomtableidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putPeopleCustomTablesEmployeeIdCustomTableIdEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const result = await sdk.customTables.putPeopleCustomTablesEmployeeIdCustomTableIdEntryId({
    requestBody: {},
    customTableId: "string",
    employeeId: "string",
    entryId: "string",
  }, operationSecurity);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest](../../sdk/models/operations/putpeoplecustomtablesemployeeidcustomtableidentryidrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity](../../sdk/models/operations/putpeoplecustomtablesemployeeidcustomtableidentryidsecurity.md)           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse](../../sdk/models/operations/putpeoplecustomtablesemployeeidcustomtableidentryidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
