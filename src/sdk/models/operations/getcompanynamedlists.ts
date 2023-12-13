/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetCompanyNamedListsSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type GetCompanyNamedListsRequest = {
    /**
     * Whether to include archived items in the response.
     */
    includeArchived?: boolean | undefined;
};

export type GetCompanyNamedListsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Successful response
     */
    lists?: Array<shared.List> | undefined;
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
export namespace GetCompanyNamedListsRequest$ {
    export type Inbound = {
        includeArchived?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<GetCompanyNamedListsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            includeArchived: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.includeArchived === undefined
                    ? null
                    : { includeArchived: v.includeArchived }),
            };
        });

    export type Outbound = {
        includeArchived?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCompanyNamedListsRequest> = z
        .object({
            includeArchived: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.includeArchived === undefined
                    ? null
                    : { includeArchived: v.includeArchived }),
            };
        });
}

/** @internal */
export namespace GetCompanyNamedListsResponse$ {
    export type Inbound = {
        ContentType: string;
        Lists?: Array<shared.List$.Inbound> | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetCompanyNamedListsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Lists: z.array(shared.List$.inboundSchema).optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Lists === undefined ? null : { lists: v.Lists }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Lists?: Array<shared.List$.Outbound> | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCompanyNamedListsResponse> = z
        .object({
            contentType: z.string(),
            lists: z.array(shared.List$.outboundSchema).optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.lists === undefined ? null : { Lists: v.lists }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
