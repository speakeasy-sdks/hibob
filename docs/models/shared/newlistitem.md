# NewListItem

The <b>parentId</b> attribute is optional and only applies to hierarchy lists. When <b>parentId</b> is specified, the newly created list item will be placed under the specific hierarchy parent node.


## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *string*                             | :heavy_check_mark:                   | Name of the item.                    |
| `parentId`                           | *number*                             | :heavy_minus_sign:                   | ID of the new hierarchy parent node. |