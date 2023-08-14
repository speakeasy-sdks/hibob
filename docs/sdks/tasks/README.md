# tasks

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
import { GetMyTasksResponse, GetMyTasksSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetMyTasksSecurity = {
  bearer: "",
};

sdk.tasks.getMyTasks(operationSecurity).then((res: GetMyTasksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `security`                                                                     | [operations.GetMyTasksSecurity](../../models/operations/getmytaskssecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetMyTasksResponse](../../models/operations/getmytasksresponse.md)>**


## getTasks

<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTasksResponse, GetTasksSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetTasksSecurity = {
  bearer: "",
};

sdk.tasks.getTasks(operationSecurity).then((res: GetTasksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `security`                                                                 | [operations.GetTasksSecurity](../../models/operations/gettaskssecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetTasksResponse](../../models/operations/gettasksresponse.md)>**


## getTasksPeopleId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTasksPeopleIdResponse, GetTasksPeopleIdSecurity, GetTasksPeopleIdTaskStatus } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: GetTasksPeopleIdSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.tasks.getTasksPeopleId({
  id: "mollitia",
  taskStatus: GetTasksPeopleIdTaskStatus.Open,
}, operationSecurity).then((res: GetTasksPeopleIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetTasksPeopleIdRequest](../../models/operations/gettaskspeopleidrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetTasksPeopleIdSecurity](../../models/operations/gettaskspeopleidsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetTasksPeopleIdResponse](../../models/operations/gettaskspeopleidresponse.md)>**


## postTasksTaskIdComplete

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { PostTasksTaskIdCompleteResponse, PostTasksTaskIdCompleteSecurity } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob();
const operationSecurity: PostTasksTaskIdCompleteSecurity = {
  basic: {
    password: "",
    username: "",
  },
};

sdk.tasks.postTasksTaskIdComplete({
  taskId: "quos",
}, operationSecurity).then((res: PostTasksTaskIdCompleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PostTasksTaskIdCompleteRequest](../../models/operations/posttaskstaskidcompleterequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.PostTasksTaskIdCompleteSecurity](../../models/operations/posttaskstaskidcompletesecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostTasksTaskIdCompleteResponse](../../models/operations/posttaskstaskidcompleteresponse.md)>**

