/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type PutPeopleIdEmploymentEntryIdRequest = {
    employmentEntry: shared.EmploymentEntry;
    /**
     * The entry ID to update.
     */
    entryId: number;
    /**
     * Employee ID.
     */
    id: string;
};

export type PutPeopleIdEmploymentEntryIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
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
export namespace PutPeopleIdEmploymentEntryIdRequest$ {
    export type Inbound = {
        EmploymentEntry: shared.EmploymentEntry$.Inbound;
        entry_id: number;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        PutPeopleIdEmploymentEntryIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            EmploymentEntry: shared.EmploymentEntry$.inboundSchema,
            entry_id: z.number().int(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                employmentEntry: v.EmploymentEntry,
                entryId: v.entry_id,
                id: v.id,
            };
        });

    export type Outbound = {
        EmploymentEntry: shared.EmploymentEntry$.Outbound;
        entry_id: number;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PutPeopleIdEmploymentEntryIdRequest
    > = z
        .object({
            employmentEntry: shared.EmploymentEntry$.outboundSchema,
            entryId: z.number().int(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                EmploymentEntry: v.employmentEntry,
                entry_id: v.entryId,
                id: v.id,
            };
        });
}

/** @internal */
export namespace PutPeopleIdEmploymentEntryIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PutPeopleIdEmploymentEntryIdResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PutPeopleIdEmploymentEntryIdResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
