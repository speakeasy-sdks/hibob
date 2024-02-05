/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Use Fields Metadata API for available field definitions
 */
export type PutPeopleIdentifierRequestBody = {};

export type PutPeopleIdentifierRequest = {
    /**
     * Use Fields Metadata API for available field definitions
     */
    requestBody: PutPeopleIdentifierRequestBody;
    /**
     * Employee ID.
     */
    identifier: string;
};

export type PutPeopleIdentifierResponse = {
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
export namespace PutPeopleIdentifierRequestBody$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<PutPeopleIdentifierRequestBody, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PutPeopleIdentifierRequestBody> =
        z.object({});
}

/** @internal */
export namespace PutPeopleIdentifierRequest$ {
    export type Inbound = {
        RequestBody: PutPeopleIdentifierRequestBody$.Inbound;
        identifier: string;
    };

    export const inboundSchema: z.ZodType<PutPeopleIdentifierRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => PutPeopleIdentifierRequestBody$.inboundSchema),
            identifier: z.string(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                identifier: v.identifier,
            };
        });

    export type Outbound = {
        RequestBody: PutPeopleIdentifierRequestBody$.Outbound;
        identifier: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PutPeopleIdentifierRequest> = z
        .object({
            requestBody: z.lazy(() => PutPeopleIdentifierRequestBody$.outboundSchema),
            identifier: z.string(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                identifier: v.identifier,
            };
        });
}

/** @internal */
export namespace PutPeopleIdentifierResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PutPeopleIdentifierResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PutPeopleIdentifierResponse> = z
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
