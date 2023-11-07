# ListItem


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `archived`                                                  | *boolean*                                                   | :heavy_minus_sign:                                          | Whether the item is archived (not available for selection). |
| `children`                                                  | [shared.ListItem](../../models/shared/listitem.md)[]        | :heavy_minus_sign:                                          | Nested items - if the list is nested.                       |
| `id`                                                        | *number*                                                    | :heavy_minus_sign:                                          | Internal ID of the item.                                    |
| `name`                                                      | *string*                                                    | :heavy_minus_sign:                                          | Name of the item.                                           |