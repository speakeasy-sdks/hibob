/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetDocsPeopleIdSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type GetDocsPeopleIdRequest = {
    /**
     * Employee ID.
     */
    id: string;
};

export type GetDocsPeopleIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * A list of the documents' names and download links.
     */
    employeeDocumentResponse?: shared.EmployeeDocumentResponse | undefined;
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
export namespace GetDocsPeopleIdRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetDocsPeopleIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDocsPeopleIdRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetDocsPeopleIdResponse$ {
    export type Inbound = {
        ContentType: string;
        EmployeeDocumentResponse?: shared.EmployeeDocumentResponse$.Inbound | undefined;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetDocsPeopleIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            EmployeeDocumentResponse: shared.EmployeeDocumentResponse$.inboundSchema.optional(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.EmployeeDocumentResponse === undefined
                    ? null
                    : { employeeDocumentResponse: v.EmployeeDocumentResponse }),
                ...(v.Error === undefined ? null : { error: v.Error }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        EmployeeDocumentResponse?: shared.EmployeeDocumentResponse$.Outbound | undefined;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDocsPeopleIdResponse> = z
        .object({
            contentType: z.string(),
            employeeDocumentResponse: shared.EmployeeDocumentResponse$.outboundSchema.optional(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.employeeDocumentResponse === undefined
                    ? null
                    : { EmployeeDocumentResponse: v.employeeDocumentResponse }),
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
