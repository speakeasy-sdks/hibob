/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../types";
import * as z from "zod";

export type LifeCycleEntry = {
    /**
     * The date this entry becomes effective.
     */
    effectiveDate: RFCDate;
    /**
     * ID.
     */
    id?: number | undefined;
    /**
     * The reason for this change.
     */
    reason?: string | undefined;
    reasonType?: string | undefined;
    status?: string | undefined;
};

/** @internal */
export namespace LifeCycleEntry$ {
    export type Inbound = {
        effectiveDate: string;
        id?: number | undefined;
        reason?: string | undefined;
        reasonType?: string | undefined;
        status?: string | undefined;
    };

    export const inboundSchema: z.ZodType<LifeCycleEntry, z.ZodTypeDef, Inbound> = z
        .object({
            effectiveDate: z.string().transform((v) => new RFCDate(v)),
            id: z.number().int().optional(),
            reason: z.string().optional(),
            reasonType: z.string().optional(),
            status: z.string().optional(),
        })
        .transform((v) => {
            return {
                effectiveDate: v.effectiveDate,
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.reason === undefined ? null : { reason: v.reason }),
                ...(v.reasonType === undefined ? null : { reasonType: v.reasonType }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        effectiveDate: string;
        id?: number | undefined;
        reason?: string | undefined;
        reasonType?: string | undefined;
        status?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LifeCycleEntry> = z
        .object({
            effectiveDate: z.instanceof(RFCDate).transform((v) => v.toString()),
            id: z.number().int().optional(),
            reason: z.string().optional(),
            reasonType: z.string().optional(),
            status: z.string().optional(),
        })
        .transform((v) => {
            return {
                effectiveDate: v.effectiveDate,
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.reason === undefined ? null : { reason: v.reason }),
                ...(v.reasonType === undefined ? null : { reasonType: v.reasonType }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}
