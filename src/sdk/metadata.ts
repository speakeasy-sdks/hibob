/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";

export class Metadata extends ClientSDK {
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
     * Delete an item from an existing list.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async deleteCompanyNamedListsListNameItemId(
        input: operations.DeleteCompanyNamedListsListNameItemIdRequest,
        security: operations.DeleteCompanyNamedListsListNameItemIdSecurity,
        options?: RequestOptions
    ): Promise<operations.DeleteCompanyNamedListsListNameItemIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ =
            operations.DeleteCompanyNamedListsListNameItemIdRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            itemId: enc$.encodeSimple("itemId", payload$.itemId, {
                explode: false,
                charEncoding: "percent",
            }),
            listName: enc$.encodeSimple("listName", payload$.listName, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/company/named-lists/{listName}/{itemId}")(
            pathParams$
        );

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

        if (this.matchStatusCode(response, [200, 404])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.DeleteCompanyNamedListsListNameItemIdResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Delete an existing field.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async deleteCompanyPeopleFieldsFieldId(
        input: operations.DeleteCompanyPeopleFieldsFieldIdRequest,
        security: operations.DeleteCompanyPeopleFieldsFieldIdSecurity,
        options?: RequestOptions
    ): Promise<operations.DeleteCompanyPeopleFieldsFieldIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ =
            operations.DeleteCompanyPeopleFieldsFieldIdRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            fieldId: enc$.encodeSimple("fieldId", payload$.fieldId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/company/people/fields/{fieldId}")(pathParams$);

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

        if (this.matchStatusCode(response, [200, 400, 404])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.DeleteCompanyPeopleFieldsFieldIdResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Get all company lists
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getCompanyNamedLists(
        input: operations.GetCompanyNamedListsRequest,
        security: operations.GetCompanyNamedListsSecurity,
        options?: RequestOptions
    ): Promise<operations.GetCompanyNamedListsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetCompanyNamedListsRequest$.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/company/named-lists")();

        const query$ = [
            enc$.encodeForm("includeArchived", payload$.includeArchived, {
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
            const result = operations.GetCompanyNamedListsResponse$.inboundSchema.parse({
                ...responseFields$,
                Lists: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get a specific company list by name.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getCompanyNamedListsListName(
        input: operations.GetCompanyNamedListsListNameRequest,
        security: operations.GetCompanyNamedListsListNameSecurity,
        options?: RequestOptions
    ): Promise<operations.GetCompanyNamedListsListNameResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.GetCompanyNamedListsListNameRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            listName: enc$.encodeSimple("listName", payload$.listName, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/company/named-lists/{listName}")(pathParams$);

        const query$ = [
            enc$.encodeForm("includeArchived", payload$.includeArchived, {
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
            const result = operations.GetCompanyNamedListsListNameResponse$.inboundSchema.parse({
                ...responseFields$,
                List: responseBody,
            });
            return result;
        } else if (this.matchStatusCode(response, 404)) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.GetCompanyNamedListsListNameResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Get all company fields.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getCompanyPeopleFields(
        security: operations.GetCompanyPeopleFieldsSecurity,
        options?: RequestOptions
    ): Promise<operations.GetCompanyPeopleFieldsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/company/people/fields")();

        const securitySettings$ = this.resolveSecurity(
            [{ value: security?.basic, type: "http:basic" }],
            [{ value: security?.bearer, fieldName: "Authorization", type: "apiKey:header" }]
        );

        const response = await this.fetch$(
            { security: securitySettings$, method: "GET", path: path$, headers: headers$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetCompanyPeopleFieldsResponse$.inboundSchema.parse({
                ...responseFields$,
                Fields: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get all positions fields
     *
     * @remarks
     * Returns a list of all fields of object type position.<br/><b>Supported user types:</b> Service.
     */
    async getMetadataObjectsPosition(
        options?: RequestOptions
    ): Promise<operations.GetMetadataObjectsPositionResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/metadata/objects/position")();

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            { security: securitySettings$, method: "GET", path: path$, headers: headers$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetMetadataObjectsPositionResponse$.inboundSchema.parse({
                ...responseFields$,
                ObjectsMetadata: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetMetadataObjectsPositionResponse$.inboundSchema.parse({
                ...responseFields$,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Read metadata of custom tables defined
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getPeopleCustomTablesMetadata(
        security: operations.GetPeopleCustomTablesMetadataSecurity,
        options?: RequestOptions
    ): Promise<operations.GetPeopleCustomTablesMetadataResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/people/custom-tables/metadata")();

        const securitySettings$ = this.resolveSecurity(
            [{ value: security?.basic, type: "http:basic" }],
            [{ value: security?.bearer, fieldName: "Authorization", type: "apiKey:header" }]
        );

        const response = await this.fetch$(
            { security: securitySettings$, method: "GET", path: path$, headers: headers$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetPeopleCustomTablesMetadataResponse$.inboundSchema.parse({
                ...responseFields$,
                CustomTableMetadataList: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Read metadata for specific custom table
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getPeopleCustomTablesMetadataCustomTableId(
        input: operations.GetPeopleCustomTablesMetadataCustomTableIdRequest,
        security: operations.GetPeopleCustomTablesMetadataCustomTableIdSecurity,
        options?: RequestOptions
    ): Promise<operations.GetPeopleCustomTablesMetadataCustomTableIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.GetPeopleCustomTablesMetadataCustomTableIdRequest$.outboundSchema.parse(
                input
            );
        const body$ = null;

        const pathParams$ = {
            custom_table_id: enc$.encodeSimple("custom_table_id", payload$.custom_table_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/people/custom-tables/metadata/{custom_table_id}")(
            pathParams$
        );

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
                operations.GetPeopleCustomTablesMetadataCustomTableIdResponse$.inboundSchema.parse({
                    ...responseFields$,
                    CustomTableMetadata: responseBody,
                });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Add a new item to an existing list.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async postCompanyNamedListsListName(
        input: operations.PostCompanyNamedListsListNameRequest,
        security: operations.PostCompanyNamedListsListNameSecurity,
        options?: RequestOptions
    ): Promise<operations.PostCompanyNamedListsListNameResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.PostCompanyNamedListsListNameRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.NewListItem, { explode: true });

        const pathParams$ = {
            listName: enc$.encodeSimple("listName", payload$.listName, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/company/named-lists/{listName}")(pathParams$);

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

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.PostCompanyNamedListsListNameResponse$.inboundSchema.parse({
                ...responseFields$,
                FlatListItemId: responseBody,
            });
            return result;
        } else if (this.matchStatusCode(response, [404, 409])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PostCompanyNamedListsListNameResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Create a new field.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async postCompanyPeopleFields(
        input: shared.CreateFieldRequest,
        security: operations.PostCompanyPeopleFieldsSecurity,
        options?: RequestOptions
    ): Promise<operations.PostCompanyPeopleFieldsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = shared.CreateFieldRequest$.outboundSchema.parse(input);
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/company/people/fields")();

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

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.PostCompanyPeopleFieldsResponse$.inboundSchema.parse({
                ...responseFields$,
                FieldId: responseBody,
            });
            return result;
        } else if (this.matchStatusCode(response, [400, 404])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PostCompanyPeopleFieldsResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Update an existing item from a list.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async putCompanyNamedListsListNameItemId(
        input: operations.PutCompanyNamedListsListNameItemIdRequest,
        security: operations.PutCompanyNamedListsListNameItemIdSecurity,
        options?: RequestOptions
    ): Promise<operations.PutCompanyNamedListsListNameItemIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ =
            operations.PutCompanyNamedListsListNameItemIdRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.UpdateListItemRequest, { explode: true });

        const pathParams$ = {
            itemId: enc$.encodeSimple("itemId", payload$.itemId, {
                explode: false,
                charEncoding: "percent",
            }),
            listName: enc$.encodeSimple("listName", payload$.listName, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/company/named-lists/{listName}/{itemId}")(
            pathParams$
        );

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

        if (this.matchStatusCode(response, [200, 404])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PutCompanyNamedListsListNameItemIdResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Update an existing field
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async putCompanyPeopleFieldsFieldId(
        input: operations.PutCompanyPeopleFieldsFieldIdRequest,
        security: operations.PutCompanyPeopleFieldsFieldIdSecurity,
        options?: RequestOptions
    ): Promise<operations.PutCompanyPeopleFieldsFieldIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ =
            operations.PutCompanyPeopleFieldsFieldIdRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.UpdateFieldRequest, { explode: true });

        const pathParams$ = {
            fieldId: enc$.encodeSimple("fieldId", payload$.fieldId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/company/people/fields/{fieldId}")(pathParams$);

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

        if (this.matchStatusCode(response, [200, 404])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PutCompanyPeopleFieldsFieldIdResponse$.inboundSchema.parse(
            responseFields$
        );
    }
}
