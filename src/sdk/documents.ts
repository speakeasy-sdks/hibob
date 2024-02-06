/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import { isBlobLike } from "../sdk/types";

export class Documents extends ClientSDK {
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
     * Delete a specific document from the employee's confidential folder.
     */
    async deleteDocsPeopleIdConfidentialDocId(
        input: operations.DeleteDocsPeopleIdConfidentialDocIdRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteDocsPeopleIdConfidentialDocIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.DeleteDocsPeopleIdConfidentialDocIdRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            docId: enc$.encodeSimple("docId", payload$.docId, {
                explode: false,
                charEncoding: "percent",
            }),
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/docs/people/{id}/confidential/{docId}")(
            pathParams$
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.DeleteDocsPeopleIdConfidentialDocIdResponse$.inboundSchema.parse({
                    ...responseFields$,
                    Error: responseBody,
                });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.DeleteDocsPeopleIdConfidentialDocIdResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Delete specific document from the employee's shared folder.
     */
    async deleteDocsPeopleIdSharedDocId(
        input: operations.DeleteDocsPeopleIdSharedDocIdRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteDocsPeopleIdSharedDocIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.DeleteDocsPeopleIdSharedDocIdRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            docId: enc$.encodeSimple("docId", payload$.docId, {
                explode: false,
                charEncoding: "percent",
            }),
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/docs/people/{id}/shared/{docId}")(pathParams$);

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.DeleteDocsPeopleIdSharedDocIdResponse$.inboundSchema.parse({
                ...responseFields$,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.DeleteDocsPeopleIdSharedDocIdResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Download employee's documents
     *
     * @remarks
     * Returns a list of documents and download links.<br />
     */
    async getDocsPeopleId(
        input: operations.GetDocsPeopleIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetDocsPeopleIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetDocsPeopleIdRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/docs/people/{id}")(pathParams$);

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
            const result = operations.GetDocsPeopleIdResponse$.inboundSchema.parse({
                ...responseFields$,
                EmployeeDocumentResponse: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetDocsPeopleIdResponse$.inboundSchema.parse({
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
     * Upload a document to the employee's confidential folder
     */
    async postDocsPeopleIdConfidential(
        input: operations.PostDocsPeopleIdConfidentialRequest,
        options?: RequestOptions
    ): Promise<operations.PostDocsPeopleIdConfidentialResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.PostDocsPeopleIdConfidentialRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.AddDocument, { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/docs/people/{id}/confidential")(pathParams$);

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.PostDocsPeopleIdConfidentialResponse$.inboundSchema.parse({
                ...responseFields$,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PostDocsPeopleIdConfidentialResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Upload a file to the employee's confidential folder.
     */
    async postDocsPeopleIdConfidentialUpload(
        input: operations.PostDocsPeopleIdConfidentialUploadRequest,
        options?: RequestOptions
    ): Promise<operations.PostDocsPeopleIdConfidentialUploadResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.PostDocsPeopleIdConfidentialUploadRequest$.outboundSchema.parse(input);

        const body$ = new FormData();

        if (isBlobLike(payload$.RequestBody.file)) {
            body$.append("file", payload$.RequestBody.file);
        } else {
            body$.append(
                "file",
                new Blob([payload$.RequestBody.file.content], { type: "application/octet-stream" }),
                payload$.RequestBody.file.fileName
            );
        }

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/docs/people/{id}/confidential/upload")(
            pathParams$
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.PostDocsPeopleIdConfidentialUploadResponse$.inboundSchema.parse({
                    ...responseFields$,
                    Error: responseBody,
                });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PostDocsPeopleIdConfidentialUploadResponse$.inboundSchema.parse(
            responseFields$
        );
    }

    /**
     * Upload a document to the employee's shared folder
     */
    async postDocsPeopleIdShared(
        input: operations.PostDocsPeopleIdSharedRequest,
        options?: RequestOptions
    ): Promise<operations.PostDocsPeopleIdSharedResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PostDocsPeopleIdSharedRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.AddDocument, { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/docs/people/{id}/shared")(pathParams$);

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.PostDocsPeopleIdSharedResponse$.inboundSchema.parse({
                ...responseFields$,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PostDocsPeopleIdSharedResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Upload a file to the employee's shared folder.
     */
    async postDocsPeopleIdSharedUpload(
        input: operations.PostDocsPeopleIdSharedUploadRequest,
        options?: RequestOptions
    ): Promise<operations.PostDocsPeopleIdSharedUploadResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.PostDocsPeopleIdSharedUploadRequest$.outboundSchema.parse(input);

        const body$ = new FormData();

        if (isBlobLike(payload$.RequestBody.file)) {
            body$.append("file", payload$.RequestBody.file);
        } else {
            body$.append(
                "file",
                new Blob([payload$.RequestBody.file.content], { type: "application/octet-stream" }),
                payload$.RequestBody.file.fileName
            );
        }

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/docs/people/{id}/shared/upload")(pathParams$);

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.PostDocsPeopleIdSharedUploadResponse$.inboundSchema.parse({
                ...responseFields$,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PostDocsPeopleIdSharedUploadResponse$.inboundSchema.parse(
            responseFields$
        );
    }
}
