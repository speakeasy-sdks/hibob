/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetPeopleCustomTablesMetadataResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Successful response
     */
    customTableMetadataList?: shared.CustomTableMetadataList | undefined;
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
export namespace GetPeopleCustomTablesMetadataResponse$ {
    export type Inbound = {
        ContentType: string;
        CustomTableMetadataList?: shared.CustomTableMetadataList$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetPeopleCustomTablesMetadataResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            CustomTableMetadataList: shared.CustomTableMetadataList$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CustomTableMetadataList === undefined
                    ? null
                    : { customTableMetadataList: v.CustomTableMetadataList }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CustomTableMetadataList?: shared.CustomTableMetadataList$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetPeopleCustomTablesMetadataResponse
    > = z
        .object({
            contentType: z.string(),
            customTableMetadataList: shared.CustomTableMetadataList$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.customTableMetadataList === undefined
                    ? null
                    : { CustomTableMetadataList: v.customTableMetadataList }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
