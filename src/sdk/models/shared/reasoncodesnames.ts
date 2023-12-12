/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ReasonCodesNames = {
    reasonCodes?: Array<string> | undefined;
};

/** @internal */
export namespace ReasonCodesNames$ {
    export type Inbound = {
        reasonCodes?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<ReasonCodesNames, z.ZodTypeDef, Inbound> = z
        .object({
            reasonCodes: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.reasonCodes === undefined ? null : { reasonCodes: v.reasonCodes }),
            };
        });

    export type Outbound = {
        reasonCodes?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReasonCodesNames> = z
        .object({
            reasonCodes: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.reasonCodes === undefined ? null : { reasonCodes: v.reasonCodes }),
            };
        });
}
