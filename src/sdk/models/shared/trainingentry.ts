/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../../sdk/types";
import { CurrencyValue, CurrencyValue$ } from "./currencyvalue";
import { z } from "zod";

export type TrainingEntry = {
    cost?: CurrencyValue | undefined;
    /**
     * Further description about the training entry.
     */
    description?: string | undefined;
    /**
     * ID of the document attached to this training entry.
     */
    documentId?: number | undefined;
    /**
     * The date this entry becomes effective.
     */
    effectiveDate: RFCDate;
    /**
     * The date of training completion.
     */
    endDate?: RFCDate | undefined;
    /**
     * The frequency of the training entry. The name must be of an item in the frequency list field.
     */
    frequency?: string | undefined;
    /**
     * ID.
     */
    id?: number | undefined;
    /**
     * The name of the training entry. The name must be an item in the training list field.
     */
    name?: string | undefined;
    /**
     * The reason for this change.
     */
    reason?: string | undefined;
    /**
     * The date this entry becomes effective.
     */
    startDate?: RFCDate | undefined;
    /**
     * The status of the training entry
     */
    status?: string | undefined;
};

/** @internal */
export namespace TrainingEntry$ {
    export type Inbound = {
        cost?: CurrencyValue$.Inbound | undefined;
        description?: string | undefined;
        documentId?: number | undefined;
        effectiveDate: string;
        endDate?: string | undefined;
        frequency?: string | undefined;
        id?: number | undefined;
        name?: string | undefined;
        reason?: string | undefined;
        startDate?: string | undefined;
        status?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TrainingEntry, z.ZodTypeDef, Inbound> = z
        .object({
            cost: CurrencyValue$.inboundSchema.optional(),
            description: z.string().optional(),
            documentId: z.number().optional(),
            effectiveDate: z.string().transform((v) => new RFCDate(v)),
            endDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            frequency: z.string().optional(),
            id: z.number().int().optional(),
            name: z.string().optional(),
            reason: z.string().optional(),
            startDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            status: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.cost === undefined ? null : { cost: v.cost }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.documentId === undefined ? null : { documentId: v.documentId }),
                effectiveDate: v.effectiveDate,
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.frequency === undefined ? null : { frequency: v.frequency }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.reason === undefined ? null : { reason: v.reason }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        cost?: CurrencyValue$.Outbound | undefined;
        description?: string | undefined;
        documentId?: number | undefined;
        effectiveDate: string;
        endDate?: string | undefined;
        frequency?: string | undefined;
        id?: number | undefined;
        name?: string | undefined;
        reason?: string | undefined;
        startDate?: string | undefined;
        status?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrainingEntry> = z
        .object({
            cost: CurrencyValue$.outboundSchema.optional(),
            description: z.string().optional(),
            documentId: z.number().optional(),
            effectiveDate: z.instanceof(RFCDate).transform((v) => v.toString()),
            endDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            frequency: z.string().optional(),
            id: z.number().int().optional(),
            name: z.string().optional(),
            reason: z.string().optional(),
            startDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            status: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.cost === undefined ? null : { cost: v.cost }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.documentId === undefined ? null : { documentId: v.documentId }),
                effectiveDate: v.effectiveDate,
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.frequency === undefined ? null : { frequency: v.frequency }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.reason === undefined ? null : { reason: v.reason }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}
