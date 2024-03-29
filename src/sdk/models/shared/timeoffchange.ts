/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../types";
import * as z from "zod";

/**
 * Change type - created, canceled or deleted.
 */
export enum ChangeType {
    Created = "Created",
    Canceled = "Canceled",
    Deleted = "Deleted",
}

/**
 * The unit used for the totalDuration and totalCost - either 'days' or 'hours'
 */
export enum DurationUnit {
    Days = "days",
    Hours = "hours",
}

/**
 * The type of request duration.<br> <b>portionOnRange</b> is when the request is for every morning or every afternoon during the days requested.<br> <b>hoursOnRange</b> is when the request is for X hours every day during the days requested.
 */
export enum TimeoffChangeType {
    Days = "days",
    Hours = "hours",
    PortionOnRange = "portionOnRange",
    HoursOnRange = "hoursOnRange",
}

export type TimeoffChange = {
    /**
     * Request change reason
     */
    changeReason?: string | undefined;
    /**
     * Change type - created, canceled or deleted.
     */
    changeType?: ChangeType | undefined;
    /**
     * The time off duration in hours for every day in the request (relevant for requests using the hoursOnRange type)
     */
    dailyHours?: number | undefined;
    /**
     * Date of the time off (relevant for requests using the Hours type)
     */
    date?: RFCDate | undefined;
    /**
     * What portion of the request's days is included - morning or afternoon (relevant for requests using the portionOnRange type).
     */
    dayPortion?: string | undefined;
    /**
     * The unit used for the totalDuration and totalCost - either 'days' or 'hours'
     */
    durationUnit?: DurationUnit | undefined;
    /**
     * Employee display name.
     */
    employeeDisplayName?: string | undefined;
    /**
     * Employee email address.
     */
    employeeEmail?: string | undefined;
    /**
     * Employee ID
     */
    employeeId?: string | undefined;
    /**
     * Date of the last day of the time off (not relevant for requests using the hours type).
     */
    endDate?: RFCDate | undefined;
    /**
     * What portion of the last day is included - all_day, morning or afternoon (relevant for requests using the Days type).
     */
    endPortion?: string | undefined;
    /**
     * The time off duration in hours for the date (relevant for requests using the Hours type).
     */
    hoursOnDate?: number | undefined;
    /**
     * Display name of the policy type.
     */
    policyTypeDisplayName?: string | undefined;
    /**
     * TimeOff Request ID.
     */
    requestId?: number | undefined;
    /**
     * Date of the first day of the time off (not relevant for requests using the hours type).
     */
    startDate?: RFCDate | undefined;
    /**
     * What portion of the first day is included - all_day, morning or afternoon (relevant for requests using the Days type).
     */
    startPortion?: string | undefined;
    /**
     * The amount that will be deducted from the balance
     */
    totalCost?: number | undefined;
    /**
     * The total amount of time the request covers, including regular days off such as weekends
     */
    totalDuration?: number | undefined;
    /**
     * The type of request duration.<br> <b>portionOnRange</b> is when the request is for every morning or every afternoon during the days requested.<br> <b>hoursOnRange</b> is when the request is for X hours every day during the days requested.
     */
    type?: TimeoffChangeType | undefined;
};

/** @internal */
export const ChangeType$ = z.nativeEnum(ChangeType);

/** @internal */
export const DurationUnit$ = z.nativeEnum(DurationUnit);

/** @internal */
export const TimeoffChangeType$ = z.nativeEnum(TimeoffChangeType);

/** @internal */
export namespace TimeoffChange$ {
    export type Inbound = {
        changeReason?: string | undefined;
        changeType?: ChangeType | undefined;
        dailyHours?: number | undefined;
        date?: string | undefined;
        dayPortion?: string | undefined;
        durationUnit?: DurationUnit | undefined;
        employeeDisplayName?: string | undefined;
        employeeEmail?: string | undefined;
        employeeId?: string | undefined;
        endDate?: string | undefined;
        endPortion?: string | undefined;
        hoursOnDate?: number | undefined;
        policyTypeDisplayName?: string | undefined;
        requestId?: number | undefined;
        startDate?: string | undefined;
        startPortion?: string | undefined;
        totalCost?: number | undefined;
        totalDuration?: number | undefined;
        type?: TimeoffChangeType | undefined;
    };

