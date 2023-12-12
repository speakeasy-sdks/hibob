/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PutCompanyNamedListsListNameItemIdSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type PutCompanyNamedListsListNameItemIdRequest = {
    /**
     * You need to provide at least one of: <b>name</b> or <b>parentId</b>. Providing a name will rename the list item value. Providing the parent ID will move the hierarchy list item (together with its children) under the indicated parent node.
     */
    updateListItemRequest: shared.UpdateListItemRequest;
    /**
     * The ID of the list item.
     */
    itemId: string;
    /**
     * The internal name of the list.
     */
    listName: string;
};

export type PutCompanyNamedListsListNameItemIdResponse = {
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
export namespace PutCompanyNamedListsListNameItemIdRequest$ {
    export type Inbound = {
        UpdateListItemRequest: shared.UpdateListItemRequest$.Inbound;
        itemId: string;
        listName: string;
    };

    export const inboundSchema: z.ZodType<
        PutCompanyNamedListsListNameItemIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            UpdateListItemRequest: shared.UpdateListItemRequest$.inboundSchema,
            itemId: z.string(),
            listName: z.string(),
        })
        .transform((v) => {
            return {
                updateListItemRequest: v.UpdateListItemRequest,
                itemId: v.itemId,
                listName: v.listName,
            };
        });

    export type Outbound = {
        UpdateListItemRequest: shared.UpdateListItemRequest$.Outbound;
        itemId: string;
        listName: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PutCompanyNamedListsListNameItemIdRequest
    > = z
        .object({
            updateListItemRequest: shared.UpdateListItemRequest$.outboundSchema,
            itemId: z.string(),
            listName: z.string(),
        })
        .transform((v) => {
            return {
                UpdateListItemRequest: v.updateListItemRequest,
                itemId: v.itemId,
                listName: v.listName,
            };
        });
}

/** @internal */
export namespace PutCompanyNamedListsListNameItemIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PutCompanyNamedListsListNameItemIdResponse,
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
        PutCompanyNamedListsListNameItemIdResponse
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
