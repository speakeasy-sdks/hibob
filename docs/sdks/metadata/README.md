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
import { DeleteCompanyNamedListsListNameItemIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: DeleteCompanyNamedListsListNameItemIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.deleteCompanyNamedListsListNameItemId({
    itemId: "nicely",
    listName: "Barbados crouch invoice",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.DeleteCompanyNamedListsListNameItemIdRequest](../../models/operations/deletecompanynamedlistslistnameitemidrequest.md)   | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `security`                                                                                                                           | [operations.DeleteCompanyNamedListsListNameItemIdSecurity](../../models/operations/deletecompanynamedlistslistnameitemidsecurity.md) | :heavy_check_mark:                                                                                                                   | The security requirements to use for the request.                                                                                    |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.DeleteCompanyNamedListsListNameItemIdResponse](../../models/operations/deletecompanynamedlistslistnameitemidresponse.md)>**


## deleteCompanyPeopleFieldsFieldId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeleteCompanyPeopleFieldsFieldIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: DeleteCompanyPeopleFieldsFieldIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.deleteCompanyPeopleFieldsFieldId({
    fieldId: "female",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeleteCompanyPeopleFieldsFieldIdRequest](../../models/operations/deletecompanypeoplefieldsfieldidrequest.md)   | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `security`                                                                                                                 | [operations.DeleteCompanyPeopleFieldsFieldIdSecurity](../../models/operations/deletecompanypeoplefieldsfieldidsecurity.md) | :heavy_check_mark:                                                                                                         | The security requirements to use for the request.                                                                          |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeleteCompanyPeopleFieldsFieldIdResponse](../../models/operations/deletecompanypeoplefieldsfieldidresponse.md)>**


## getCompanyNamedLists

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetCompanyNamedListsSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetCompanyNamedListsSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.getCompanyNamedLists({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetCompanyNamedListsRequest](../../models/operations/getcompanynamedlistsrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.GetCompanyNamedListsSecurity](../../models/operations/getcompanynamedlistssecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetCompanyNamedListsResponse](../../models/operations/getcompanynamedlistsresponse.md)>**


## getCompanyNamedListsListName

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetCompanyNamedListsListNameSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetCompanyNamedListsListNameSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.getCompanyNamedListsListName({
    listName: "EXE",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetCompanyNamedListsListNameRequest](../../models/operations/getcompanynamedlistslistnamerequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.GetCompanyNamedListsListNameSecurity](../../models/operations/getcompanynamedlistslistnamesecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetCompanyNamedListsListNameResponse](../../models/operations/getcompanynamedlistslistnameresponse.md)>**


## getCompanyPeopleFields

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetCompanyPeopleFieldsSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetCompanyPeopleFieldsSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.getCompanyPeopleFields(operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `security`                                                                                             | [operations.GetCompanyPeopleFieldsSecurity](../../models/operations/getcompanypeoplefieldssecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetCompanyPeopleFieldsResponse](../../models/operations/getcompanypeoplefieldsresponse.md)>**


## getMetadataObjectsPosition

Returns a list of all fields of object type position.<br/><b>Supported user types:</b> Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetMetadataObjectsPositionSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetMetadataObjectsPositionSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.metadata.getMetadataObjectsPosition(operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                     | [operations.GetMetadataObjectsPositionSecurity](../../models/operations/getmetadataobjectspositionsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetMetadataObjectsPositionResponse](../../models/operations/getmetadataobjectspositionresponse.md)>**


## getPeopleCustomTablesMetadata

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleCustomTablesMetadataSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetPeopleCustomTablesMetadataSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.getPeopleCustomTablesMetadata(operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                           | [operations.GetPeopleCustomTablesMetadataSecurity](../../models/operations/getpeoplecustomtablesmetadatasecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetPeopleCustomTablesMetadataResponse](../../models/operations/getpeoplecustomtablesmetadataresponse.md)>**


## getPeopleCustomTablesMetadataCustomTableId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetPeopleCustomTablesMetadataCustomTableIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: GetPeopleCustomTablesMetadataCustomTableIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.getPeopleCustomTablesMetadataCustomTableId({
    customTableId: "zowie Latin",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.GetPeopleCustomTablesMetadataCustomTableIdRequest](../../models/operations/getpeoplecustomtablesmetadatacustomtableidrequest.md)   | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `security`                                                                                                                                     | [operations.GetPeopleCustomTablesMetadataCustomTableIdSecurity](../../models/operations/getpeoplecustomtablesmetadatacustomtableidsecurity.md) | :heavy_check_mark:                                                                                                                             | The security requirements to use for the request.                                                                                              |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetPeopleCustomTablesMetadataCustomTableIdResponse](../../models/operations/getpeoplecustomtablesmetadatacustomtableidresponse.md)>**


## postCompanyNamedListsListName

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostCompanyNamedListsListNameSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PostCompanyNamedListsListNameSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.postCompanyNamedListsListName({
    newListItem: {
      name: "Electric Forint henry",
    },
    listName: "fossilize",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostCompanyNamedListsListNameRequest](../../models/operations/postcompanynamedlistslistnamerequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.PostCompanyNamedListsListNameSecurity](../../models/operations/postcompanynamedlistslistnamesecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostCompanyNamedListsListNameResponse](../../models/operations/postcompanynamedlistslistnameresponse.md)>**


## postCompanyPeopleFields

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostCompanyPeopleFieldsSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PostCompanyPeopleFieldsSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.postCompanyPeopleFields({
    category: "female Avon aboard",
    name: "ew gold",
    type: "Southwest aperiam TLS",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [shared.CreateFieldRequest](../../models/shared/createfieldrequest.md)                                   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.PostCompanyPeopleFieldsSecurity](../../models/operations/postcompanypeoplefieldssecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostCompanyPeopleFieldsResponse](../../models/operations/postcompanypeoplefieldsresponse.md)>**


## putCompanyNamedListsListNameItemId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutCompanyNamedListsListNameItemIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PutCompanyNamedListsListNameItemIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.putCompanyNamedListsListNameItemId({
    updateListItemRequest: {},
    itemId: "Rupee Books withdrawal",
    listName: "strategy divan Alaska",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PutCompanyNamedListsListNameItemIdRequest](../../models/operations/putcompanynamedlistslistnameitemidrequest.md)   | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `security`                                                                                                                     | [operations.PutCompanyNamedListsListNameItemIdSecurity](../../models/operations/putcompanynamedlistslistnameitemidsecurity.md) | :heavy_check_mark:                                                                                                             | The security requirements to use for the request.                                                                              |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PutCompanyNamedListsListNameItemIdResponse](../../models/operations/putcompanynamedlistslistnameitemidresponse.md)>**


## putCompanyPeopleFieldsFieldId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PutCompanyPeopleFieldsFieldIdSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
  const sdk = new Hibob();
const operationSecurity: PutCompanyPeopleFieldsFieldIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.metadata.putCompanyPeopleFieldsFieldId({
    updateFieldRequest: {},
    fieldId: "whenever Honda navigating",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PutCompanyPeopleFieldsFieldIdRequest](../../models/operations/putcompanypeoplefieldsfieldidrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.PutCompanyPeopleFieldsFieldIdSecurity](../../models/operations/putcompanypeoplefieldsfieldidsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PutCompanyPeopleFieldsFieldIdResponse](../../models/operations/putcompanypeoplefieldsfieldidresponse.md)>**

