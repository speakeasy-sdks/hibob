/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PostPeopleIdEquitiesRequest = {
    /**
     * Equity grant to add.
     */
    equityEntry: shared.EquityEntry;
    /**
     * Employee ID.
     */
    id: string;
};

export type PostPeopleIdEquitiesResponse = {
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
export namespace PostPeopleIdEquitiesRequest$ {
    export type Inbound = {
        EquityEntry: shared.EquityEntry$.Inbound;
        id: string;
    };

    export const inboundSchema: z.ZodType<PostPeopleIdEquitiesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            EquityEntry: shared.EquityEntry$.inboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                equityEntry: v.EquityEntry,
                id: v.id,
            };
        });

    export type Outbound = {
        EquityEntry: shared.EquityEntry$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostPeopleIdEquitiesRequest> = z
        .object({
            equityEntry: shared.EquityEntry$.outboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                EquityEntry: v.equityEntry,
                id: v.id,
            };
        });
}

/** @internal */
export namespace PostPeopleIdEquitiesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PostPeopleIdEquitiesResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostPeopleIdEquitiesResponse> = z
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
