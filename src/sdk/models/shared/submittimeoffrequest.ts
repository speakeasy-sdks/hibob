/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Select <b>morning</b> when the request is for mornings on the days requested. Select <b>afternoon</b> when the request is for afternoons on the days requested.<br> This is mandatory if the <b>requestRangeType</b> is <b>portionOnRange</b>.
 */
export enum SubmitTimeoffRequestDayPortion {
    Morning = "morning",
    Afternoon = "afternoon",
}

/**
 * Portion of the last day - relevant for requests in days.
 */
export enum SubmitTimeoffRequestEndDatePortion {
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
export enum SubmitTimeoffRequestStartDatePortion {
    AllDay = "all_day",
    Morning = "morning",
    Afternoon = "afternoon",
}

export class SubmitTimeoffRequest extends SpeakeasyBase {
    /**
     * The employee ID of the user to be set as the approver for this request. This is relevant if 'skipManagerApproval' is set to true.<br>Please note that the user calling the API with this param must have permission to import time off requests.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approver" })
    approver?: string;

    /**
     * Enter the number of hours when the request is for X hours on the days requested.<br> This is mandatory if the <b>requestRangeType</b> is <b>hoursOnRange</b>.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dailyHours" })
    dailyHours?: number;

    /**
     * Enter the number of minutes when the request is for X hours and X minutes on the days requested.<br> This is relevant if the <b>requestRangeType</b> is <b>hoursOnRange</b> and the amount requested is not a full hour or hours.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dailyMinutes" })
    dailyMinutes?: number;

    /**
     * Select <b>morning</b> when the request is for mornings on the days requested. Select <b>afternoon</b> when the request is for afternoons on the days requested.<br> This is mandatory if the <b>requestRangeType</b> is <b>portionOnRange</b>.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dayPortion" })
    dayPortion?: SubmitTimeoffRequestDayPortion;

    /**
     * Request reason.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Date of the last day of the time off (not relevant for requests using
     *
     * @remarks
     *                                                the hours type).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "endDate" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    endDate?: RFCDate;

    /**
     * Portion of the last day - relevant for requests in days.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "endDatePortion" })
    endDatePortion?: SubmitTimeoffRequestEndDatePortion;

    /**
     * This field is mandatory if the requestRangeType is set to 'hours'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hours" })
    hours?: number;

    /**
     * Relevant if requestRangeType is set to 'hours'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "minutes" })
    minutes?: number;

    /**
     * Request policy type, e.g. Holiday, Sick or any custom type defined.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policyType" })
    policyType: string;

    /**
     * The reason code ID taken from the policy type's reason codes list. The list is available in GET /timeoff/policy-types/{policyType}/reason-codes
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reasonCode" })
    reasonCode?: number;

    /**
     * The type of request duration.<br> Select <b>hours</b> when the request is for X hours during the day requested (This is supported only for policy types measured in hours).<br> Select <b>portionOnRange</b> when the  request is for every morning or every afternoon during the days requested.<br> Select <b>hoursOnRange</b> when the request is for X hours every day during the days requested (This is supported only for policy types measured in hours)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requestRangeType" })
    requestRangeType?: SubmitTimeoffRequestRequestRangeType;

    /**
     * Admins only can skip the approval policy. Setting this field to true will create an approved request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "skipManagerApproval" })
    skipManagerApproval?: boolean;

    /**
     * Date of the first day of the time off (not relevant for requests using the hours type).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startDate" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    startDate: RFCDate;

    /**
     * Portion of the first day - relevant for requests in days.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startDatePortion" })
    startDatePortion?: SubmitTimeoffRequestStartDatePortion;
}
