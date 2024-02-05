/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetTimeoffEmployeesIdRequestsRequestIdRequest = {
    /**
     * employee id
     */
    id: string;
    /**
     * request id
     */
    requestId: number;
};

export type GetTimeoffEmployeesIdRequestsRequestIdResponse = {
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
    /**
     * success
     */
    timeoffRequest?: shared.TimeoffRequest | undefined;
};

/** @internal */
export namespace GetTimeoffEmployeesIdRequestsRequestIdRequest$ {
    export type Inbound = {
        id: string;
        requestId: number;
    };

    export const inboundSchema: z.ZodType<
        GetTimeoffEmployeesIdRequestsRequestIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.string(),
            requestId: z.number().int(),
        })
        .transform((v) => {
            return {
                id: v.id,
                requestId: v.requestId,
            };
        });

    export type Outbound = {
        id: string;
        requestId: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetTimeoffEmployeesIdRequestsRequestIdRequest
    > = z
        .object({
            id: z.string(),
            requestId: z.number().int(),
        })
        .transform((v) => {
            return {
                id: v.id,
                requestId: v.requestId,
            };
        });
}

/** @internal */
export namespace GetTimeoffEmployeesIdRequestsRequestIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TimeoffRequest?: shared.TimeoffRequest$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetTimeoffEmployeesIdRequestsRequestIdResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TimeoffRequest: shared.TimeoffRequest$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TimeoffRequest === undefined ? null : { timeoffRequest: v.TimeoffRequest }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TimeoffRequest?: shared.TimeoffRequest$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetTimeoffEmployeesIdRequestsRequestIdResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            timeoffRequest: shared.TimeoffRequest$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.timeoffRequest === undefined ? null : { TimeoffRequest: v.timeoffRequest }),
            };
        });
}
