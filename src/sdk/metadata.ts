/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";

export class Metadata extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Delete an item from an existing list.
     */
    async deleteCompanyNamedListsListNameItemId(
        input: operations.DeleteCompanyNamedListsListNameItemIdRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteCompanyNamedListsListNameItemIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input,
            (value$) =>
                operations.DeleteCompanyNamedListsListNameItemIdRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
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

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "delete_/company/named-lists/{listName}/{itemId}" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

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

        return schemas$.parse(
            undefined,
            () =>
                operations.DeleteCompanyNamedListsListNameItemIdResponse$.inboundSchema.parse(
                    responseFields$
                ),
            "Response validation failed"
        );
    }

    /**
     * Delete an existing field.
     */
    async deleteCompanyPeopleFieldsFieldId(
        input: operations.DeleteCompanyPeopleFieldsFieldIdRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteCompanyPeopleFieldsFieldIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input,
            (value$) =>
                operations.DeleteCompanyPeopleFieldsFieldIdRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            fieldId: enc$.encodeSimple("fieldId", payload$.fieldId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/company/people/fields/{fieldId}")(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "delete_/company/people/fields/{fieldId}" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

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

        return schemas$.parse(
            undefined,
            () =>
                operations.DeleteCompanyPeopleFieldsFieldIdResponse$.inboundSchema.parse(
                    responseFields$
                ),
            "Response validation failed"
        );
    }

    /**
     * Get all company lists
     */
    async getCompanyNamedLists(
        input: operations.GetCompanyNamedListsRequest,
        options?: RequestOptions
    ): Promise<operations.GetCompanyNamedListsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.GetCompanyNamedListsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "get_/company/named-lists" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetCompanyNamedListsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Lists: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get a specific company list by name.
     */
    async getCompanyNamedListsListName(
        input: operations.GetCompanyNamedListsListNameRequest,
        options?: RequestOptions
    ): Promise<operations.GetCompanyNamedListsListNameResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) =>
                operations.GetCompanyNamedListsListNameRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "get_/company/named-lists/{listName}" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetCompanyNamedListsListNameResponse$.inboundSchema.parse({
                        ...responseFields$,
                        List: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchStatusCode(response, 404)) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () =>
                operations.GetCompanyNamedListsListNameResponse$.inboundSchema.parse(
                    responseFields$
                ),
            "Response validation failed"
        );
    }

    /**
     * Get all company fields.
     */
    async getCompanyPeopleFields(
        options?: RequestOptions
    ): Promise<operations.GetCompanyPeopleFieldsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/company/people/fields")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "get_/company/people/fields" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetCompanyPeopleFieldsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Fields: val$,
                    });
                },
                "Response validation failed"
            );
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
     * Returns a list of all fields of object type position.<br/>
     */
    async getMetadataObjectsPosition(
        options?: RequestOptions
    ): Promise<operations.GetMetadataObjectsPositionResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/metadata/objects/position")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "get_/metadata/objects/position" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetMetadataObjectsPositionResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ObjectsMetadata: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetMetadataObjectsPositionResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Error: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Read metadata of custom tables defined
     */
    async getPeopleCustomTablesMetadata(
        options?: RequestOptions
    ): Promise<operations.GetPeopleCustomTablesMetadataResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/people/custom-tables/metadata")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "get_/people/custom-tables/metadata" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetPeopleCustomTablesMetadataResponse$.inboundSchema.parse({
                        ...responseFields$,
                        CustomTableMetadataList: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Read metadata for specific custom table
     */
    async getPeopleCustomTablesMetadataCustomTableId(
        input: operations.GetPeopleCustomTablesMetadataCustomTableIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetPeopleCustomTablesMetadataCustomTableIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) =>
                operations.GetPeopleCustomTablesMetadataCustomTableIdRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
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

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "get_/people/custom-tables/metadata/{custom_table_id}" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetPeopleCustomTablesMetadataCustomTableIdResponse$.inboundSchema.parse(
                        {
                            ...responseFields$,
                            CustomTableMetadata: val$,
                        }
                    );
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Add a new item to an existing list.
     */
    async postCompanyNamedListsListName(
        input: operations.PostCompanyNamedListsListNameRequest,
        options?: RequestOptions
    ): Promise<operations.PostCompanyNamedListsListNameResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) =>
                operations.PostCompanyNamedListsListNameRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.NewListItem, { explode: true });

        const pathParams$ = {
            listName: enc$.encodeSimple("listName", payload$.listName, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/company/named-lists/{listName}")(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "post_/company/named-lists/{listName}" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.PostCompanyNamedListsListNameResponse$.inboundSchema.parse({
                        ...responseFields$,
                        FlatListItemId: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchStatusCode(response, [404, 409])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () =>
                operations.PostCompanyNamedListsListNameResponse$.inboundSchema.parse(
                    responseFields$
                ),
            "Response validation failed"
        );
    }

    /**
     * Create a new field.
     */
    async postCompanyPeopleFields(
        input: shared.CreateFieldRequest,
        options?: RequestOptions
    ): Promise<operations.PostCompanyPeopleFieldsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => shared.CreateFieldRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/company/people/fields")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "post_/company/people/fields" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.PostCompanyPeopleFieldsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        FieldId: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchStatusCode(response, [400, 404])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.PostCompanyPeopleFieldsResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Update an existing item from a list.
     */
    async putCompanyNamedListsListNameItemId(
        input: operations.PutCompanyNamedListsListNameItemIdRequest,
        options?: RequestOptions
    ): Promise<operations.PutCompanyNamedListsListNameItemIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input,
            (value$) =>
                operations.PutCompanyNamedListsListNameItemIdRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "put_/company/named-lists/{listName}/{itemId}" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

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

        return schemas$.parse(
            undefined,
            () =>
                operations.PutCompanyNamedListsListNameItemIdResponse$.inboundSchema.parse(
                    responseFields$
                ),
            "Response validation failed"
        );
    }

    /**
     * Update an existing field
     */
    async putCompanyPeopleFieldsFieldId(
        input: operations.PutCompanyPeopleFieldsFieldIdRequest,
        options?: RequestOptions
    ): Promise<operations.PutCompanyPeopleFieldsFieldIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input,
            (value$) =>
                operations.PutCompanyPeopleFieldsFieldIdRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.UpdateFieldRequest, { explode: true });

        const pathParams$ = {
            fieldId: enc$.encodeSimple("fieldId", payload$.fieldId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/company/people/fields/{fieldId}")(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "put_/company/people/fields/{fieldId}" };
        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

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

        return schemas$.parse(
            undefined,
            () =>
                operations.PutCompanyPeopleFieldsFieldIdResponse$.inboundSchema.parse(
                    responseFields$
                ),
            "Response validation failed"
        );
    }
}
