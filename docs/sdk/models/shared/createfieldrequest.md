# CreateFieldRequest


## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `category`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The category of the field.                                                                                                                         |
| `description`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The description of the field.                                                                                                                      |
| `historical`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | When true, this field keeps the history of its values, each being active starting from a certain date. The default value is false.                 |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The name of the field.                                                                                                                             |
| `type`                                                                                                                                             | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The type of field. Supported field types: text, text-area, number, date, list, multi-list, hierarchy-list, currency, employee-reference, document. |