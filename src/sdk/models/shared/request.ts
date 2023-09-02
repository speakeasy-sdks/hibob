/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform } from "class-transformer";

/**
 * The type of request duration.<br> <b>portionOnRange</b> is when the request is for every morning or every afternoon during the days requested.<br> <b>hoursOnRange</b> is when the request is for X hours every day during the days requested.
 */
export enum RequestType {
    Days = "days",
    Hours = "hours",
    PortionOnRange = "portionOnRange",
    HoursOnRange = "hoursOnRange",
}

export class Request extends SpeakeasyBase {
    /**
     * The time off duration in hours for every day in the request (relevant for requests using the hoursOnRange type).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dailyHours" })
    dailyHours?: number;

    /**
     * Date of the time off (relevant for request using the hours type)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    date?: RFCDate;

    /**
     * What portion of the request's days is included - morning or afternoon (relevant for requests using the portionOnRange type).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dayPortion" })
    dayPortion?: string;

    /**
     * Employee display name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employeeDisplayName" })
    employeeDisplayName?: string;

    /**
     * Employee ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employeeId" })
    employeeId?: string;

    /**
     * Date of the last day of the time off (not relevant for requests using the hours type).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "endDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    endDate?: RFCDate;

    /**
     * What portion of the last day is included - all_day, morning or afternoon (relevant for requests using the days type).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "endPortion" })
    endPortion?: string;

    /**
     * The time off duration in hours for the date (relevant for request using the hours type).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hoursOnDate" })
    hoursOnDate?: number;

    /**
     * Relevant for request using the hours type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "minutes" })
    minutes?: number;

    /**
     * Request policy type, e.g. Holiday, Sick or any defined custom type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policyType" })
    policyType?: string;

    /**
     * Display name for the policy type. This will be translated based on the locale.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policyTypeDisplayName" })
    policyTypeDisplayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "requestId" })
    requestId?: number;

    /**
     * Date of the first day of the time off (not relevant for requests using the hours type).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    startDate?: RFCDate;

    /**
     * What portion of the first day is included - all_day, morning or afternoon (relevant for request using the days type).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startPortion" })
    startPortion?: string;

    /**
     * Request status. This can be either Approved or Pending.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    /**
     * The type of request duration.<br> <b>portionOnRange</b> is when the request is for every morning or every afternoon during the days requested.<br> <b>hoursOnRange</b> is when the request is for X hours every day during the days requested.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: RequestType;
}