    export const inboundSchema: z.ZodType<TimeoffChange, z.ZodTypeDef, Inbound> = z
        .object({
            changeReason: z.string().optional(),
            changeType: ChangeType$.optional(),
            dailyHours: z.number().optional(),
            date: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            dayPortion: z.string().optional(),
            durationUnit: DurationUnit$.optional(),
            employeeDisplayName: z.string().optional(),
            employeeEmail: z.string().optional(),
            employeeId: z.string().optional(),
            endDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            endPortion: z.string().optional(),
            hoursOnDate: z.number().int().optional(),
            policyTypeDisplayName: z.string().optional(),
            requestId: z.number().int().optional(),
            startDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            startPortion: z.string().optional(),
            totalCost: z.number().optional(),
            totalDuration: z.number().optional(),
            type: TimeoffChangeType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.changeReason === undefined ? null : { changeReason: v.changeReason }),
                ...(v.changeType === undefined ? null : { changeType: v.changeType }),
                ...(v.dailyHours === undefined ? null : { dailyHours: v.dailyHours }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.dayPortion === undefined ? null : { dayPortion: v.dayPortion }),
                ...(v.durationUnit === undefined ? null : { durationUnit: v.durationUnit }),
                ...(v.employeeDisplayName === undefined
                    ? null
                    : { employeeDisplayName: v.employeeDisplayName }),
                ...(v.employeeEmail === undefined ? null : { employeeEmail: v.employeeEmail }),
                ...(v.employeeId === undefined ? null : { employeeId: v.employeeId }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.endPortion === undefined ? null : { endPortion: v.endPortion }),
                ...(v.hoursOnDate === undefined ? null : { hoursOnDate: v.hoursOnDate }),
                ...(v.policyTypeDisplayName === undefined
                    ? null
                    : { policyTypeDisplayName: v.policyTypeDisplayName }),
                ...(v.requestId === undefined ? null : { requestId: v.requestId }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.startPortion === undefined ? null : { startPortion: v.startPortion }),
                ...(v.totalCost === undefined ? null : { totalCost: v.totalCost }),
                ...(v.totalDuration === undefined ? null : { totalDuration: v.totalDuration }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        changeReason?: string | undefined;
        changeType?: ChangeType | undefined;
        dailyHours?: number | undefined;
        date?: string | undefined;
        dayPortion?: string | undefined;
        durationUnit?: DurationUnit | undefined;
        employeeDisplayName?: string | undefined;
        employeeEmail?: string | undefined;
        employeeId?: string | undefined;
        endDate?: string | undefined;
        endPortion?: string | undefined;
        hoursOnDate?: number | undefined;
        policyTypeDisplayName?: string | undefined;
        requestId?: number | undefined;
        startDate?: string | undefined;
        startPortion?: string | undefined;
        totalCost?: number | undefined;
        totalDuration?: number | undefined;
        type?: TimeoffChangeType | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TimeoffChange> = z
        .object({
            changeReason: z.string().optional(),
            changeType: ChangeType$.optional(),
            dailyHours: z.number().optional(),
            date: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            dayPortion: z.string().optional(),
            durationUnit: DurationUnit$.optional(),
            employeeDisplayName: z.string().optional(),
            employeeEmail: z.string().optional(),
            employeeId: z.string().optional(),
            endDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            endPortion: z.string().optional(),
            hoursOnDate: z.number().int().optional(),
            policyTypeDisplayName: z.string().optional(),
            requestId: z.number().int().optional(),
            startDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            startPortion: z.string().optional(),
            totalCost: z.number().optional(),
            totalDuration: z.number().optional(),
            type: TimeoffChangeType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.changeReason === undefined ? null : { changeReason: v.changeReason }),
                ...(v.changeType === undefined ? null : { changeType: v.changeType }),
                ...(v.dailyHours === undefined ? null : { dailyHours: v.dailyHours }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.dayPortion === undefined ? null : { dayPortion: v.dayPortion }),
                ...(v.durationUnit === undefined ? null : { durationUnit: v.durationUnit }),
                ...(v.employeeDisplayName === undefined
                    ? null
                    : { employeeDisplayName: v.employeeDisplayName }),
                ...(v.employeeEmail === undefined ? null : { employeeEmail: v.employeeEmail }),
                ...(v.employeeId === undefined ? null : { employeeId: v.employeeId }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.endPortion === undefined ? null : { endPortion: v.endPortion }),
                ...(v.hoursOnDate === undefined ? null : { hoursOnDate: v.hoursOnDate }),
                ...(v.policyTypeDisplayName === undefined
                    ? null
                    : { policyTypeDisplayName: v.policyTypeDisplayName }),
                ...(v.requestId === undefined ? null : { requestId: v.requestId }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.startPortion === undefined ? null : { startPortion: v.startPortion }),
                ...(v.totalCost === undefined ? null : { totalCost: v.totalCost }),
                ...(v.totalDuration === undefined ? null : { totalDuration: v.totalDuration }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
