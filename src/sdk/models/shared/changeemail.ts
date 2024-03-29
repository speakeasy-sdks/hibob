/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ChangeEmail = {
    /**
     * new email
     */
    email?: string | undefined;
};

/** @internal */
export namespace ChangeEmail$ {
    export type Inbound = {
        email?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ChangeEmail, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
            };
        });

    export type Outbound = {
        email?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChangeEmail> = z
        .object({
            email: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
            };
        });
}
