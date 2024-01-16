/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../../sdk/types";
import { z } from "zod";

/**
 * Select <b>morning</b> when the request is for mornings on the days requested. Select <b>afternoon</b> when the request is for afternoons on the days requested.<br> This is mandatory if the <b>requestRangeType</b> is <b>portionOnRange</b>.
 */
export enum DayPortion {
    Morning = "morning",
    Afternoon = "afternoon",
}

/**
 * Portion of the last day - relevant for requests in days.
 */
export enum EndDatePortion {
    AllDay = "all_day",
    Morning = "morning",
    Afternoon = "afternoon",
}

/**
 * The type of request duration.<br> Select <b>hours</b> when the request is for X hours during the day requested (This is supported only for policy types measured in hours).<br> Select <b>portionOnRange</b> when the  request is for every morning or every afternoon during the days requested.<br> Select <b>hoursOnRange</b> when the request is for X hours every day during the days requested (This is supported only for policy types measured in hours)
 */
export enum SubmitTimeoffRequestRequestRangeType {
    Days = "days",
    Hours = "hours",
    PortionOnRange = "portionOnRange",
    HoursOnRange = "hoursOnRange",
}

/**
 * Portion of the first day - relevant for requests in days.
 */
export enum StartDatePortion {
    AllDay = "all_day",
    Morning = "morning",
    Afternoon = "afternoon",
}

export type SubmitTimeoffRequest = {
    /**
     * The employee ID of the user to be set as the approver for this request. This is relevant if 'skipManagerApproval' is set to true.<br>Please note that the user calling the API with this param must have permission to import time off requests.
     */
    approver?: string | undefined;
    /**
     * Enter the number of hours when the request is for X hours on the days requested.<br> This is mandatory if the <b>requestRangeType</b> is <b>hoursOnRange</b>.
     */
    dailyHours?: number | undefined;
    /**
     * Enter the number of minutes when the request is for X hours and X minutes on the days requested.<br> This is relevant if the <b>requestRangeType</b> is <b>hoursOnRange</b> and the amount requested is not a full hour or hours.
     */
    dailyMinutes?: number | undefined;
    /**
     * Select <b>morning</b> when the request is for mornings on the days requested. Select <b>afternoon</b> when the request is for afternoons on the days requested.<br> This is mandatory if the <b>requestRangeType</b> is <b>portionOnRange</b>.
     */
    dayPortion?: DayPortion | undefined;
    /**
     * Request reason.
     */
    description?: string | undefined;
    /**
     * Date of the last day of the time off (not relevant for requests using
     *
     * @remarks
     *                                                the hours type).
     */
    endDate?: RFCDate | undefined;
    /**
     * Portion of the last day - relevant for requests in days.
     */
    endDatePortion?: EndDatePortion | undefined;
    /**
     * This field is mandatory if the requestRangeType is set to 'hours'.
     */
    hours?: number | undefined;
    /**
     * Relevant if requestRangeType is set to 'hours'.
     */
    minutes?: number | undefined;
    /**
     * Request policy type, e.g. Holiday, Sick or any custom type defined.
     */
    policyType: string;
    /**
     * The reason code ID taken from the policy type's reason codes list. The list is available in GET /timeoff/policy-types/{policyType}/reason-codes
     */
    reasonCode?: number | undefined;
    /**
     * The type of request duration.<br> Select <b>hours</b> when the request is for X hours during the day requested (This is supported only for policy types measured in hours).<br> Select <b>portionOnRange</b> when the  request is for every morning or every afternoon during the days requested.<br> Select <b>hoursOnRange</b> when the request is for X hours every day during the days requested (This is supported only for policy types measured in hours)
     */
    requestRangeType?: SubmitTimeoffRequestRequestRangeType | undefined;
    /**
     * Admins only can skip the approval policy. Setting this field to true will create an approved request.
     */
    skipManagerApproval?: boolean | undefined;
    /**
     * Date of the first day of the time off (not relevant for requests using the hours type).
     */
    startDate: RFCDate;
    /**
     * Portion of the first day - relevant for requests in days.
     */
    startDatePortion?: StartDatePortion | undefined;
};

/** @internal */
export const DayPortion$ = z.nativeEnum(DayPortion);

/** @internal */
export const EndDatePortion$ = z.nativeEnum(EndDatePortion);

/** @internal */
export const SubmitTimeoffRequestRequestRangeType$ = z.nativeEnum(
    SubmitTimeoffRequestRequestRangeType
);

/** @internal */
export const StartDatePortion$ = z.nativeEnum(StartDatePortion);

