/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type PutPeopleIdWorkEntryIdRequest = {
    workEntry: shared.WorkEntry;
    /**
     * The entry ID to update.
     */
    entryId: number;
    /**
     * Employee ID.
     */
    id: string;
};

export type PutPeopleIdWorkEntryIdResponse = {
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
export namespace PutPeopleIdWorkEntryIdRequest$ {
    export type Inbound = {
        WorkEntry: shared.WorkEntry$.Inbound;
        entry_id: number;
        id: string;
    };

    export const inboundSchema: z.ZodType<PutPeopleIdWorkEntryIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            WorkEntry: shared.WorkEntry$.inboundSchema,
            entry_id: z.number().int(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                workEntry: v.WorkEntry,
                entryId: v.entry_id,
                id: v.id,
            };
        });

    export type Outbound = {
        WorkEntry: shared.WorkEntry$.Outbound;
        entry_id: number;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PutPeopleIdWorkEntryIdRequest> =
        z
            .object({
                workEntry: shared.WorkEntry$.outboundSchema,
                entryId: z.number().int(),
                id: z.string(),
            })
            .transform((v) => {
                return {
                    WorkEntry: v.workEntry,
                    entry_id: v.entryId,
                    id: v.id,
                };
            });
}

/** @internal */
export namespace PutPeopleIdWorkEntryIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PutPeopleIdWorkEntryIdResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PutPeopleIdWorkEntryIdResponse> =
        z
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
