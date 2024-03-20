/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

/**
 * File format
 */
export enum Format {
    Csv = "csv",
    Xlsx = "xlsx",
}

export type GetCompanyReportsReportIdDownloadAsyncRequest = {
    /**
     * File format
     */
    format: Format;
    /**
     * Optional field. Only enforced when <i><b>format</b></i> is <i>json</i>. <br> <b>If not sent:</b> supply machine-readable values only. <br> <br> Possible values: <br>  <br> <b>APPEND</b> - include the additional "humanReadable" JSON node in the response. <br>  <br> <b>REPLACE</b> - supply humanReadable values in JSON instead of machine-readable format. <br>
     */
    humanReadable?: string | undefined;
    /**
     * Should include info
     */
    includeInfo?: boolean | undefined;
    /**
     * Requested language for the report columns in the format of the locale (e.g. fr-FR). If this is not provided, the user preferences locale is used.
     */
    locale?: string | undefined;
    /**
     * Report id
     */
    reportId: number;
};

export type GetCompanyReportsReportIdDownloadAsyncResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Unexpected error
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
export const Format$ = z.nativeEnum(Format);

/** @internal */
export namespace GetCompanyReportsReportIdDownloadAsyncRequest$ {
    export type Inbound = {
        format: Format;
        humanReadable?: string | undefined;
        includeInfo?: boolean | undefined;
        locale?: string | undefined;
        reportId: number;
    };

    export const inboundSchema: z.ZodType<
        GetCompanyReportsReportIdDownloadAsyncRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            format: Format$,
            humanReadable: z.string().optional(),
            includeInfo: z.boolean().optional(),
            locale: z.string().optional(),
            reportId: z.number(),
        })
        .transform((v) => {
            return {
                format: v.format,
                ...(v.humanReadable === undefined ? null : { humanReadable: v.humanReadable }),
                ...(v.includeInfo === undefined ? null : { includeInfo: v.includeInfo }),
                ...(v.locale === undefined ? null : { locale: v.locale }),
                reportId: v.reportId,
            };
        });

    export type Outbound = {
        format: Format;
        humanReadable?: string | undefined;
        includeInfo?: boolean | undefined;
        locale?: string | undefined;
        reportId: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCompanyReportsReportIdDownloadAsyncRequest
    > = z
        .object({
            format: Format$,
            humanReadable: z.string().optional(),
            includeInfo: z.boolean().optional(),
            locale: z.string().optional(),
            reportId: z.number(),
        })
        .transform((v) => {
            return {
                format: v.format,
                ...(v.humanReadable === undefined ? null : { humanReadable: v.humanReadable }),
                ...(v.includeInfo === undefined ? null : { includeInfo: v.includeInfo }),
                ...(v.locale === undefined ? null : { locale: v.locale }),
                reportId: v.reportId,
            };
        });
}

/** @internal */
export namespace GetCompanyReportsReportIdDownloadAsyncResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetCompanyReportsReportIdDownloadAsyncResponse,
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
        GetCompanyReportsReportIdDownloadAsyncResponse
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
