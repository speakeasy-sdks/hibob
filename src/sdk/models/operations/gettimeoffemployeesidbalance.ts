/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { RFCDate } from "../../../sdk/types";
import { z } from "zod";

export type GetTimeoffEmployeesIdBalanceRequest = {
    /**
     * Point in time.
     */
    date: RFCDate;
    /**
     * Employee ID.
     */
    id: string;
    /**
     * Policy type name.
     */
    policyType: string;
};

export type GetTimeoffEmployeesIdBalanceResponse = {
    /**
     * Balance result.
     */
    balanceResult?: shared.BalanceResult | undefined;
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
export namespace GetTimeoffEmployeesIdBalanceRequest$ {
    export type Inbound = {
        date: string;
        id: string;
        policyType: string;
    };

    export const inboundSchema: z.ZodType<
        GetTimeoffEmployeesIdBalanceRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            date: z.string().transform((v) => new RFCDate(v)),
            id: z.string(),
            policyType: z.string(),
        })
        .transform((v) => {
            return {
                date: v.date,
                id: v.id,
                policyType: v.policyType,
            };
        });

    export type Outbound = {
        date: string;
        id: string;
        policyType: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetTimeoffEmployeesIdBalanceRequest
    > = z
        .object({
            date: z.instanceof(RFCDate).transform((v) => v.toString()),
            id: z.string(),
            policyType: z.string(),
        })
        .transform((v) => {
            return {
                date: v.date,
                id: v.id,
                policyType: v.policyType,
            };
        });
}

/** @internal */
export namespace GetTimeoffEmployeesIdBalanceResponse$ {
    export type Inbound = {
        BalanceResult?: shared.BalanceResult$.Inbound | undefined;
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetTimeoffEmployeesIdBalanceResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            BalanceResult: shared.BalanceResult$.inboundSchema.optional(),
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BalanceResult === undefined ? null : { balanceResult: v.BalanceResult }),
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BalanceResult?: shared.BalanceResult$.Outbound | undefined;
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetTimeoffEmployeesIdBalanceResponse
    > = z
        .object({
            balanceResult: shared.BalanceResult$.outboundSchema.optional(),
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.balanceResult === undefined ? null : { BalanceResult: v.balanceResult }),
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
