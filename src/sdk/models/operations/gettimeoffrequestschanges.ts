/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { RFCDate } from "../../../sdk/types";
import { z } from "zod";

export type GetTimeoffRequestsChangesSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type GetTimeoffRequestsChangesRequest = {
    /**
     * Optional parameter. Indicates whether to include pending requests in the results.
     */
    includePending?: boolean | undefined;
    /**
     * Timestamp starting from which to return the changes. Should be in ISO-8601 format, e.g. 2050-04-05T14:30:24.345Z or 2050-04-05T12:30-02:00.
     */
    since: RFCDate;
};

export type GetTimeoffRequestsChangesResponse = {
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
     * List of changes
     */
    timeoffChanges?: shared.TimeoffChanges | undefined;
};

/** @internal */
export namespace GetTimeoffRequestsChangesRequest$ {
    export type Inbound = {
        includePending?: boolean | undefined;
        since: string;
    };

    export const inboundSchema: z.ZodType<GetTimeoffRequestsChangesRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                includePending: z.boolean().default(false),
                since: z.string().transform((v) => new RFCDate(v)),
            })
            .transform((v) => {
                return {
                    ...(v.includePending === undefined
                        ? null
                        : { includePending: v.includePending }),
                    since: v.since,
                };
            });

    export type Outbound = {
        includePending: boolean;
        since: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetTimeoffRequestsChangesRequest
    > = z
        .object({
            includePending: z.boolean().default(false),
            since: z.instanceof(RFCDate).transform((v) => v.toString()),
        })
        .transform((v) => {
            return {
                includePending: v.includePending,
                since: v.since,
            };
        });
}

/** @internal */
export namespace GetTimeoffRequestsChangesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TimeoffChanges?: shared.TimeoffChanges$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetTimeoffRequestsChangesResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TimeoffChanges: shared.TimeoffChanges$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TimeoffChanges === undefined ? null : { timeoffChanges: v.TimeoffChanges }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TimeoffChanges?: shared.TimeoffChanges$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetTimeoffRequestsChangesResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            timeoffChanges: shared.TimeoffChanges$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.timeoffChanges === undefined ? null : { TimeoffChanges: v.timeoffChanges }),
            };
        });
}
