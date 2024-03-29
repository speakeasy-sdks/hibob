# hibob

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add hibob
```

### Yarn

```bash
yarn add hibob
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Hibob } from "hibob";
import { ImportMethod } from "hibob/sdk/models/operations";

async function run() {
    const sdk = new Hibob({
        security: {
            password: "<YOUR_PASSWORD_HERE>",
        },
    });

    const result = await sdk.attendance.postAttendanceImportImportMethod({
        importAttendanceData: {
            dateTimeFormat: "yyyy-MM-dd hh:mm a",
            idType: "<value>",
            requests: [
                {
                    clockIn: "2022-06-12T08:00",
                    clockOut: "2022-06-12T17:00",
                    id: "12356733644",
                },
            ],
        },
        importMethod: ImportMethod.Immediate,
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [attendance](docs/sdks/attendance/README.md)

* [postAttendanceImportImportMethod](docs/sdks/attendance/README.md#postattendanceimportimportmethod) - Import attendance data

### [people](docs/sdks/people/README.md)

* [deletePeopleIdEmploymentEntryId](docs/sdks/people/README.md#deletepeopleidemploymententryid) - Deletes an employment entry from a given employee's employment history.
* [deletePeopleIdEquitiesEntryId](docs/sdks/people/README.md#deletepeopleidequitiesentryid) - Deletes an equity grant for an employee.
* [deletePeopleIdSalariesEntryId](docs/sdks/people/README.md#deletepeopleidsalariesentryid) - Deletes a salary entry from the employee's list.
* [deletePeopleIdTrainingEntryId](docs/sdks/people/README.md#deletepeopleidtrainingentryid) - Deletes any training records for an employee.
* [deletePeopleIdVariableEntryId](docs/sdks/people/README.md#deletepeopleidvariableentryid) - Deletes a training record for an employee.
* [deletePeopleIdWorkEntryId](docs/sdks/people/README.md#deletepeopleidworkentryid) - Deletes a work entry from a given employee's work history.
* [getAvatars](docs/sdks/people/README.md#getavatars) - Read avatar for an employee email
* [getAvatarsEmployeeId](docs/sdks/people/README.md#getavatarsemployeeid) - Read avatar for an employee ID.
* [getMyAvatar](docs/sdks/people/README.md#getmyavatar) - Read avatar for logged-in user
* [~~getPeople~~](docs/sdks/people/README.md#getpeople) - Read all company employees :warning: **Deprecated**
* [~~getPeopleIdentifier~~](docs/sdks/people/README.md#getpeopleidentifier) - Read company employee by ID. :warning: **Deprecated**
* [getPeopleIdEmployment](docs/sdks/people/README.md#getpeopleidemployment) - List employee's employment history.
* [getPeopleIdEquities](docs/sdks/people/README.md#getpeopleidequities) - List the employee's equity grants.
* [getPeopleIdLifecycle](docs/sdks/people/README.md#getpeopleidlifecycle) - List employee's life-cycle status history.
* [getPeopleIdSalaries](docs/sdks/people/README.md#getpeopleidsalaries) - List employee's salary history.
* [getPeopleIdTraining](docs/sdks/people/README.md#getpeopleidtraining) - List the employee's training records.
* [getPeopleIdVariable](docs/sdks/people/README.md#getpeopleidvariable) - List employee's variable payments
* [getPeopleIdWork](docs/sdks/people/README.md#getpeopleidwork) - List employee's work history
* [getProfiles](docs/sdks/people/README.md#getprofiles) - Read the public profile section of all active employees.
* [postEmployeesEmployeeIdInvitations](docs/sdks/people/README.md#postemployeesemployeeidinvitations) - Invite an employee with a welcome wizard ID.
* [postEmployeesEmployeeIdStartDate](docs/sdks/people/README.md#postemployeesemployeeidstartdate) - Set or update an employee's start date.
* [postEmployeesIdentifierTerminate](docs/sdks/people/README.md#postemployeesidentifierterminate) - Terminate company employee.
* [postEmployeesIdentifierUninvite](docs/sdks/people/README.md#postemployeesidentifieruninvite) - Revoke access to Bob for an employee.
* [postPeople](docs/sdks/people/README.md#postpeople) - Create company employee.
* [postPeopleSearch](docs/sdks/people/README.md#postpeoplesearch) - Search for employees
* [postPeopleIdentifier](docs/sdks/people/README.md#postpeopleidentifier) - Read company employee fields by employee ID.
* [postPeopleIdEmployment](docs/sdks/people/README.md#postpeopleidemployment) - Creates a new employment entry for a given employee.
* [postPeopleIdEquities](docs/sdks/people/README.md#postpeopleidequities) - Creates a new equity grant for a given employee.
* [postPeopleIdSalaries](docs/sdks/people/README.md#postpeopleidsalaries) - Creates a new salary entry for a given employee.
* [postPeopleIdTraining](docs/sdks/people/README.md#postpeopleidtraining) - Creates a new training records for a given employee
* [postPeopleIdVariable](docs/sdks/people/README.md#postpeopleidvariable) - Creates a new variable payment for a given employee.
* [postPeopleIdWork](docs/sdks/people/README.md#postpeopleidwork) - Creates a new work entry for a given employee.
* [putAvatarsEmployeeId](docs/sdks/people/README.md#putavatarsemployeeid) - Upload employee's avatar by image url
* [putPeopleIdentifier](docs/sdks/people/README.md#putpeopleidentifier) - Update company employee.
* [putPeopleIdEmail](docs/sdks/people/README.md#putpeopleidemail) - Update an employee's email address.
* [putPeopleIdEmploymentEntryId](docs/sdks/people/README.md#putpeopleidemploymententryid) - Updates an employment entry from a given employee's employment history.
* [putPeopleIdEquitiesEntryId](docs/sdks/people/README.md#putpeopleidequitiesentryid) - Updates an equity grant for an employee
* [putPeopleIdWorkEntryId](docs/sdks/people/README.md#putpeopleidworkentryid) - Updates a work entry from employee's work history

### [metadata](docs/sdks/metadata/README.md)

* [deleteCompanyNamedListsListNameItemId](docs/sdks/metadata/README.md#deletecompanynamedlistslistnameitemid) - Delete an item from an existing list.
* [deleteCompanyPeopleFieldsFieldId](docs/sdks/metadata/README.md#deletecompanypeoplefieldsfieldid) - Delete an existing field.
* [getCompanyNamedLists](docs/sdks/metadata/README.md#getcompanynamedlists) - Get all company lists
* [getCompanyNamedListsListName](docs/sdks/metadata/README.md#getcompanynamedlistslistname) - Get a specific company list by name.
* [getCompanyPeopleFields](docs/sdks/metadata/README.md#getcompanypeoplefields) - Get all company fields.
* [getMetadataObjectsPosition](docs/sdks/metadata/README.md#getmetadataobjectsposition) - Get all positions fields
* [getPeopleCustomTablesMetadata](docs/sdks/metadata/README.md#getpeoplecustomtablesmetadata) - Read metadata of custom tables defined
* [getPeopleCustomTablesMetadataCustomTableId](docs/sdks/metadata/README.md#getpeoplecustomtablesmetadatacustomtableid) - Read metadata for specific custom table
* [postCompanyNamedListsListName](docs/sdks/metadata/README.md#postcompanynamedlistslistname) - Add a new item to an existing list.
* [postCompanyPeopleFields](docs/sdks/metadata/README.md#postcompanypeoplefields) - Create a new field.
* [putCompanyNamedListsListNameItemId](docs/sdks/metadata/README.md#putcompanynamedlistslistnameitemid) - Update an existing item from a list.
* [putCompanyPeopleFieldsFieldId](docs/sdks/metadata/README.md#putcompanypeoplefieldsfieldid) - Update an existing field

### [reports](docs/sdks/reports/README.md)

* [getCompanyReports](docs/sdks/reports/README.md#getcompanyreports) - Read company reports
* [getCompanyReportsDownloadReportName](docs/sdks/reports/README.md#getcompanyreportsdownloadreportname) - Download report by file URL
* [getCompanyReportsReportIdDownload](docs/sdks/reports/README.md#getcompanyreportsreportiddownload) - Download the report by ID
* [getCompanyReportsReportIdDownloadAsync](docs/sdks/reports/README.md#getcompanyreportsreportiddownloadasync) - Get the report download URL for polling

### [documents](docs/sdks/documents/README.md)

* [deleteDocsPeopleIdConfidentialDocId](docs/sdks/documents/README.md#deletedocspeopleidconfidentialdocid) - Delete a specific document from the employee's confidential folder.
* [deleteDocsPeopleIdSharedDocId](docs/sdks/documents/README.md#deletedocspeopleidshareddocid) - Delete specific document from the employee's shared folder.
* [getDocsPeopleId](docs/sdks/documents/README.md#getdocspeopleid) - Download employee's documents
* [postDocsPeopleIdConfidential](docs/sdks/documents/README.md#postdocspeopleidconfidential) - Upload a document to the employee's confidential folder
* [postDocsPeopleIdConfidentialUpload](docs/sdks/documents/README.md#postdocspeopleidconfidentialupload) - Upload a file to the employee's confidential folder.
* [postDocsPeopleIdShared](docs/sdks/documents/README.md#postdocspeopleidshared) - Upload a document to the employee's shared folder
* [postDocsPeopleIdSharedUpload](docs/sdks/documents/README.md#postdocspeopleidsharedupload) - Upload a file to the employee's shared folder.

### [tasks](docs/sdks/tasks/README.md)

* [getMyTasks](docs/sdks/tasks/README.md#getmytasks) - Read my tasks
* [getTasks](docs/sdks/tasks/README.md#gettasks) - Read all open tasks.
* [getTasksPeopleId](docs/sdks/tasks/README.md#gettaskspeopleid) - Read tasks of a specific employee 
* [postTasksTaskIdComplete](docs/sdks/tasks/README.md#posttaskstaskidcomplete) - Mark a task as complete

### [objects](docs/sdks/objects/README.md)

* [postObjectsPositionSearch](docs/sdks/objects/README.md#postobjectspositionsearch) - Read company positions

### [onboarding](docs/sdks/onboarding/README.md)

* [getOnboardingWizards](docs/sdks/onboarding/README.md#getonboardingwizards) - Get a summary of all onboarding wizards.

### [payroll](docs/sdks/payroll/README.md)

* [deletePeopleIdEquitiesEntryId](docs/sdks/payroll/README.md#deletepeopleidequitiesentryid) - Deletes an equity grant for an employee.
* [deletePeopleIdSalariesEntryId](docs/sdks/payroll/README.md#deletepeopleidsalariesentryid) - Deletes a salary entry from the employee's list.
* [deletePeopleIdTrainingEntryId](docs/sdks/payroll/README.md#deletepeopleidtrainingentryid) - Deletes any training records for an employee.
* [deletePeopleIdVariableEntryId](docs/sdks/payroll/README.md#deletepeopleidvariableentryid) - Deletes a training record for an employee.
* [getPayrollHistory](docs/sdks/payroll/README.md#getpayrollhistory) - Read payroll history.
* [getPeopleIdEquities](docs/sdks/payroll/README.md#getpeopleidequities) - List the employee's equity grants.
* [getPeopleIdSalaries](docs/sdks/payroll/README.md#getpeopleidsalaries) - List employee's salary history.
* [getPeopleIdTraining](docs/sdks/payroll/README.md#getpeopleidtraining) - List the employee's training records.
* [getPeopleIdVariable](docs/sdks/payroll/README.md#getpeopleidvariable) - List employee's variable payments
* [postPeopleIdEquities](docs/sdks/payroll/README.md#postpeopleidequities) - Creates a new equity grant for a given employee.
* [postPeopleIdSalaries](docs/sdks/payroll/README.md#postpeopleidsalaries) - Creates a new salary entry for a given employee.
* [postPeopleIdTraining](docs/sdks/payroll/README.md#postpeopleidtraining) - Creates a new training records for a given employee
* [postPeopleIdVariable](docs/sdks/payroll/README.md#postpeopleidvariable) - Creates a new variable payment for a given employee.
* [putPeopleIdEquitiesEntryId](docs/sdks/payroll/README.md#putpeopleidequitiesentryid) - Updates an equity grant for an employee

### [customTables](docs/sdks/customtables/README.md)

* [deletePeopleCustomTablesEmployeeIdCustomTableIdEntryId](docs/sdks/customtables/README.md#deletepeoplecustomtablesemployeeidcustomtableidentryid) - Delete custom table entry
* [getPeopleCustomTablesEmployeeIdCustomTableId](docs/sdks/customtables/README.md#getpeoplecustomtablesemployeeidcustomtableid) - Read all entries of the given custom table
* [postPeopleCustomTablesEmployeeIdCustomTableId](docs/sdks/customtables/README.md#postpeoplecustomtablesemployeeidcustomtableid) - Create new custom table entry
* [putPeopleCustomTablesEmployeeIdCustomTableIdEntryId](docs/sdks/customtables/README.md#putpeoplecustomtablesemployeeidcustomtableidentryid) - Update custom table entry

### [tables](docs/sdks/tables/README.md)

* [deletePeopleIdEmploymentEntryId](docs/sdks/tables/README.md#deletepeopleidemploymententryid) - Deletes an employment entry from a given employee's employment history.
* [deletePeopleIdEquitiesEntryId](docs/sdks/tables/README.md#deletepeopleidequitiesentryid) - Deletes an equity grant for an employee.
* [deletePeopleIdSalariesEntryId](docs/sdks/tables/README.md#deletepeopleidsalariesentryid) - Deletes a salary entry from the employee's list.
* [deletePeopleIdTrainingEntryId](docs/sdks/tables/README.md#deletepeopleidtrainingentryid) - Deletes any training records for an employee.
* [deletePeopleIdVariableEntryId](docs/sdks/tables/README.md#deletepeopleidvariableentryid) - Deletes a training record for an employee.
* [deletePeopleIdWorkEntryId](docs/sdks/tables/README.md#deletepeopleidworkentryid) - Deletes a work entry from a given employee's work history.
* [getPeopleIdEmployment](docs/sdks/tables/README.md#getpeopleidemployment) - List employee's employment history.
* [getPeopleIdEquities](docs/sdks/tables/README.md#getpeopleidequities) - List the employee's equity grants.
* [getPeopleIdLifecycle](docs/sdks/tables/README.md#getpeopleidlifecycle) - List employee's life-cycle status history.
* [getPeopleIdSalaries](docs/sdks/tables/README.md#getpeopleidsalaries) - List employee's salary history.
* [getPeopleIdTraining](docs/sdks/tables/README.md#getpeopleidtraining) - List the employee's training records.
* [getPeopleIdVariable](docs/sdks/tables/README.md#getpeopleidvariable) - List employee's variable payments
* [getPeopleIdWork](docs/sdks/tables/README.md#getpeopleidwork) - List employee's work history
* [postPeopleIdEmployment](docs/sdks/tables/README.md#postpeopleidemployment) - Creates a new employment entry for a given employee.
* [postPeopleIdEquities](docs/sdks/tables/README.md#postpeopleidequities) - Creates a new equity grant for a given employee.
* [postPeopleIdSalaries](docs/sdks/tables/README.md#postpeopleidsalaries) - Creates a new salary entry for a given employee.
* [postPeopleIdTraining](docs/sdks/tables/README.md#postpeopleidtraining) - Creates a new training records for a given employee
* [postPeopleIdVariable](docs/sdks/tables/README.md#postpeopleidvariable) - Creates a new variable payment for a given employee.
* [postPeopleIdWork](docs/sdks/tables/README.md#postpeopleidwork) - Creates a new work entry for a given employee.
* [putPeopleIdEmploymentEntryId](docs/sdks/tables/README.md#putpeopleidemploymententryid) - Updates an employment entry from a given employee's employment history.
* [putPeopleIdEquitiesEntryId](docs/sdks/tables/README.md#putpeopleidequitiesentryid) - Updates an equity grant for an employee
* [putPeopleIdWorkEntryId](docs/sdks/tables/README.md#putpeopleidworkentryid) - Updates a work entry from employee's work history

### [timeOff](docs/sdks/timeoff/README.md)

* [deleteTimeoffEmployeesIdRequestsRequestId](docs/sdks/timeoff/README.md#deletetimeoffemployeesidrequestsrequestid) - Cancel an existing timeoff request
* [getTimeoffEmployeesIdBalance](docs/sdks/timeoff/README.md#gettimeoffemployeesidbalance) - Get the balance for a given employee
* [getTimeoffEmployeesIdRequestsRequestId](docs/sdks/timeoff/README.md#gettimeoffemployeesidrequestsrequestid) - Get the details of an existing timeoff request.
* [getTimeoffOuttoday](docs/sdks/timeoff/README.md#gettimeoffouttoday) - Read a list of who's out of the office today or on the specified date.
* [getTimeoffPolicies](docs/sdks/timeoff/README.md#gettimeoffpolicies) - Get Policy details.
* [getTimeoffPoliciesNames](docs/sdks/timeoff/README.md#gettimeoffpoliciesnames) - Get a list of policy names for a given policy type.
* [getTimeoffPolicyTypes](docs/sdks/timeoff/README.md#gettimeoffpolicytypes) - Get all policy types names.
* [getTimeoffPolicyTypesPolicyType](docs/sdks/timeoff/README.md#gettimeoffpolicytypespolicytype) - Get Policy type details
* [getTimeoffPolicyTypesPolicyTypeReasonCodes](docs/sdks/timeoff/README.md#gettimeoffpolicytypespolicytypereasoncodes) - Get Policy type reason codes
* [getTimeoffRequestsChanges](docs/sdks/timeoff/README.md#gettimeoffrequestschanges) - Get all new/deleted time off requests since the specified date.
* [getTimeoffWhosout](docs/sdks/timeoff/README.md#gettimeoffwhosout) - Read a list of who's out of the office.
* [postTimeoffEmployeesIdAdjustments](docs/sdks/timeoff/README.md#posttimeoffemployeesidadjustments) - Create a balance adjustment.
* [postTimeoffEmployeesIdDiffHoursRequests](docs/sdks/timeoff/README.md#posttimeoffemployeesiddiffhoursrequests) - Submit a new time off request of different hours per day.
* [postTimeoffEmployeesIdRequests](docs/sdks/timeoff/README.md#posttimeoffemployeesidrequests) - Submit a new time off request.
* [postTimeoffPolicyTypesPolicyTypeReasonCodes](docs/sdks/timeoff/README.md#posttimeoffpolicytypespolicytypereasoncodes) - Add a list of reason codes for a given policy type.
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Hibob } from "hibob";
import * as errors from "hibob/sdk/models/errors";
import { ImportMethod } from "hibob/sdk/models/operations";

async function run() {
    const sdk = new Hibob({
        security: {
            password: "<YOUR_PASSWORD_HERE>",
        },
    });

    let result;
    try {
        result = await sdk.attendance.postAttendanceImportImportMethod({
            importAttendanceData: {
                dateTimeFormat: "yyyy-MM-dd hh:mm a",
                idType: "<value>",
                requests: [
                    {
                        clockIn: "2022-06-12T08:00",
                        clockOut: "2022-06-12T17:00",
                        id: "12356733644",
                    },
                ],
            },
            importMethod: ImportMethod.Immediate,
        });
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.hibob.com/v1` | None |
| 1 | `https://api.sandbox.hibob.com/v1` | None |

```typescript
import { Hibob } from "hibob";
import { ImportMethod } from "hibob/sdk/models/operations";

async function run() {
    const sdk = new Hibob({
        serverIdx: 1,
        security: {
            password: "<YOUR_PASSWORD_HERE>",
        },
    });

    const result = await sdk.attendance.postAttendanceImportImportMethod({
        importAttendanceData: {
            dateTimeFormat: "yyyy-MM-dd hh:mm a",
            idType: "<value>",
            requests: [
                {
                    clockIn: "2022-06-12T08:00",
                    clockOut: "2022-06-12T17:00",
                    id: "12356733644",
                },
            ],
        },
        importMethod: ImportMethod.Immediate,
    });

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Hibob } from "hibob";
import { ImportMethod } from "hibob/sdk/models/operations";

async function run() {
    const sdk = new Hibob({
        serverURL: "https://api.hibob.com/v1",
        security: {
            password: "<YOUR_PASSWORD_HERE>",
        },
    });

    const result = await sdk.attendance.postAttendanceImportImportMethod({
        importAttendanceData: {
            dateTimeFormat: "yyyy-MM-dd hh:mm a",
            idType: "<value>",
            requests: [
                {
                    clockIn: "2022-06-12T08:00",
                    clockOut: "2022-06-12T17:00",
                    id: "12356733644",
                },
            ],
        },
        importMethod: ImportMethod.Immediate,
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Hibob } from "hibob";
import { HTTPClient } from "hibob/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Hibob({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name       | Type       | Scheme     |
| ---------- | ---------- | ---------- |
| `password` | http       | HTTP Basic |
| `username` | http       | HTTP Basic |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Hibob } from "hibob";
import { ImportMethod } from "hibob/sdk/models/operations";

async function run() {
    const sdk = new Hibob({
        security: {
            password: "<YOUR_PASSWORD_HERE>",
        },
    });

    const result = await sdk.attendance.postAttendanceImportImportMethod({
        importAttendanceData: {
            dateTimeFormat: "yyyy-MM-dd hh:mm a",
            idType: "<value>",
            requests: [
                {
                    clockIn: "2022-06-12T08:00",
                    clockOut: "2022-06-12T17:00",
                    id: "12356733644",
                },
            ],
        },
        importMethod: ImportMethod.Immediate,
    });

    // Handle the result
    console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { Hibob } from "hibob";

async function run() {
    const sdk = new Hibob();

    const operationSecurity = {
        bearer: "<YOUR_API_KEY_HERE>",
    };

    const result = await sdk.people.getMyAvatar(operationSecurity);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

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
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
