/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type PostObjectsPositionSearchResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Unexpected error.
     */
    error?: shared.ErrorT | undefined;
    /**
     * Positions
     */
    positionEntries?: Array<shared.PositionEntries> | undefined;
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
export namespace PostObjectsPositionSearchResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        PositionEntries?: Array<shared.PositionEntries$.Inbound> | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostObjectsPositionSearchResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            PositionEntries: z.array(shared.PositionEntries$.inboundSchema).optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                ...(v.PositionEntries === undefined
                    ? null
                    : { positionEntries: v.PositionEntries }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        PositionEntries?: Array<shared.PositionEntries$.Outbound> | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostObjectsPositionSearchResponse
    > = z
        .object({
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            positionEntries: z.array(shared.PositionEntries$.outboundSchema).optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                ...(v.positionEntries === undefined
                    ? null
                    : { PositionEntries: v.positionEntries }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
