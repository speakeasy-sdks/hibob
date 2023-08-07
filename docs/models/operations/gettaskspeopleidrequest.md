# GetTasksPeopleIdRequest


## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | employee id                                                                          |
| `taskStatus`                                                                         | [GetTasksPeopleIdTaskStatus](../../models/operations/gettaskspeopleidtaskstatus.md)  | :heavy_minus_sign:                                                                   | filter tasks by open / closed status. Not sending task_status will return all tasks. |