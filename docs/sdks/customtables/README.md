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
import {
  DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse,
  DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.customTables.deletePeopleCustomTablesEmployeeIdCustomTableIdEntryId({
  customTableId: "morph blah",
  employeeId: "Functionality coulomb",
  entryId: "blue",
}, operationSecurity).then((res: DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest](../../models/operations/deletepeoplecustomtablesemployeeidcustomtableidentryidrequest.md)   | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `security`                                                                                                                                                             | [operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity](../../models/operations/deletepeoplecustomtablesemployeeidcustomtableidentryidsecurity.md) | :heavy_check_mark:                                                                                                                                                     | The security requirements to use for the request.                                                                                                                      |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse](../../models/operations/deletepeoplecustomtablesemployeeidcustomtableidentryidresponse.md)>**


## getPeopleCustomTablesEmployeeIdCustomTableId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  GetPeopleCustomTablesEmployeeIdCustomTableIdResponse,
  GetPeopleCustomTablesEmployeeIdCustomTableIdSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetPeopleCustomTablesEmployeeIdCustomTableIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.customTables.getPeopleCustomTablesEmployeeIdCustomTableId({
  customTableId: "Sleek deposit",
  employeeId: "FTP white payment",
  includeHumanReadable: false,
}, operationSecurity).then((res: GetPeopleCustomTablesEmployeeIdCustomTableIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetPeopleCustomTablesEmployeeIdCustomTableIdRequest](../../models/operations/getpeoplecustomtablesemployeeidcustomtableidrequest.md)   | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `security`                                                                                                                                         | [operations.GetPeopleCustomTablesEmployeeIdCustomTableIdSecurity](../../models/operations/getpeoplecustomtablesemployeeidcustomtableidsecurity.md) | :heavy_check_mark:                                                                                                                                 | The security requirements to use for the request.                                                                                                  |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetPeopleCustomTablesEmployeeIdCustomTableIdResponse](../../models/operations/getpeoplecustomtablesemployeeidcustomtableidresponse.md)>**


## postPeopleCustomTablesEmployeeIdCustomTableId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  PostPeopleCustomTablesEmployeeIdCustomTableIdResponse,
  PostPeopleCustomTablesEmployeeIdCustomTableIdSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostPeopleCustomTablesEmployeeIdCustomTableIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.customTables.postPeopleCustomTablesEmployeeIdCustomTableId({
  requestBody: {
    rawBody: "drive Transexual Soul",
  },
  customTableId: "female incubate Iron",
  employeeId: "Metal Passenger primary",
}, operationSecurity).then((res: PostPeopleCustomTablesEmployeeIdCustomTableIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.PostPeopleCustomTablesEmployeeIdCustomTableIdRequest](../../models/operations/postpeoplecustomtablesemployeeidcustomtableidrequest.md)   | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `security`                                                                                                                                           | [operations.PostPeopleCustomTablesEmployeeIdCustomTableIdSecurity](../../models/operations/postpeoplecustomtablesemployeeidcustomtableidsecurity.md) | :heavy_check_mark:                                                                                                                                   | The security requirements to use for the request.                                                                                                    |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PostPeopleCustomTablesEmployeeIdCustomTableIdResponse](../../models/operations/postpeoplecustomtablesemployeeidcustomtableidresponse.md)>**


## putPeopleCustomTablesEmployeeIdCustomTableIdEntryId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse,
  PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.customTables.putPeopleCustomTablesEmployeeIdCustomTableIdEntryId({
  requestBody: {
    rawBody: "female",
  },
  customTableId: "Androgyne Guarani Pickup",
  employeeId: "Mazda invoice paradigms",
  entryId: "repeatedly Director",
}, operationSecurity).then((res: PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest](../../models/operations/putpeoplecustomtablesemployeeidcustomtableidentryidrequest.md)   | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `security`                                                                                                                                                       | [operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity](../../models/operations/putpeoplecustomtablesemployeeidcustomtableidentryidsecurity.md) | :heavy_check_mark:                                                                                                                                               | The security requirements to use for the request.                                                                                                                |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse](../../models/operations/putpeoplecustomtablesemployeeidcustomtableidentryidresponse.md)>**

