/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListItem = {
    /**
     * Whether the item is archived (not available for selection).
     */
    archived?: boolean | undefined;
    /**
     * Nested items - if the list is nested.
     */
    children?: Array<ListItem> | undefined;
    /**
     * Internal ID of the item.
     */
    id?: number | undefined;
    /**
     * Name of the item.
     */
    name?: string | undefined;
};

/** @internal */
export namespace ListItem$ {
    export type Inbound = {
        archived?: boolean | undefined;
        children?: Array<ListItem$.Inbound> | undefined;
        id?: number | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListItem, z.ZodTypeDef, Inbound> = z
        .object({
            archived: z.boolean().optional(),
            children: z.array(z.lazy(() => ListItem$.inboundSchema)).optional(),
            id: z.number().int().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.archived === undefined ? null : { archived: v.archived }),
                ...(v.children === undefined ? null : { children: v.children }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        archived?: boolean | undefined;
        children?: Array<ListItem$.Outbound> | undefined;
        id?: number | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListItem> = z
        .object({
            archived: z.boolean().optional(),
            children: z.array(z.lazy(() => ListItem$.outboundSchema)).optional(),
            id: z.number().int().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.archived === undefined ? null : { archived: v.archived }),
                ...(v.children === undefined ? null : { children: v.children }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
