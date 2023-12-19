# Metadata
(*metadata*)

### Available Operations

* [deleteCompanyNamedListsListNameItemId](#deletecompanynamedlistslistnameitemid) - Delete an item from an existing list.
* [deleteCompanyPeopleFieldsFieldId](#deletecompanypeoplefieldsfieldid) - Delete an existing field.
* [getCompanyNamedLists](#getcompanynamedlists) - Get all company lists
* [getCompanyNamedListsListName](#getcompanynamedlistslistname) - Get a specific company list by name.
* [getCompanyPeopleFields](#getcompanypeoplefields) - Get all company fields.
* [getMetadataObjectsPosition](#getmetadataobjectsposition) - Get all positions fields
* [getPeopleCustomTablesMetadata](#getpeoplecustomtablesmetadata) - Read metadata of custom tables defined
* [getPeopleCustomTablesMetadataCustomTableId](#getpeoplecustomtablesmetadatacustomtableid) - Read metadata for specific custom table
* [postCompanyNamedListsListName](#postcompanynamedlistslistname) - Add a new item to an existing list.
* [postCompanyPeopleFields](#postcompanypeoplefields) - Create a new field.
* [putCompanyNamedListsListNameItemId](#putcompanynamedlistslistnameitemid) - Update an existing item from a list.
* [putCompanyPeopleFieldsFieldId](#putcompanypeoplefieldsfieldid) - Update an existing field

## deleteCompanyNamedListsListNameItemId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeleteCompanyNamedListsListNameItemIdSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: DeleteCompanyNamedListsListNameItemIdSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.deleteCompanyNamedListsListNameItemId({
    itemId: "string",
    listName: "string",
  }, operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCompanyNamedListsListNameItemIdRequest](../../sdk/models/operations/deletecompanynamedlistslistnameitemidrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteCompanyNamedListsListNameItemIdSecurity](../../sdk/models/operations/deletecompanynamedlistslistnameitemidsecurity.md)                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteCompanyNamedListsListNameItemIdResponse](../../sdk/models/operations/deletecompanynamedlistslistnameitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteCompanyPeopleFieldsFieldId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeleteCompanyPeopleFieldsFieldIdSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: DeleteCompanyPeopleFieldsFieldIdSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.deleteCompanyPeopleFieldsFieldId({
    fieldId: "string",
  }, operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCompanyPeopleFieldsFieldIdRequest](../../sdk/models/operations/deletecompanypeoplefieldsfieldidrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteCompanyPeopleFieldsFieldIdSecurity](../../sdk/models/operations/deletecompanypeoplefieldsfieldidsecurity.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteCompanyPeopleFieldsFieldIdResponse](../../sdk/models/operations/deletecompanypeoplefieldsfieldidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCompanyNamedLists

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetCompanyNamedListsSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: GetCompanyNamedListsSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.getCompanyNamedLists({}, operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompanyNamedListsRequest](../../sdk/models/operations/getcompanynamedlistsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetCompanyNamedListsSecurity](../../sdk/models/operations/getcompanynamedlistssecurity.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCompanyNamedListsResponse](../../sdk/models/operations/getcompanynamedlistsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCompanyNamedListsListName

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetCompanyNamedListsListNameSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: GetCompanyNamedListsListNameSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.getCompanyNamedListsListName({
    listName: "string",
  }, operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompanyNamedListsListNameRequest](../../sdk/models/operations/getcompanynamedlistslistnamerequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetCompanyNamedListsListNameSecurity](../../sdk/models/operations/getcompanynamedlistslistnamesecurity.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCompanyNamedListsListNameResponse](../../sdk/models/operations/getcompanynamedlistslistnameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCompanyPeopleFields

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetCompanyPeopleFieldsSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: GetCompanyPeopleFieldsSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.getCompanyPeopleFields(operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetCompanyPeopleFieldsSecurity](../../sdk/models/operations/getcompanypeoplefieldssecurity.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCompanyPeopleFieldsResponse](../../sdk/models/operations/getcompanypeoplefieldsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getMetadataObjectsPosition

Returns a list of all fields of object type position.<br/><b>Supported user types:</b> Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetMetadataObjectsPositionSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: GetMetadataObjectsPositionSecurity = {
    password: "<YOUR_PASSWORD_HERE>",
    username: "<YOUR_USERNAME_HERE>",
  };
  
  const res = await sdk.metadata.getMetadataObjectsPosition(operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetMetadataObjectsPositionSecurity](../../sdk/models/operations/getmetadataobjectspositionsecurity.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetMetadataObjectsPositionResponse](../../sdk/models/operations/getmetadataobjectspositionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPeopleCustomTablesMetadata

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleCustomTablesMetadataSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: GetPeopleCustomTablesMetadataSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.getPeopleCustomTablesMetadata(operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetPeopleCustomTablesMetadataSecurity](../../sdk/models/operations/getpeoplecustomtablesmetadatasecurity.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetPeopleCustomTablesMetadataResponse](../../sdk/models/operations/getpeoplecustomtablesmetadataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPeopleCustomTablesMetadataCustomTableId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleCustomTablesMetadataCustomTableIdSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: GetPeopleCustomTablesMetadataCustomTableIdSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.getPeopleCustomTablesMetadataCustomTableId({
    customTableId: "string",
  }, operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPeopleCustomTablesMetadataCustomTableIdRequest](../../sdk/models/operations/getpeoplecustomtablesmetadatacustomtableidrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetPeopleCustomTablesMetadataCustomTableIdSecurity](../../sdk/models/operations/getpeoplecustomtablesmetadatacustomtableidsecurity.md)                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetPeopleCustomTablesMetadataCustomTableIdResponse](../../sdk/models/operations/getpeoplecustomtablesmetadatacustomtableidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postCompanyNamedListsListName

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostCompanyNamedListsListNameSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: PostCompanyNamedListsListNameSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.postCompanyNamedListsListName({
    newListItem: {
      name: "string",
    },
    listName: "string",
  }, operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostCompanyNamedListsListNameRequest](../../sdk/models/operations/postcompanynamedlistslistnamerequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostCompanyNamedListsListNameSecurity](../../sdk/models/operations/postcompanynamedlistslistnamesecurity.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostCompanyNamedListsListNameResponse](../../sdk/models/operations/postcompanynamedlistslistnameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postCompanyPeopleFields

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostCompanyPeopleFieldsSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: PostCompanyPeopleFieldsSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.postCompanyPeopleFields({
    category: "string",
    name: "string",
    type: "string",
  }, operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CreateFieldRequest](../../sdk/models/shared/createfieldrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostCompanyPeopleFieldsSecurity](../../sdk/models/operations/postcompanypeoplefieldssecurity.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostCompanyPeopleFieldsResponse](../../sdk/models/operations/postcompanypeoplefieldsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putCompanyNamedListsListNameItemId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutCompanyNamedListsListNameItemIdSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: PutCompanyNamedListsListNameItemIdSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.putCompanyNamedListsListNameItemId({
    updateListItemRequest: {},
    itemId: "string",
    listName: "string",
  }, operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutCompanyNamedListsListNameItemIdRequest](../../sdk/models/operations/putcompanynamedlistslistnameitemidrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PutCompanyNamedListsListNameItemIdSecurity](../../sdk/models/operations/putcompanynamedlistslistnameitemidsecurity.md)                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PutCompanyNamedListsListNameItemIdResponse](../../sdk/models/operations/putcompanynamedlistslistnameitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putCompanyPeopleFieldsFieldId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutCompanyPeopleFieldsFieldIdSecurity } from "hibob/sdk/models/operations";

async function run() {
  const sdk = new Hibob();

  const operationSecurity: PutCompanyPeopleFieldsFieldIdSecurity = {
    basic: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  };
  
  const res = await sdk.metadata.putCompanyPeopleFieldsFieldId({
    updateFieldRequest: {},
    fieldId: "string",
  }, operationSecurity);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutCompanyPeopleFieldsFieldIdRequest](../../sdk/models/operations/putcompanypeoplefieldsfieldidrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PutCompanyPeopleFieldsFieldIdSecurity](../../sdk/models/operations/putcompanypeoplefieldsfieldidsecurity.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PutCompanyPeopleFieldsFieldIdResponse](../../sdk/models/operations/putcompanypeoplefieldsfieldidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
