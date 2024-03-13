/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteCompanyNamedListsListNameItemIdRequest = {
    /**
     * The ID of the list item.
     */
    itemId: string;
    /**
     * The internal name of the list.
     */
    listName: string;
};

export type DeleteCompanyNamedListsListNameItemIdResponse = {
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
export namespace DeleteCompanyNamedListsListNameItemIdRequest$ {
    export type Inbound = {
        itemId: string;
        listName: string;
    };

    export const inboundSchema: z.ZodType<
        DeleteCompanyNamedListsListNameItemIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            itemId: z.string(),
            listName: z.string(),
        })
        .transform((v) => {
            return {
                itemId: v.itemId,
                listName: v.listName,
            };
        });

    export type Outbound = {
        itemId: string;
        listName: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteCompanyNamedListsListNameItemIdRequest
    > = z
        .object({
            itemId: z.string(),
            listName: z.string(),
        })
        .transform((v) => {
            return {
                itemId: v.itemId,
                listName: v.listName,
            };
        });
}

/** @internal */
export namespace DeleteCompanyNamedListsListNameItemIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        DeleteCompanyNamedListsListNameItemIdResponse,
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
        DeleteCompanyNamedListsListNameItemIdResponse
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
