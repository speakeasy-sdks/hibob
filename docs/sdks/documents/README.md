# Documents

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
  docId: "delectus",
  id: "467cc879-6ed1-451a-85df-c2ddf7cc78ca",
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
  docId: "dicta",
  id: "ba928fc8-1674-42cb-b392-05929396fea7",
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
import { GetDocsPeopleIdResponse, GetDocsPeopleIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetDocsPeopleIdSecurity = {
  bearer: "",
};

sdk.documents.getDocsPeopleId({
  id: "596eb10f-aaa2-4352-8595-5907aff1a3a2",
}, operationSecurity).then((res: GetDocsPeopleIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetDocsPeopleIdRequest](../../models/operations/getdocspeopleidrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetDocsPeopleIdSecurity](../../models/operations/getdocspeopleidsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetDocsPeopleIdResponse](../../models/operations/getdocspeopleidresponse.md)>**


## postDocsPeopleIdConfidential

<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostDocsPeopleIdConfidentialResponse, PostDocsPeopleIdConfidentialSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostDocsPeopleIdConfidentialSecurity = {
  bearer: "",
};

sdk.documents.postDocsPeopleIdConfidential({
  addDocument: {
    documentName: "repellat",
    documentUrl: "mollitia",
    tags: [
      "occaecati",
    ],
  },
  id: "46773925-1aa5-42c3-b5ad-019da1ffe78f",
}, operationSecurity).then((res: PostDocsPeopleIdConfidentialResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PostDocsPeopleIdConfidentialRequest](../../models/operations/postdocspeopleidconfidentialrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.PostDocsPeopleIdConfidentialSecurity](../../models/operations/postdocspeopleidconfidentialsecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PostDocsPeopleIdConfidentialResponse](../../models/operations/postdocspeopleidconfidentialresponse.md)>**


## postDocsPeopleIdConfidentialUpload

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import {
  PostDocsPeopleIdConfidentialUploadResponse,
  PostDocsPeopleIdConfidentialUploadSecurity,
} from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostDocsPeopleIdConfidentialUploadSecurity = {
  bearer: "",
};

sdk.documents.postDocsPeopleIdConfidentialUpload({
  requestBody: {
    file: {
      content: "ipsa".encode(),
      file: "omnis",
    },
  },
  id: "7b0074f1-5471-4b5e-ae13-b99d488e1e91",
}, operationSecurity).then((res: PostDocsPeopleIdConfidentialUploadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostDocsPeopleIdConfidentialUploadRequest](../../models/operations/postdocspeopleidconfidentialuploadrequest.md)   | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `security`                                                                                                                     | [operations.PostDocsPeopleIdConfidentialUploadSecurity](../../models/operations/postdocspeopleidconfidentialuploadsecurity.md) | :heavy_check_mark:                                                                                                             | The security requirements to use for the request.                                                                              |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostDocsPeopleIdConfidentialUploadResponse](../../models/operations/postdocspeopleidconfidentialuploadresponse.md)>**


## postDocsPeopleIdShared

<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostDocsPeopleIdSharedResponse, PostDocsPeopleIdSharedSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostDocsPeopleIdSharedSecurity = {
  bearer: "",
};

sdk.documents.postDocsPeopleIdShared({
  addDocument: {
    documentName: "itaque",
    documentUrl: "incidunt",
    tags: [
      "enim",
    ],
  },
  id: "0ad2abd4-4269-4802-9502-a94bb4f63c96",
}, operationSecurity).then((res: PostDocsPeopleIdSharedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostDocsPeopleIdSharedRequest](../../models/operations/postdocspeopleidsharedrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.PostDocsPeopleIdSharedSecurity](../../models/operations/postdocspeopleidsharedsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostDocsPeopleIdSharedResponse](../../models/operations/postdocspeopleidsharedresponse.md)>**


## postDocsPeopleIdSharedUpload

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostDocsPeopleIdSharedUploadResponse, PostDocsPeopleIdSharedUploadSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostDocsPeopleIdSharedUploadSecurity = {
  bearer: "",
};

sdk.documents.postDocsPeopleIdSharedUpload({
  requestBody: {
    file: {
      content: "provident".encode(),
      file: "necessitatibus",
    },
  },
  id: "9a3efa77-dfb1-44cd-a6ae-395efb9ba88f",
}, operationSecurity).then((res: PostDocsPeopleIdSharedUploadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PostDocsPeopleIdSharedUploadRequest](../../models/operations/postdocspeopleidshareduploadrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.PostDocsPeopleIdSharedUploadSecurity](../../models/operations/postdocspeopleidshareduploadsecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PostDocsPeopleIdSharedUploadResponse](../../models/operations/postdocspeopleidshareduploadresponse.md)>**

