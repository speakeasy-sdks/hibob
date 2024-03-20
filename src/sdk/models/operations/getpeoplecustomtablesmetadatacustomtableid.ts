/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetPeopleCustomTablesMetadataCustomTableIdRequest = {
    /**
     * The ID of custom table.
     */
    customTableId: string;
};

export type GetPeopleCustomTablesMetadataCustomTableIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Successful response
     */
    customTableMetadata?: shared.CustomTableMetadata | undefined;
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
export namespace GetPeopleCustomTablesMetadataCustomTableIdRequest$ {
    export type Inbound = {
        custom_table_id: string;
    };

    export const inboundSchema: z.ZodType<
        GetPeopleCustomTablesMetadataCustomTableIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            custom_table_id: z.string(),
        })
        .transform((v) => {
            return {
                customTableId: v.custom_table_id,
            };
        });

    export type Outbound = {
        custom_table_id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetPeopleCustomTablesMetadataCustomTableIdRequest
    > = z
        .object({
            customTableId: z.string(),
        })
        .transform((v) => {
            return {
                custom_table_id: v.customTableId,
            };
        });
}

/** @internal */
export namespace GetPeopleCustomTablesMetadataCustomTableIdResponse$ {
    export type Inbound = {
        ContentType: string;
        CustomTableMetadata?: shared.CustomTableMetadata$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetPeopleCustomTablesMetadataCustomTableIdResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            CustomTableMetadata: shared.CustomTableMetadata$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CustomTableMetadata === undefined
                    ? null
                    : { customTableMetadata: v.CustomTableMetadata }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CustomTableMetadata?: shared.CustomTableMetadata$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetPeopleCustomTablesMetadataCustomTableIdResponse
    > = z
        .object({
            contentType: z.string(),
            customTableMetadata: shared.CustomTableMetadata$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.customTableMetadata === undefined
                    ? null
                    : { CustomTableMetadata: v.customTableMetadata }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
