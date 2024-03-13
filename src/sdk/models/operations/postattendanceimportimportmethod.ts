/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

/**
 * Indicates if the provided data should be processed via an aggregation engine or immediately. <ul>Aggregate - will add the logs to a temporary location, and an aggregation job will process the data asynchronously.</ul><ul>Immediate - will insert the records as-is.</ul>
 */
export enum ImportMethod {
    Aggregate = "aggregate",
    Immediate = "immediate",
}

export type PostAttendanceImportImportMethodRequest = {
    importAttendanceData: shared.ImportAttendanceData;
    /**
     * Indicates if the provided data should be processed via an aggregation engine or immediately. <ul>Aggregate - will add the logs to a temporary location, and an aggregation job will process the data asynchronously.</ul><ul>Immediate - will insert the records as-is.</ul>
     */
    importMethod: ImportMethod;
};

export type PostAttendanceImportImportMethodResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Records imported
     */
    importAttendanceResponse?: shared.ImportAttendanceResponse | undefined;
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
export const ImportMethod$ = z.nativeEnum(ImportMethod);

/** @internal */
export namespace PostAttendanceImportImportMethodRequest$ {
    export type Inbound = {
        ImportAttendanceData: shared.ImportAttendanceData$.Inbound;
        importMethod: ImportMethod;
    };

    export const inboundSchema: z.ZodType<
        PostAttendanceImportImportMethodRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ImportAttendanceData: shared.ImportAttendanceData$.inboundSchema,
            importMethod: ImportMethod$,
        })
        .transform((v) => {
            return {
                importAttendanceData: v.ImportAttendanceData,
                importMethod: v.importMethod,
            };
        });

    export type Outbound = {
        ImportAttendanceData: shared.ImportAttendanceData$.Outbound;
        importMethod: ImportMethod;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostAttendanceImportImportMethodRequest
    > = z
        .object({
            importAttendanceData: shared.ImportAttendanceData$.outboundSchema,
            importMethod: ImportMethod$,
        })
        .transform((v) => {
            return {
                ImportAttendanceData: v.importAttendanceData,
                importMethod: v.importMethod,
            };
        });
}

/** @internal */
export namespace PostAttendanceImportImportMethodResponse$ {
    export type Inbound = {
        ContentType: string;
        ImportAttendanceResponse?: shared.ImportAttendanceResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostAttendanceImportImportMethodResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            ImportAttendanceResponse: shared.ImportAttendanceResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ImportAttendanceResponse === undefined
                    ? null
                    : { importAttendanceResponse: v.ImportAttendanceResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ImportAttendanceResponse?: shared.ImportAttendanceResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostAttendanceImportImportMethodResponse
    > = z
        .object({
            contentType: z.string(),
            importAttendanceResponse: shared.ImportAttendanceResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.importAttendanceResponse === undefined
                    ? null
                    : { ImportAttendanceResponse: v.importAttendanceResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
