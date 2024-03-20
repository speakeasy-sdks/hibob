/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../types";
import * as z from "zod";

/**
 * The type of request duration.<br> <b>portionOnRange</b> is when the request is for every morning or every afternoon during the days requested.<br> <b>hoursOnRange</b> is when the request is for X hours every day during the days requested.
 */
export enum RequestRangeType {
    Days = "days",
    Hours = "hours",
    PortionOnRange = "portionOnRange",
    HoursOnRange = "hoursOnRange",
}

export type OutToday = {
    /**
     * The time off duration in hours for every request's days (relevant for requests with hoursOnRange type).
     */
    dailyHours?: number | undefined;
    /**
     * Date of the time off (relevant for requests using the hours type).
     */
    date?: RFCDate | undefined;
    /**
     * What portion of the request's days is included - morning or afternoon (relevant for request using the portionOnRange type).
     */
    dayPortion?: string | undefined;
    /**
     * Employee display name.
     */
    employeeDisplayName?: string | undefined;
    /**
     * Employee email address.
     */
    employeeEmail?: string | undefined;
    /**
     * Employee ID.
     */
    employeeId?: string | undefined;
    /**
     * Date of the last day of the time off (not relevant for requests using the hours type).
     */
    endDate?: RFCDate | undefined;
    /**
     * What portion of the last day is included - all_day, morning or afternoon (relevant for request using the days type).
     */
    endDatePortion?: string | undefined;
    /**
     * The time off duration in hours for the date (relevant for requests with hours type).
     */
    hours?: number | undefined;
    /**
     * Relevant for requests using the hours type.
     */
    minutes?: number | undefined;
    /**
     * Display name of the policy type.
     */
    policyTypeDisplayName?: string | undefined;
    /**
     * The type of request duration.<br> <b>portionOnRange</b> is when the request is for every morning or every afternoon during the days requested.<br> <b>hoursOnRange</b> is when the request is for X hours every day during the days requested.
     */
    requestRangeType?: RequestRangeType | undefined;
    /**
     * Date of the first day of the time off (not relevant for requests using the hours type).
     */
    startDate?: RFCDate | undefined;
    /**
     * What portion of the first day is included - all_day, morning or afternoon (relevant for request using the days type).
     */
    startDatePortion?: string | undefined;
};

/** @internal */
export const RequestRangeType$ = z.nativeEnum(RequestRangeType);

/** @internal */
export namespace OutToday$ {
    export type Inbound = {
        dailyHours?: number | undefined;
        date?: string | undefined;
        dayPortion?: string | undefined;
        employeeDisplayName?: string | undefined;
        employeeEmail?: string | undefined;
        employeeId?: string | undefined;
        endDate?: string | undefined;
        endDatePortion?: string | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        policyTypeDisplayName?: string | undefined;
        requestRangeType?: RequestRangeType | undefined;
        startDate?: string | undefined;
        startDatePortion?: string | undefined;
    };

    export const inboundSchema: z.ZodType<OutToday, z.ZodTypeDef, Inbound> = z
        .object({
            dailyHours: z.number().optional(),
            date: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            dayPortion: z.string().optional(),
            employeeDisplayName: z.string().optional(),
            employeeEmail: z.string().optional(),
            employeeId: z.string().optional(),
            endDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            endDatePortion: z.string().optional(),
            hours: z.number().int().optional(),
            minutes: z.number().int().optional(),
            policyTypeDisplayName: z.string().optional(),
            requestRangeType: RequestRangeType$.optional(),
            startDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            startDatePortion: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.dailyHours === undefined ? null : { dailyHours: v.dailyHours }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.dayPortion === undefined ? null : { dayPortion: v.dayPortion }),
                ...(v.employeeDisplayName === undefined
                    ? null
                    : { employeeDisplayName: v.employeeDisplayName }),
                ...(v.employeeEmail === undefined ? null : { employeeEmail: v.employeeEmail }),
                ...(v.employeeId === undefined ? null : { employeeId: v.employeeId }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.endDatePortion === undefined ? null : { endDatePortion: v.endDatePortion }),
                ...(v.hours === undefined ? null : { hours: v.hours }),
                ...(v.minutes === undefined ? null : { minutes: v.minutes }),
                ...(v.policyTypeDisplayName === undefined
                    ? null
                    : { policyTypeDisplayName: v.policyTypeDisplayName }),
                ...(v.requestRangeType === undefined
                    ? null
                    : { requestRangeType: v.requestRangeType }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.startDatePortion === undefined
                    ? null
                    : { startDatePortion: v.startDatePortion }),
            };
        });

    export type Outbound = {
        dailyHours?: number | undefined;
        date?: string | undefined;
        dayPortion?: string | undefined;
        employeeDisplayName?: string | undefined;
        employeeEmail?: string | undefined;
        employeeId?: string | undefined;
        endDate?: string | undefined;
        endDatePortion?: string | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        policyTypeDisplayName?: string | undefined;
        requestRangeType?: RequestRangeType | undefined;
        startDate?: string | undefined;
        startDatePortion?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OutToday> = z
        .object({
            dailyHours: z.number().optional(),
            date: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            dayPortion: z.string().optional(),
            employeeDisplayName: z.string().optional(),
            employeeEmail: z.string().optional(),
            employeeId: z.string().optional(),
            endDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            endDatePortion: z.string().optional(),
            hours: z.number().int().optional(),
            minutes: z.number().int().optional(),
            policyTypeDisplayName: z.string().optional(),
            requestRangeType: RequestRangeType$.optional(),
            startDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            startDatePortion: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.dailyHours === undefined ? null : { dailyHours: v.dailyHours }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.dayPortion === undefined ? null : { dayPortion: v.dayPortion }),
                ...(v.employeeDisplayName === undefined
                    ? null
                    : { employeeDisplayName: v.employeeDisplayName }),
                ...(v.employeeEmail === undefined ? null : { employeeEmail: v.employeeEmail }),
                ...(v.employeeId === undefined ? null : { employeeId: v.employeeId }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.endDatePortion === undefined ? null : { endDatePortion: v.endDatePortion }),
                ...(v.hours === undefined ? null : { hours: v.hours }),
                ...(v.minutes === undefined ? null : { minutes: v.minutes }),
                ...(v.policyTypeDisplayName === undefined
                    ? null
                    : { policyTypeDisplayName: v.policyTypeDisplayName }),
                ...(v.requestRangeType === undefined
                    ? null
                    : { requestRangeType: v.requestRangeType }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.startDatePortion === undefined
                    ? null
                    : { startDatePortion: v.startDatePortion }),
            };
        });
}
