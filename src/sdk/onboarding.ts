/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";

export class Onboarding extends ClientSDK {
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
     * Get a summary of all onboarding wizards.
     *
     * @remarks
     * Wizard info includes Wizard ID, name and description.<br /><b>Supported user types:</b> Service.
     */
    async getOnboardingWizards(
        options?: RequestOptions
    ): Promise<operations.GetOnboardingWizardsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/onboarding/wizards")();

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
            const result = operations.GetOnboardingWizardsResponse$.inboundSchema.parse({
                ...responseFields$,
                OnboardingWizards: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetOnboardingWizardsResponse$.inboundSchema.parse({
                ...responseFields$,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
