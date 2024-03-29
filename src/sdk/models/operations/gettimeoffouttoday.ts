/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../types";
import * as shared from "../shared";
import * as z from "zod";

export type GetTimeoffOuttodayRequest = {
    /**
     * Include Hourly Requests
     */
    includeHourly?: boolean | undefined;
    /**
     * Show the policy type's name instead of the policy's custom public name if the user has permission to view it, and the policy's custom public name exists.
     */
    includePrivate?: boolean | undefined;
    /**
     * The employee's site ID
     */
    siteId?: number | undefined;
    /**
     * Date to report out of the office. If not specified, the date at UTC at the time of the request is used.
     */
    today?: RFCDate | undefined;
};

export type GetTimeoffOuttodayResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT | undefined;
    /**
     * The list of people who have taken time off, as seen by the logged in user.
     */
    outTodays?: shared.OutTodays | undefined;
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
export namespace GetTimeoffOuttodayRequest$ {
    export type Inbound = {
        includeHourly?: boolean | undefined;
        includePrivate?: boolean | undefined;
        siteId?: number | undefined;
        today?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetTimeoffOuttodayRequest, z.ZodTypeDef, Inbound> = z
        .object({
            includeHourly: z.boolean().default(false),
            includePrivate: z.boolean().default(false),
            siteId: z.number().int().optional(),
            today: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
        })
        .transform((v) => {
            return {
                includeHourly: v.includeHourly,
                includePrivate: v.includePrivate,
                ...(v.siteId === undefined ? null : { siteId: v.siteId }),
                ...(v.today === undefined ? null : { today: v.today }),
            };
        });

    export type Outbound = {
        includeHourly: boolean;
        includePrivate: boolean;
        siteId?: number | undefined;
        today?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimeoffOuttodayRequest> = z
        .object({
            includeHourly: z.boolean().default(false),
            includePrivate: z.boolean().default(false),
            siteId: z.number().int().optional(),
            today: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
        })
        .transform((v) => {
            return {
                includeHourly: v.includeHourly,
                includePrivate: v.includePrivate,
                ...(v.siteId === undefined ? null : { siteId: v.siteId }),
                ...(v.today === undefined ? null : { today: v.today }),
            };
        });
}

/** @internal */
export namespace GetTimeoffOuttodayResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        OutTodays?: shared.OutTodays$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetTimeoffOuttodayResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            OutTodays: shared.OutTodays$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                ...(v.OutTodays === undefined ? null : { outTodays: v.OutTodays }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        OutTodays?: shared.OutTodays$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimeoffOuttodayResponse> = z
        .object({
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            outTodays: shared.OutTodays$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                ...(v.outTodays === undefined ? null : { OutTodays: v.outTodays }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
