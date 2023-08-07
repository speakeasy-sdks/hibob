# UpdateListItemRequest

You need to provide at least one of: <b>name</b> or <b>parentId</b>. Providing a name will rename the list item value. Providing the parent ID will move the hierarchy list item (together with its children) under the indicated parent node.


## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *string*                             | :heavy_minus_sign:                   | Name of the item.                    |
| `parentId`                           | *number*                             | :heavy_minus_sign:                   | ID of the new hierarchy parent node. |