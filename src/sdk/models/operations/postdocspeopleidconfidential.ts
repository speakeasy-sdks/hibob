/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PostDocsPeopleIdConfidentialRequest = {
    /**
     * Document to upload.
     */
    addDocument: shared.AddDocument;
    /**
     * Employee ID.
     */
    id: string;
};

export type PostDocsPeopleIdConfidentialResponse = {
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
export namespace PostDocsPeopleIdConfidentialRequest$ {
    export type Inbound = {
        AddDocument: shared.AddDocument$.Inbound;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        PostDocsPeopleIdConfidentialRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            AddDocument: shared.AddDocument$.inboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                addDocument: v.AddDocument,
                id: v.id,
            };
        });

    export type Outbound = {
        AddDocument: shared.AddDocument$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostDocsPeopleIdConfidentialRequest
    > = z
        .object({
            addDocument: shared.AddDocument$.outboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                AddDocument: v.addDocument,
                id: v.id,
            };
        });
}

/** @internal */
export namespace PostDocsPeopleIdConfidentialResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostDocsPeopleIdConfidentialResponse,
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
        PostDocsPeopleIdConfidentialResponse
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
