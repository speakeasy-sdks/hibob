/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type PostTimeoffEmployeesIdRequestsRequest = {
    submitTimeoffRequest: shared.SubmitTimeoffRequest;
    /**
     * Employee ID.
     */
    id: string;
};

export type PostTimeoffEmployeesIdRequestsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
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
export namespace PostTimeoffEmployeesIdRequestsRequest$ {
    export type Inbound = {
        SubmitTimeoffRequest: shared.SubmitTimeoffRequest$.Inbound;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        PostTimeoffEmployeesIdRequestsRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            SubmitTimeoffRequest: shared.SubmitTimeoffRequest$.inboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                submitTimeoffRequest: v.SubmitTimeoffRequest,
                id: v.id,
            };
        });

    export type Outbound = {
        SubmitTimeoffRequest: shared.SubmitTimeoffRequest$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostTimeoffEmployeesIdRequestsRequest
    > = z
        .object({
            submitTimeoffRequest: shared.SubmitTimeoffRequest$.outboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                SubmitTimeoffRequest: v.submitTimeoffRequest,
                id: v.id,
            };
        });
}

/** @internal */
export namespace PostTimeoffEmployeesIdRequestsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostTimeoffEmployeesIdRequestsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostTimeoffEmployeesIdRequestsResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
