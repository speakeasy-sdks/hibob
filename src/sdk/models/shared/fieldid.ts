/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type FieldId = {
    /**
     * The ID of the field.
     */
    id?: string | undefined;
};

/** @internal */
export namespace FieldId$ {
    export type Inbound = {
        id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<FieldId, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FieldId> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}
