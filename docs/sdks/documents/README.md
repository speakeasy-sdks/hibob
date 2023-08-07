# documents

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
import { GetDocsPeopleIdResponse, GetDocsPeopleIdSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetDocsPeopleIdSecurity = {
  bearer: "",
};

sdk.documents.getDocsPeopleId({
  id: "6eb10faa-a235-42c5-9559-07aff1a3a2fa",
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
    documentName: "occaecati",
    documentUrl: "numquam",
    tags: [
      "quam",
      "molestiae",
    ],
  },
  id: "39251aa5-2c3f-45ad-819d-a1ffe78f097b",
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
      content: "perferendis".encode(),
      file: "doloremque",
    },
  },
  id: "74f15471-b5e6-4e13-b99d-488e1e91e450",
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
    documentName: "est",
    documentUrl: "quibusdam",
    tags: [
      "deserunt",
    ],
  },
  id: "bd442698-02d5-402a-94bb-4f63c969e9a3",
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
      content: "debitis".encode(),
      file: "a",
    },
  },
  id: "a77dfb14-cd66-4ae3-95ef-b9ba88f3a669",
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

