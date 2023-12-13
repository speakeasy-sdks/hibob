/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type DeletePeopleIdWorkEntryIdSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type DeletePeopleIdWorkEntryIdRequest = {
    /**
     * The entry ID to delete
     */
    entryId: number;
    /**
     * Employee ID.
     */
    id: string;
};

export type DeletePeopleIdWorkEntryIdResponse = {
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
export namespace DeletePeopleIdWorkEntryIdRequest$ {
    export type Inbound = {
        entry_id: number;
        id: string;
    };

    export const inboundSchema: z.ZodType<DeletePeopleIdWorkEntryIdRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                entry_id: z.number().int(),
                id: z.string(),
            })
            .transform((v) => {
                return {
                    entryId: v.entry_id,
                    id: v.id,
                };
            });

    export type Outbound = {
        entry_id: number;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeletePeopleIdWorkEntryIdRequest
    > = z
        .object({
            entryId: z.number().int(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                entry_id: v.entryId,
                id: v.id,
            };
        });
}

/** @internal */
export namespace DeletePeopleIdWorkEntryIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        DeletePeopleIdWorkEntryIdResponse,
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
        DeletePeopleIdWorkEntryIdResponse
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
