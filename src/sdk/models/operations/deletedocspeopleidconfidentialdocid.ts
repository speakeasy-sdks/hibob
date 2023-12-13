/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type DeleteDocsPeopleIdConfidentialDocIdSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type DeleteDocsPeopleIdConfidentialDocIdRequest = {
    /**
     * Document ID.
     */
    docId: string;
    /**
     * Employee ID.
     */
    id: string;
};

export type DeleteDocsPeopleIdConfidentialDocIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Unexpected error.
     */
    error?: shared.ErrorT | undefined;
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
export namespace DeleteDocsPeopleIdConfidentialDocIdRequest$ {
    export type Inbound = {
        docId: string;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        DeleteDocsPeopleIdConfidentialDocIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            docId: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                docId: v.docId,
                id: v.id,
            };
        });

    export type Outbound = {
        docId: string;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteDocsPeopleIdConfidentialDocIdRequest
    > = z
        .object({
            docId: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                docId: v.docId,
                id: v.id,
            };
        });
}

/** @internal */
export namespace DeleteDocsPeopleIdConfidentialDocIdResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        DeleteDocsPeopleIdConfidentialDocIdResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteDocsPeopleIdConfidentialDocIdResponse
    > = z
        .object({
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