/** @internal */
export namespace SubmitTimeoffRequest$ {
    export type Inbound = {
        approver?: string | undefined;
        dailyHours?: number | undefined;
        dailyMinutes?: number | undefined;
        dayPortion?: DayPortion | undefined;
        description?: string | undefined;
        endDate?: string | undefined;
        endDatePortion?: EndDatePortion | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        policyType: string;
        reasonCode?: number | undefined;
        requestRangeType?: SubmitTimeoffRequestRequestRangeType | undefined;
        skipManagerApproval?: boolean | undefined;
        startDate: string;
        startDatePortion?: StartDatePortion | undefined;
    };

    export const inboundSchema: z.ZodType<SubmitTimeoffRequest, z.ZodTypeDef, Inbound> = z
        .object({
            approver: z.string().optional(),
            dailyHours: z.number().int().optional(),
            dailyMinutes: z.number().int().optional(),
            dayPortion: DayPortion$.optional(),
            description: z.string().optional(),
            endDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            endDatePortion: EndDatePortion$.default(EndDatePortion.AllDay),
            hours: z.number().int().optional(),
            minutes: z.number().int().optional(),
            policyType: z.string(),
            reasonCode: z.number().int().optional(),
            requestRangeType: SubmitTimeoffRequestRequestRangeType$.default(
                SubmitTimeoffRequestRequestRangeType.Days
            ),
            skipManagerApproval: z.boolean().default(false),
            startDate: z.string().transform((v) => new RFCDate(v)),
            startDatePortion: StartDatePortion$.default(StartDatePortion.AllDay),
        })
        .transform((v) => {
            return {
                ...(v.approver === undefined ? null : { approver: v.approver }),
                ...(v.dailyHours === undefined ? null : { dailyHours: v.dailyHours }),
                ...(v.dailyMinutes === undefined ? null : { dailyMinutes: v.dailyMinutes }),
                ...(v.dayPortion === undefined ? null : { dayPortion: v.dayPortion }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.endDatePortion === undefined ? null : { endDatePortion: v.endDatePortion }),
                ...(v.hours === undefined ? null : { hours: v.hours }),
                ...(v.minutes === undefined ? null : { minutes: v.minutes }),
                policyType: v.policyType,
                ...(v.reasonCode === undefined ? null : { reasonCode: v.reasonCode }),
                ...(v.requestRangeType === undefined
                    ? null
                    : { requestRangeType: v.requestRangeType }),
                ...(v.skipManagerApproval === undefined
                    ? null
                    : { skipManagerApproval: v.skipManagerApproval }),
                startDate: v.startDate,
                ...(v.startDatePortion === undefined
                    ? null
                    : { startDatePortion: v.startDatePortion }),
            };
        });

    export type Outbound = {
        approver?: string | undefined;
        dailyHours?: number | undefined;
        dailyMinutes?: number | undefined;
        dayPortion?: DayPortion | undefined;
        description?: string | undefined;
        endDate?: string | undefined;
        endDatePortion: EndDatePortion;
        hours?: number | undefined;
        minutes?: number | undefined;
        policyType: string;
        reasonCode?: number | undefined;
        requestRangeType: SubmitTimeoffRequestRequestRangeType;
        skipManagerApproval: boolean;
        startDate: string;
        startDatePortion: StartDatePortion;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubmitTimeoffRequest> = z
        .object({
            approver: z.string().optional(),
            dailyHours: z.number().int().optional(),
            dailyMinutes: z.number().int().optional(),
            dayPortion: DayPortion$.optional(),
            description: z.string().optional(),
            endDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            endDatePortion: EndDatePortion$.default(EndDatePortion.AllDay),
            hours: z.number().int().optional(),
            minutes: z.number().int().optional(),
            policyType: z.string(),
            reasonCode: z.number().int().optional(),
            requestRangeType: SubmitTimeoffRequestRequestRangeType$.default(
                SubmitTimeoffRequestRequestRangeType.Days
            ),
            skipManagerApproval: z.boolean().default(false),
            startDate: z.instanceof(RFCDate).transform((v) => v.toString()),
            startDatePortion: StartDatePortion$.default(StartDatePortion.AllDay),
        })
        .transform((v) => {
            return {
                ...(v.approver === undefined ? null : { approver: v.approver }),
                ...(v.dailyHours === undefined ? null : { dailyHours: v.dailyHours }),
                ...(v.dailyMinutes === undefined ? null : { dailyMinutes: v.dailyMinutes }),
                ...(v.dayPortion === undefined ? null : { dayPortion: v.dayPortion }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                endDatePortion: v.endDatePortion,
                ...(v.hours === undefined ? null : { hours: v.hours }),
                ...(v.minutes === undefined ? null : { minutes: v.minutes }),
                policyType: v.policyType,
                ...(v.reasonCode === undefined ? null : { reasonCode: v.reasonCode }),
                requestRangeType: v.requestRangeType,
                skipManagerApproval: v.skipManagerApproval,
                startDate: v.startDate,
                startDatePortion: v.startDatePortion,
            };
        });
}
