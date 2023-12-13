/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";

export class Tasks extends ClientSDK {
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
     * Read my tasks
     *
     * @remarks
     * <b>Supported user types:</b> Employee.
     */
    async getMyTasks(options?: RequestOptions): Promise<operations.GetMyTasksResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const path = this.templateURLComponent("/my/tasks")();

        const security =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetMyTasksResponse$.inboundSchema.parse({
                ...responseFields,
                Tasks: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Read all open tasks.
     *
     * @remarks
     * <b>Supported user types:</b> Employee.
     */
    async getTasks(options?: RequestOptions): Promise<operations.GetTasksResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const path = this.templateURLComponent("/tasks")();

        const security =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetTasksResponse$.inboundSchema.parse({
                ...responseFields,
                Tasks: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Read tasks of a specific employee
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getTasksPeopleId(
        input: operations.GetTasksPeopleIdRequest,
        security: operations.GetTasksPeopleIdSecurity,
        options?: RequestOptions
    ): Promise<operations.GetTasksPeopleIdResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.GetTasksPeopleIdRequest$.outboundSchema.parse(input);
        const body = null;

        const pathParams = {
            id: enc$.encodeSimple("id", payload.id, { explode: false, charEncoding: "percent" }),
        };

        const path = this.templateURLComponent("/tasks/people/{id}")(pathParams);

        const query = [
            enc$.encodeForm("task_status", payload.task_status, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const securitySettings = this.resolveSecurity(
            [{ value: security?.basic, type: "http:basic" }],
            [{ value: security?.bearer, fieldName: "Authorization", type: "apiKey:header" }]
        );

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, query, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetTasksPeopleIdResponse$.inboundSchema.parse({
                ...responseFields,
                Tasks: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetTasksPeopleIdResponse$.inboundSchema.parse({
                ...responseFields,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Mark a task as complete
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async postTasksTaskIdComplete(
        input: operations.PostTasksTaskIdCompleteRequest,
        security: operations.PostTasksTaskIdCompleteSecurity,
        options?: RequestOptions
    ): Promise<operations.PostTasksTaskIdCompleteResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.PostTasksTaskIdCompleteRequest$.outboundSchema.parse(input);
        const body = null;

        const pathParams = {
            taskId: enc$.encodeSimple("taskId", payload.taskId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/tasks/{taskId}/complete")(pathParams);

        const securitySettings = this.resolveSecurity(
            [{ value: security?.basic, type: "http:basic" }],
            [{ value: security?.bearer, fieldName: "Authorization", type: "apiKey:header" }]
        );

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.PostTasksTaskIdCompleteResponse$.inboundSchema.parse({
                ...responseFields,
                Tasks: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.PostTasksTaskIdCompleteResponse$.inboundSchema.parse({
                ...responseFields,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
