# ImportMethod

Indicates if the provided data should be processed via an aggregation engine or immediately. <ul>Aggregate - will add the logs to a temporary location, and an aggregation job will process the data asynchronously.</ul><ul>Immediate - will insert the records as-is.</ul>


## Values

| Name        | Value       |
| ----------- | ----------- |
| `Aggregate` | aggregate   |
| `Immediate` | immediate   |