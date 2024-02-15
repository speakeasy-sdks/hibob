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

Delete a specific document from the employee's confidential folder.

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.documents.deleteDocsPeopleIdConfidentialDocId({
    docId: "<value>",
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteDocsPeopleIdConfidentialDocIdRequest](../../sdk/models/operations/deletedocspeopleidconfidentialdocidrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteDocsPeopleIdConfidentialDocIdResponse](../../sdk/models/operations/deletedocspeopleidconfidentialdocidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteDocsPeopleIdSharedDocId

Delete specific document from the employee's shared folder.

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.documents.deleteDocsPeopleIdSharedDocId({
    docId: "<value>",
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteDocsPeopleIdSharedDocIdRequest](../../sdk/models/operations/deletedocspeopleidshareddocidrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteDocsPeopleIdSharedDocIdResponse](../../sdk/models/operations/deletedocspeopleidshareddocidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getDocsPeopleId

Returns a list of documents and download links.<br />

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.documents.getDocsPeopleId({
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDocsPeopleIdRequest](../../sdk/models/operations/getdocspeopleidrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetDocsPeopleIdResponse](../../sdk/models/operations/getdocspeopleidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postDocsPeopleIdConfidential

Upload a document to the employee's confidential folder

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.documents.postDocsPeopleIdConfidential({
    addDocument: {
      tags: [
        "<value>",
      ],
    },
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostDocsPeopleIdConfidentialRequest](../../sdk/models/operations/postdocspeopleidconfidentialrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostDocsPeopleIdConfidentialResponse](../../sdk/models/operations/postdocspeopleidconfidentialresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postDocsPeopleIdConfidentialUpload

Upload a file to the employee's confidential folder.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { openAsBlob } from "node:fs";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.documents.postDocsPeopleIdConfidentialUpload({
    requestBody: {
      file: await openAsBlob("./sample-file"),
    },
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostDocsPeopleIdConfidentialUploadRequest](../../sdk/models/operations/postdocspeopleidconfidentialuploadrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostDocsPeopleIdConfidentialUploadResponse](../../sdk/models/operations/postdocspeopleidconfidentialuploadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postDocsPeopleIdShared

Upload a document to the employee's shared folder

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.documents.postDocsPeopleIdShared({
    addDocument: {
      tags: [
        "<value>",
      ],
    },
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostDocsPeopleIdSharedRequest](../../sdk/models/operations/postdocspeopleidsharedrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostDocsPeopleIdSharedResponse](../../sdk/models/operations/postdocspeopleidsharedresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postDocsPeopleIdSharedUpload

Upload a file to the employee's shared folder.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { openAsBlob } from "node:fs";

async function run() {
  const sdk = new Hibob({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.documents.postDocsPeopleIdSharedUpload({
    requestBody: {
      file: await openAsBlob("./sample-file"),
    },
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostDocsPeopleIdSharedUploadRequest](../../sdk/models/operations/postdocspeopleidshareduploadrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostDocsPeopleIdSharedUploadResponse](../../sdk/models/operations/postdocspeopleidshareduploadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
