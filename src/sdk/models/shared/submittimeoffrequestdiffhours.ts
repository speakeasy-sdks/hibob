/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../../sdk/types";
import { z } from "zod";

export type Durations = {
    /**
     * Date of the duration.
     */
    date: RFCDate;
    /**
     * The number of hours in the duration.
     */
    hours: number;
    /**
     * The number of minutes in the duration.
     */
    minutes: number;
};

export type SubmitTimeoffRequestDiffHours = {
    /**
     * The employee ID of the user to be set as the approver for this request. This is relevant if 'skipManagerApproval' is set to true.<br>Please note that the user calling the API with this param must have permission to import time off requests.
     */
    approver?: string | undefined;
    /**
     * Request reason.
     */
    description?: string | undefined;
    /**
     * Array of durations for each day in the request.
     */
    durations: Array<Durations>;
    /**
     * Date of the last day of the time off.
     */
    endDate: RFCDate;
    /**
     * Request policy type, e.g. Holiday, Sick or any custom type defined.
     */
    policyType: string;
    /**
     * The reason code ID taken from the policy type's reason codes list. The list is available in GET /timeoff/policy-types/{policyType}/reason-codes
     */
    reasonCode?: number | undefined;
    /**
     * Admins only can skip the approval policy. Setting this field to true will create an approved request.
     */
    skipManagerApproval?: boolean | undefined;
    /**
     * Date of the first day of the time off
     */
    startDate: RFCDate;
};

/** @internal */
export namespace Durations$ {
    export type Inbound = {
        date: string;
        hours: number;
        minutes: number;
    };

    export const inboundSchema: z.ZodType<Durations, z.ZodTypeDef, Inbound> = z
        .object({
            date: z.string().transform((v) => new RFCDate(v)),
            hours: z.number().int(),
            minutes: z.number().int(),
        })
        .transform((v) => {
            return {
                date: v.date,
                hours: v.hours,
                minutes: v.minutes,
            };
        });

    export type Outbound = {
        date: string;
        hours: number;
        minutes: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Durations> = z
        .object({
            date: z.instanceof(RFCDate).transform((v) => v.toString()),
            hours: z.number().int(),
            minutes: z.number().int(),
        })
        .transform((v) => {
            return {
                date: v.date,
                hours: v.hours,
                minutes: v.minutes,
            };
        });
}

/** @internal */
export namespace SubmitTimeoffRequestDiffHours$ {
    export type Inbound = {
        approver?: string | undefined;
        description?: string | undefined;
        durations: Array<Durations$.Inbound>;
        endDate: string;
        policyType: string;
        reasonCode?: number | undefined;
        skipManagerApproval?: boolean | undefined;
        startDate: string;
    };

    export const inboundSchema: z.ZodType<SubmitTimeoffRequestDiffHours, z.ZodTypeDef, Inbound> = z
        .object({
            approver: z.string().optional(),
            description: z.string().optional(),
            durations: z.array(z.lazy(() => Durations$.inboundSchema)),
            endDate: z.string().transform((v) => new RFCDate(v)),
            policyType: z.string(),
            reasonCode: z.number().int().optional(),
            skipManagerApproval: z.boolean().default(false),
            startDate: z.string().transform((v) => new RFCDate(v)),
        })
        .transform((v) => {
            return {
                ...(v.approver === undefined ? null : { approver: v.approver }),
                ...(v.description === undefined ? null : { description: v.description }),
                durations: v.durations,
                endDate: v.endDate,
                policyType: v.policyType,
                ...(v.reasonCode === undefined ? null : { reasonCode: v.reasonCode }),
                skipManagerApproval: v.skipManagerApproval,
                startDate: v.startDate,
            };
        });

    export type Outbound = {
        approver?: string | undefined;
        description?: string | undefined;
        durations: Array<Durations$.Outbound>;
        endDate: string;
        policyType: string;
        reasonCode?: number | undefined;
        skipManagerApproval: boolean;
        startDate: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubmitTimeoffRequestDiffHours> =
        z
            .object({
                approver: z.string().optional(),
                description: z.string().optional(),
                durations: z.array(z.lazy(() => Durations$.outboundSchema)),
                endDate: z.instanceof(RFCDate).transform((v) => v.toString()),
                policyType: z.string(),
                reasonCode: z.number().int().optional(),
                skipManagerApproval: z.boolean().default(false),
                startDate: z.instanceof(RFCDate).transform((v) => v.toString()),
            })
            .transform((v) => {
                return {
                    ...(v.approver === undefined ? null : { approver: v.approver }),
                    ...(v.description === undefined ? null : { description: v.description }),
                    durations: v.durations,
                    endDate: v.endDate,
                    policyType: v.policyType,
                    ...(v.reasonCode === undefined ? null : { reasonCode: v.reasonCode }),
                    skipManagerApproval: v.skipManagerApproval,
                    startDate: v.startDate,
                };
            });
}
