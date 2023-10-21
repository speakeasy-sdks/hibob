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

(async() => {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.tasks.getMyTasks();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetMyTasksResponse](../../models/operations/getmytasksresponse.md)>**


## getTasks

<b>Supported user types:</b> Employee.

### Example Usage

```typescript
import { Hibob } from "hibob";

(async() => {
  const sdk = new Hibob({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.tasks.getTasks();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTasksResponse](../../models/operations/gettasksresponse.md)>**


## getTasksPeopleId

<b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetTasksPeopleIdSecurity, GetTasksPeopleIdTaskStatus } from "hibob/dist/sdk/models/operations";

(async() => {
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
})();
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
import { PostTasksTaskIdCompleteSecurity } from "hibob/dist/sdk/models/operations";

(async() => {
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
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PostTasksTaskIdCompleteRequest](../../models/operations/posttaskstaskidcompleterequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.PostTasksTaskIdCompleteSecurity](../../models/operations/posttaskstaskidcompletesecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostTasksTaskIdCompleteResponse](../../models/operations/posttaskstaskidcompleteresponse.md)>**

