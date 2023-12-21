/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetPayrollHistorySecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type GetPayrollHistoryRequest = {
    /**
     * filter payroll for specific department.
     */
    department?: string | undefined;
    /**
     * Whether to include inactive employees in the response.
     */
    showInactive?: boolean | undefined;
};

export type GetPayrollHistoryResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Payroll data.
     */
    employees?: shared.Employees | undefined;
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
export namespace GetPayrollHistoryRequest$ {
    export type Inbound = {
        department?: string | undefined;
        showInactive?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<GetPayrollHistoryRequest, z.ZodTypeDef, Inbound> = z
        .object({
            department: z.string().optional(),
            showInactive: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.department === undefined ? null : { department: v.department }),
                ...(v.showInactive === undefined ? null : { showInactive: v.showInactive }),
            };
        });

    export type Outbound = {
        department?: string | undefined;
        showInactive?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPayrollHistoryRequest> = z
        .object({
            department: z.string().optional(),
            showInactive: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.department === undefined ? null : { department: v.department }),
                ...(v.showInactive === undefined ? null : { showInactive: v.showInactive }),
            };
        });
}

/** @internal */
export namespace GetPayrollHistoryResponse$ {
    export type Inbound = {
        ContentType: string;
        Employees?: shared.Employees$.Inbound | undefined;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetPayrollHistoryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Employees: shared.Employees$.inboundSchema.optional(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Employees === undefined ? null : { employees: v.Employees }),
                ...(v.Error === undefined ? null : { error: v.Error }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Employees?: shared.Employees$.Outbound | undefined;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPayrollHistoryResponse> = z
        .object({
            contentType: z.string(),
            employees: shared.Employees$.outboundSchema.optional(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.employees === undefined ? null : { Employees: v.employees }),
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
