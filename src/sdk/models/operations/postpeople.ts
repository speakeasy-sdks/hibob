/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type PostPeopleResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Employee
     */
    employee?: shared.Employee | undefined;
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
export namespace PostPeopleResponse$ {
    export type Inbound = {
        ContentType: string;
        Employee?: shared.Employee$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PostPeopleResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Employee: shared.Employee$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Employee === undefined ? null : { employee: v.Employee }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Employee?: shared.Employee$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostPeopleResponse> = z
        .object({
            contentType: z.string(),
            employee: shared.Employee$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.employee === undefined ? null : { Employee: v.employee }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
