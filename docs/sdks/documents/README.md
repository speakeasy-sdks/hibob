# Documents
(*documents*)

### Available Operations

* [deleteDocsPeopleIdConfidentialDocId](#deletedocspeopleidconfidentialdocid) - Delete a specific document from the employee's confidential folder.
* [deleteDocsPeopleIdSharedDocId](#deletedocspeopleidshareddocid) - Delete specific document from the employee's shared folder.
* [getDocsPeopleId](#getdocspeopleid) - Download employee's documents
* [postDocsPeopleIdConfidential](#postdocspeopleidconfidential) - Upload a document to the employee's confidential folder
* [postDocsPeopleIdConfidentialUpload](#postdocspeopleidconfidentialupload) - Upload a file to the employee's confidential folder.
* [postDocsPeopleIdShared](#postdocspeopleidshared) - Upload a document to the employee's shared folder
* [postDocsPeopleIdSharedUpload](#postdocspeopleidsharedupload) - Upload a file to the employee's shared folder.

## deleteDocsPeopleIdConfidentialDocId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  DeleteDocsPeopleIdConfidentialDocIdResponse,
  DeleteDocsPeopleIdConfidentialDocIdSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeleteDocsPeopleIdConfidentialDocIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.documents.deleteDocsPeopleIdConfidentialDocId({
  docId: "suscipit",
  id: "7cc8796e-d151-4a05-9fc2-ddf7cc78ca1b",
}, operationSecurity).then((res: DeleteDocsPeopleIdConfidentialDocIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.DeleteDocsPeopleIdConfidentialDocIdRequest](../../models/operations/deletedocspeopleidconfidentialdocidrequest.md)   | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `security`                                                                                                                       | [operations.DeleteDocsPeopleIdConfidentialDocIdSecurity](../../models/operations/deletedocspeopleidconfidentialdocidsecurity.md) | :heavy_check_mark:                                                                                                               | The security requirements to use for the request.                                                                                |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.DeleteDocsPeopleIdConfidentialDocIdResponse](../../models/operations/deletedocspeopleidconfidentialdocidresponse.md)>**


## deleteDocsPeopleIdSharedDocId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { DeleteDocsPeopleIdSharedDocIdResponse, DeleteDocsPeopleIdSharedDocIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: DeleteDocsPeopleIdSharedDocIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.documents.deleteDocsPeopleIdSharedDocId({
  docId: "officia",
  id: "928fc816-742c-4b73-9205-929396fea759",
}, operationSecurity).then((res: DeleteDocsPeopleIdSharedDocIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteDocsPeopleIdSharedDocIdRequest](../../models/operations/deletedocspeopleidshareddocidrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.DeleteDocsPeopleIdSharedDocIdSecurity](../../models/operations/deletedocspeopleidshareddocidsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteDocsPeopleIdSharedDocIdResponse](../../models/operations/deletedocspeopleidshareddocidresponse.md)>**


## getDocsPeopleId

Returns a list of documents and download links.<br /><b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetDocsPeopleIdResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.documents.getDocsPeopleId({
  id: "6eb10faa-a235-42c5-9559-07aff1a3a2fa",
}).then((res: GetDocsPeopleIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetDocsPeopleIdRequest](../../models/operations/getdocspeopleidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetDocsPeopleIdResponse](../../models/operations/getdocspeopleidresponse.md)>**


## postDocsPeopleIdConfidential

<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostDocsPeopleIdConfidentialResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.documents.postDocsPeopleIdConfidential({
  addDocument: {
    documentName: "occaecati",
    documentUrl: "numquam",
    tags: [
      "commodi",
    ],
  },
  id: "7739251a-a52c-43f5-ad01-9da1ffe78f09",
}).then((res: PostDocsPeopleIdConfidentialResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostDocsPeopleIdConfidentialRequest](../../models/operations/postdocspeopleidconfidentialrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostDocsPeopleIdConfidentialResponse](../../models/operations/postdocspeopleidconfidentialresponse.md)>**


## postDocsPeopleIdConfidentialUpload

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostDocsPeopleIdConfidentialUploadResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.documents.postDocsPeopleIdConfidentialUpload({
  requestBody: {
    file: {
      content: "voluptate".encode(),
      file: "cum",
    },
  },
  id: "0074f154-71b5-4e6e-93b9-9d488e1e91e4",
}).then((res: PostDocsPeopleIdConfidentialUploadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PostDocsPeopleIdConfidentialUploadRequest](../../models/operations/postdocspeopleidconfidentialuploadrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PostDocsPeopleIdConfidentialUploadResponse](../../models/operations/postdocspeopleidconfidentialuploadresponse.md)>**


## postDocsPeopleIdShared

<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostDocsPeopleIdSharedResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.documents.postDocsPeopleIdShared({
  addDocument: {
    documentName: "enim",
    documentUrl: "consequatur",
    tags: [
      "est",
    ],
  },
  id: "d2abd442-6980-42d5-82a9-4bb4f63c969e",
}).then((res: PostDocsPeopleIdSharedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PostDocsPeopleIdSharedRequest](../../models/operations/postdocspeopleidsharedrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostDocsPeopleIdSharedResponse](../../models/operations/postdocspeopleidsharedresponse.md)>**


## postDocsPeopleIdSharedUpload

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostDocsPeopleIdSharedUploadResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.documents.postDocsPeopleIdSharedUpload({
  requestBody: {
    file: {
      content: "sint".encode(),
      file: "officia",
    },
  },
  id: "3efa77df-b14c-4d66-ae39-5efb9ba88f3a",
}).then((res: PostDocsPeopleIdSharedUploadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostDocsPeopleIdSharedUploadRequest](../../models/operations/postdocspeopleidshareduploadrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostDocsPeopleIdSharedUploadResponse](../../models/operations/postdocspeopleidshareduploadresponse.md)>**

