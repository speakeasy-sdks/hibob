/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type PostEmployeesEmployeeIdStartDateRequest = {
    startDateUpdate: shared.StartDateUpdate;
    /**
     * employee ID
     */
    employeeId: string;
};

export type PostEmployeesEmployeeIdStartDateResponse = {
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
export namespace PostEmployeesEmployeeIdStartDateRequest$ {
    export type Inbound = {
        StartDateUpdate: shared.StartDateUpdate$.Inbound;
        employeeId: string;
    };

    export const inboundSchema: z.ZodType<
        PostEmployeesEmployeeIdStartDateRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            StartDateUpdate: shared.StartDateUpdate$.inboundSchema,
            employeeId: z.string(),
        })
        .transform((v) => {
            return {
                startDateUpdate: v.StartDateUpdate,
                employeeId: v.employeeId,
            };
        });

    export type Outbound = {
        StartDateUpdate: shared.StartDateUpdate$.Outbound;
        employeeId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostEmployeesEmployeeIdStartDateRequest
    > = z
        .object({
            startDateUpdate: shared.StartDateUpdate$.outboundSchema,
            employeeId: z.string(),
        })
        .transform((v) => {
            return {
                StartDateUpdate: v.startDateUpdate,
                employeeId: v.employeeId,
            };
        });
}

/** @internal */
export namespace PostEmployeesEmployeeIdStartDateResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostEmployeesEmployeeIdStartDateResponse,
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
        PostEmployeesEmployeeIdStartDateResponse
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
