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

export class Objects extends ClientSDK {
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
     * Read company positions
     *
     * @remarks
     * Returns a list of the company positions, filtered by the specified attributes.  <br /><br><b>Note</b>
     */
    async postObjectsPositionSearch(
        input: shared.GetPositionsRequest,
        options?: RequestOptions
    ): Promise<operations.PostObjectsPositionSearchResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => shared.GetPositionsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/objects/position/search")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "post_/objects/position/search" };
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
                    return operations.PostObjectsPositionSearchResponse$.inboundSchema.parse({
                        ...responseFields$,
                        PositionEntries: val$,
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
                    return operations.PostObjectsPositionSearchResponse$.inboundSchema.parse({
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
}
