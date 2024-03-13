/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../../sdk/types";
import * as z from "zod";

export type StartDateUpdate = {
    /**
     * Additional info for the start date update.
     */
    reason?: string | undefined;
    /**
     * The date this entry becomes effective.
     */
    startDate: RFCDate;
};

/** @internal */
export namespace StartDateUpdate$ {
    export type Inbound = {
        reason?: string | undefined;
        startDate: string;
    };

    export const inboundSchema: z.ZodType<StartDateUpdate, z.ZodTypeDef, Inbound> = z
        .object({
            reason: z.string().optional(),
            startDate: z.string().transform((v) => new RFCDate(v)),
        })
        .transform((v) => {
            return {
                ...(v.reason === undefined ? null : { reason: v.reason }),
                startDate: v.startDate,
            };
        });

    export type Outbound = {
        reason?: string | undefined;
        startDate: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StartDateUpdate> = z
        .object({
            reason: z.string().optional(),
            startDate: z.instanceof(RFCDate).transform((v) => v.toString()),
        })
        .transform((v) => {
            return {
                ...(v.reason === undefined ? null : { reason: v.reason }),
                startDate: v.startDate,
            };
        });
}
