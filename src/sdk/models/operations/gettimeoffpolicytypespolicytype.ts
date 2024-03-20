/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetTimeoffPolicyTypesPolicyTypeRequest = {
    /**
     * Policy Type name
     */
    policyType: string;
};

export type GetTimeoffPolicyTypesPolicyTypeResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Policy type
     */
    policyType?: shared.PolicyType | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GetTimeoffPolicyTypesPolicyTypeRequest$ {
    export type Inbound = {
        policyType: string;
    };

    export const inboundSchema: z.ZodType<
        GetTimeoffPolicyTypesPolicyTypeRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            policyType: z.string(),
        })
        .transform((v) => {
            return {
                policyType: v.policyType,
            };
        });

    export type Outbound = {
        policyType: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetTimeoffPolicyTypesPolicyTypeRequest
    > = z
        .object({
            policyType: z.string(),
        })
        .transform((v) => {
            return {
                policyType: v.policyType,
            };
        });
}

/** @internal */
export namespace GetTimeoffPolicyTypesPolicyTypeResponse$ {
    export type Inbound = {
        ContentType: string;
        PolicyType?: shared.PolicyType$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetTimeoffPolicyTypesPolicyTypeResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            PolicyType: shared.PolicyType$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.PolicyType === undefined ? null : { policyType: v.PolicyType }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        PolicyType?: shared.PolicyType$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetTimeoffPolicyTypesPolicyTypeResponse
    > = z
        .object({
            contentType: z.string(),
            policyType: shared.PolicyType$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.policyType === undefined ? null : { PolicyType: v.policyType }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
