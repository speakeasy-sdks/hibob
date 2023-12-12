/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { EquityEntry, EquityEntry$ } from "./equityentry";
import { z } from "zod";

export type EquityEntries = {
    values?: Array<EquityEntry> | undefined;
};

/** @internal */
export namespace EquityEntries$ {
    export type Inbound = {
        values?: Array<EquityEntry$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<EquityEntries, z.ZodTypeDef, Inbound> = z
        .object({
            values: z.array(EquityEntry$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.values === undefined ? null : { values: v.values }),
            };
        });

    export type Outbound = {
        values?: Array<EquityEntry$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EquityEntries> = z
        .object({
            values: z.array(EquityEntry$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.values === undefined ? null : { values: v.values }),
            };
        });
}
