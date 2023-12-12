/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../../sdk/types";
import { CurrencyValue, CurrencyValue$ } from "./currencyvalue";
import { z } from "zod";

export type EquityEntry = {
    /**
     * Consent number.
     */
    consentNumber?: string | undefined;
    /**
     * The date this entry becomes effective.
     */
    effectiveDate: RFCDate;
    /**
     * The type of the grant.
     */
    equityType: string;
    exercisePrice?: CurrencyValue | undefined;
    /**
     * Date the equity was granted.
     */
    grantDate?: RFCDate | undefined;
    /**
     * The Grant number for employee.
     */
    grantNumber?: number | undefined;
    /**
     * Grant status. one of: Granted, Pending Approval
     */
    grantStatus?: string | undefined;
    /**
     * Grant type. One of: Initial Grant, Merit Grant
     */
    grantType?: string | undefined;
    /**
     * ID.
     */
    id?: number | undefined;
    /**
     * Date the options expire.
     */
    optionExpiration?: RFCDate | undefined;
    /**
     * The number of equities granted.
     */
    quantity: number;
    /**
     * The reason for this change.
     */
    reason?: string | undefined;
    /**
     * Vesting commencement date.
     */
    vestingCommencementDate?: RFCDate | undefined;
    /**
     * The vesting schedule ID assigned to this grant.
     */
    vestingSchedule?: number | undefined;
    /**
     * Terms for exercising this grant.
     */
    vestingTerm?: string | undefined;
};

/** @internal */
export namespace EquityEntry$ {
    export type Inbound = {
        consentNumber?: string | undefined;
        effectiveDate: string;
        equityType: string;
        exercisePrice?: CurrencyValue$.Inbound | undefined;
        grantDate?: string | undefined;
        grantNumber?: number | undefined;
        grantStatus?: string | undefined;
        grantType?: string | undefined;
        id?: number | undefined;
        optionExpiration?: string | undefined;
        quantity: number;
        reason?: string | undefined;
        vestingCommencementDate?: string | undefined;
        vestingSchedule?: number | undefined;
        vestingTerm?: string | undefined;
    };

    export const inboundSchema: z.ZodType<EquityEntry, z.ZodTypeDef, Inbound> = z
        .object({
            consentNumber: z.string().optional(),
            effectiveDate: z.string().transform((v) => new RFCDate(v)),
            equityType: z.string(),
            exercisePrice: CurrencyValue$.inboundSchema.optional(),
            grantDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            grantNumber: z.number().optional(),
            grantStatus: z.string().optional(),
            grantType: z.string().optional(),
            id: z.number().int().optional(),
            optionExpiration: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            quantity: z.number(),
            reason: z.string().optional(),
            vestingCommencementDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            vestingSchedule: z.number().optional(),
            vestingTerm: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.consentNumber === undefined ? null : { consentNumber: v.consentNumber }),
                effectiveDate: v.effectiveDate,
                equityType: v.equityType,
                ...(v.exercisePrice === undefined ? null : { exercisePrice: v.exercisePrice }),
                ...(v.grantDate === undefined ? null : { grantDate: v.grantDate }),
                ...(v.grantNumber === undefined ? null : { grantNumber: v.grantNumber }),
                ...(v.grantStatus === undefined ? null : { grantStatus: v.grantStatus }),
                ...(v.grantType === undefined ? null : { grantType: v.grantType }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.optionExpiration === undefined
                    ? null
                    : { optionExpiration: v.optionExpiration }),
                quantity: v.quantity,
                ...(v.reason === undefined ? null : { reason: v.reason }),
                ...(v.vestingCommencementDate === undefined
                    ? null
                    : { vestingCommencementDate: v.vestingCommencementDate }),
                ...(v.vestingSchedule === undefined
                    ? null
                    : { vestingSchedule: v.vestingSchedule }),
                ...(v.vestingTerm === undefined ? null : { vestingTerm: v.vestingTerm }),
            };
        });

    export type Outbound = {
        consentNumber?: string | undefined;
        effectiveDate: string;
        equityType: string;
        exercisePrice?: CurrencyValue$.Outbound | undefined;
        grantDate?: string | undefined;
        grantNumber?: number | undefined;
        grantStatus?: string | undefined;
        grantType?: string | undefined;
        id?: number | undefined;
        optionExpiration?: string | undefined;
        quantity: number;
        reason?: string | undefined;
        vestingCommencementDate?: string | undefined;
        vestingSchedule?: number | undefined;
        vestingTerm?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EquityEntry> = z
        .object({
            consentNumber: z.string().optional(),
            effectiveDate: z.instanceof(RFCDate).transform((v) => v.toString()),
            equityType: z.string(),
            exercisePrice: CurrencyValue$.outboundSchema.optional(),
            grantDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            grantNumber: z.number().optional(),
            grantStatus: z.string().optional(),
            grantType: z.string().optional(),
            id: z.number().int().optional(),
            optionExpiration: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            quantity: z.number(),
            reason: z.string().optional(),
            vestingCommencementDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            vestingSchedule: z.number().optional(),
            vestingTerm: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.consentNumber === undefined ? null : { consentNumber: v.consentNumber }),
                effectiveDate: v.effectiveDate,
                equityType: v.equityType,
                ...(v.exercisePrice === undefined ? null : { exercisePrice: v.exercisePrice }),
                ...(v.grantDate === undefined ? null : { grantDate: v.grantDate }),
                ...(v.grantNumber === undefined ? null : { grantNumber: v.grantNumber }),
                ...(v.grantStatus === undefined ? null : { grantStatus: v.grantStatus }),
                ...(v.grantType === undefined ? null : { grantType: v.grantType }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.optionExpiration === undefined
                    ? null
                    : { optionExpiration: v.optionExpiration }),
                quantity: v.quantity,
                ...(v.reason === undefined ? null : { reason: v.reason }),
                ...(v.vestingCommencementDate === undefined
                    ? null
                    : { vestingCommencementDate: v.vestingCommencementDate }),
                ...(v.vestingSchedule === undefined
                    ? null
                    : { vestingSchedule: v.vestingSchedule }),
                ...(v.vestingTerm === undefined ? null : { vestingTerm: v.vestingTerm }),
            };
        });
}
