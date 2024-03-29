/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetProfilesRequest = {
    /**
     * Optional field name to sort by. This defaults to firstName.
     */
    sortBy?: string | undefined;
};

export type GetProfilesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Employee profiles
     */
    employeesProfiles?: shared.EmployeesProfiles | undefined;
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
export namespace GetProfilesRequest$ {
    export type Inbound = {
        sortBy?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetProfilesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            sortBy: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.sortBy === undefined ? null : { sortBy: v.sortBy }),
            };
        });

    export type Outbound = {
        sortBy?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProfilesRequest> = z
        .object({
            sortBy: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.sortBy === undefined ? null : { sortBy: v.sortBy }),
            };
        });
}

/** @internal */
export namespace GetProfilesResponse$ {
    export type Inbound = {
        ContentType: string;
        EmployeesProfiles?: shared.EmployeesProfiles$.Inbound | undefined;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetProfilesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            EmployeesProfiles: shared.EmployeesProfiles$.inboundSchema.optional(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.EmployeesProfiles === undefined
                    ? null
                    : { employeesProfiles: v.EmployeesProfiles }),
                ...(v.Error === undefined ? null : { error: v.Error }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        EmployeesProfiles?: shared.EmployeesProfiles$.Outbound | undefined;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProfilesResponse> = z
        .object({
            contentType: z.string(),
            employeesProfiles: shared.EmployeesProfiles$.outboundSchema.optional(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.employeesProfiles === undefined
                    ? null
                    : { EmployeesProfiles: v.employeesProfiles }),
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
