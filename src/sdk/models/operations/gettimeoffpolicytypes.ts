/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetTimeoffPolicyTypesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Unexpected error.
     */
    error?: shared.ErrorT | undefined;
    /**
     * List of policy types names.
     */
    policyTypes?: shared.PolicyTypes | undefined;
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
export namespace GetTimeoffPolicyTypesResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        PolicyTypes?: shared.PolicyTypes$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetTimeoffPolicyTypesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            PolicyTypes: shared.PolicyTypes$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                ...(v.PolicyTypes === undefined ? null : { policyTypes: v.PolicyTypes }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        PolicyTypes?: shared.PolicyTypes$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimeoffPolicyTypesResponse> =
        z
            .object({
                contentType: z.string(),
                error: shared.ErrorT$.outboundSchema.optional(),
                policyTypes: shared.PolicyTypes$.outboundSchema.optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    ...(v.error === undefined ? null : { Error: v.error }),
                    ...(v.policyTypes === undefined ? null : { PolicyTypes: v.policyTypes }),
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
