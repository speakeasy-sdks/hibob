# Tasks
(*tasks*)

### Available Operations

* [getMyTasks](#getmytasks) - Read my tasks
* [getTasks](#gettasks) - Read all open tasks.
* [getTasksPeopleId](#gettaskspeopleid) - Read tasks of a specific employee 
* [postTasksTaskIdComplete](#posttaskstaskidcomplete) - Mark a task as complete

## getMyTasks

<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.tasks.getMyTasks();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetMyTasksResponse](../../sdk/models/operations/getmytasksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTasks

<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";

async function run() {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.tasks.getTasks();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTasksResponse](../../sdk/models/operations/gettasksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTasksPeopleId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTasksPeopleIdSecurity, TaskStatus } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: GetTasksPeopleIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.tasks.getTasksPeopleId({
    id: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetTasksPeopleIdRequest](../../sdk/models/operations/gettaskspeopleidrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.GetTasksPeopleIdSecurity](../../sdk/models/operations/gettaskspeopleidsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetTasksPeopleIdResponse](../../sdk/models/operations/gettaskspeopleidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postTasksTaskIdComplete

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostTasksTaskIdCompleteSecurity } from "hibob/dist/sdk/models/operations";

async function run() {
  const sdk = new Hibob();
const operationSecurity: PostTasksTaskIdCompleteSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

  const res = await sdk.tasks.postTasksTaskIdComplete({
    taskId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PostTasksTaskIdCompleteRequest](../../sdk/models/operations/posttaskstaskidcompleterequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.PostTasksTaskIdCompleteSecurity](../../sdk/models/operations/posttaskstaskidcompletesecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostTasksTaskIdCompleteResponse](../../sdk/models/operations/posttaskstaskidcompleteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
