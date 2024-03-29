/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { LifeCycleEntry, LifeCycleEntry$ } from "./lifecycleentry";
import * as z from "zod";

export type LifeCycleEntries = {
    values?: Array<LifeCycleEntry> | undefined;
};

/** @internal */
export namespace LifeCycleEntries$ {
    export type Inbound = {
        values?: Array<LifeCycleEntry$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<LifeCycleEntries, z.ZodTypeDef, Inbound> = z
        .object({
            values: z.array(LifeCycleEntry$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.values === undefined ? null : { values: v.values }),
            };
        });

    export type Outbound = {
        values?: Array<LifeCycleEntry$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LifeCycleEntries> = z
        .object({
            values: z.array(LifeCycleEntry$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.values === undefined ? null : { values: v.values }),
            };
        });
}
