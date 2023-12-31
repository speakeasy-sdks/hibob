/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";

export class CustomTables extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Delete custom table entry
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async deletePeopleCustomTablesEmployeeIdCustomTableIdEntryId(
        input: operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest,
        security: operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity,
        options?: RequestOptions
    ): Promise<operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ =
            operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest$.outboundSchema.parse(
                input
            );
        const body$ = null;

        const pathParams$ = {
            custom_table_id: enc$.encodeSimple("custom_table_id", payload$.custom_table_id, {
                explode: false,
                charEncoding: "percent",
            }),
            employee_id: enc$.encodeSimple("employee_id", payload$.employee_id, {
                explode: false,
                charEncoding: "percent",
            }),
            entry_id: enc$.encodeSimple("entry_id", payload$.entry_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/people/custom-tables/{employee_id}/{custom_table_id}/{entry_id}"
        )(pathParams$);

        const securitySettings$ = this.resolveSecurity(
            [{ value: security?.basic, type: "http:basic" }],
            [{ value: security?.bearer, fieldName: "Authorization", type: "apiKey:header" }]
        );

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Read all entries of the given custom table
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getPeopleCustomTablesEmployeeIdCustomTableId(
        input: operations.GetPeopleCustomTablesEmployeeIdCustomTableIdRequest,
        security: operations.GetPeopleCustomTablesEmployeeIdCustomTableIdSecurity,
        options?: RequestOptions
    ): Promise<operations.GetPeopleCustomTablesEmployeeIdCustomTableIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.GetPeopleCustomTablesEmployeeIdCustomTableIdRequest$.outboundSchema.parse(
                input
            );
        const body$ = null;

        const pathParams$ = {
            custom_table_id: enc$.encodeSimple("custom_table_id", payload$.custom_table_id, {
                explode: false,
                charEncoding: "percent",
            }),
            employee_id: enc$.encodeSimple("employee_id", payload$.employee_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/people/custom-tables/{employee_id}/{custom_table_id}"
        )(pathParams$);

        const query$ = [
            enc$.encodeForm("includeHumanReadable", payload$.includeHumanReadable, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const securitySettings$ = this.resolveSecurity(
            [{ value: security?.basic, type: "http:basic" }],
            [{ value: security?.bearer, fieldName: "Authorization", type: "apiKey:header" }]
        );

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.GetPeopleCustomTablesEmployeeIdCustomTableIdResponse$.inboundSchema.parse(
                    {
                        ...responseFields$,
                        CustomTableEntriesList: responseBody,
                    }
                );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Create new custom table entry
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async postPeopleCustomTablesEmployeeIdCustomTableId(
        input: operations.PostPeopleCustomTablesEmployeeIdCustomTableIdRequest,
        security: operations.PostPeopleCustomTablesEmployeeIdCustomTableIdSecurity,
        options?: RequestOptions
    ): Promise<operations.PostPeopleCustomTablesEmployeeIdCustomTableIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ =
            operations.PostPeopleCustomTablesEmployeeIdCustomTableIdRequest$.outboundSchema.parse(
                input
            );

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            custom_table_id: enc$.encodeSimple("custom_table_id", payload$.custom_table_id, {
                explode: false,
                charEncoding: "percent",
            }),
            employee_id: enc$.encodeSimple("employee_id", payload$.employee_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/people/custom-tables/{employee_id}/{custom_table_id}"
        )(pathParams$);

        const securitySettings$ = this.resolveSecurity(
            [{ value: security?.basic, type: "http:basic" }],
            [{ value: security?.bearer, fieldName: "Authorization", type: "apiKey:header" }]
        );

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PostPeopleCustomTablesEmployeeIdCustomTableIdResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Update custom table entry
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async putPeopleCustomTablesEmployeeIdCustomTableIdEntryId(
        input: operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest,
        security: operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity,
        options?: RequestOptions
    ): Promise<operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ =
            operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest$.outboundSchema.parse(
                input
            );

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            custom_table_id: enc$.encodeSimple("custom_table_id", payload$.custom_table_id, {
                explode: false,
                charEncoding: "percent",
            }),
            employee_id: enc$.encodeSimple("employee_id", payload$.employee_id, {
                explode: false,
                charEncoding: "percent",
            }),
            entry_id: enc$.encodeSimple("entry_id", payload$.entry_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/people/custom-tables/{employee_id}/{custom_table_id}/{entry_id}"
        )(pathParams$);

        const securitySettings$ = this.resolveSecurity(
            [{ value: security?.basic, type: "http:basic" }],
            [{ value: security?.bearer, fieldName: "Authorization", type: "apiKey:header" }]
        );

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse$.inboundSchema.parse(
            responseFields$
        );
    }
}
