/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type PostPeopleSearchResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Requested employees.
     */
    employees?: shared.Employees | undefined;
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
export namespace PostPeopleSearchResponse$ {
    export type Inbound = {
        ContentType: string;
        Employees?: shared.Employees$.Inbound | undefined;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PostPeopleSearchResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostPeopleSearchResponse> = z
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
