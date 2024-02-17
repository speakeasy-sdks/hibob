/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../sdk/models/shared";
import { HTTPClient } from "./http";
import { RetryConfig } from "./retries";
import { pathToFunc } from "./url";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.hibob.com/v1",
    /**
     * Sandbox
     */
    "https://api.sandbox.hibob.com/v1",
] as const;

export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const params: Record<string, string> = {};
    const serverIdx = options.serverIdx ?? 0;

    if (!serverURL) {
        serverURL = ServerList[serverIdx] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = Object.freeze({
    language: "typescript",
    openapiDocVersion: "1.0.0",
    sdkVersion: "4.0.4",
    genVersion: "2.262.2",
    userAgent: "speakeasy-sdk/typescript 4.0.4 2.262.2 1.0.0 hibob",
});
