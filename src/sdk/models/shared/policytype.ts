/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Activity type.
 */
export enum PolicyTypeActivity {
    PaidTimeoff = "paidTimeoff",
    UnpaidTimeoff = "unpaidTimeoff",
    WorkTime = "workTime",
}

export enum PolicyTypeUnit {
    Days = "days",
    Hours = "hours",
}

/**
 * Policy type
 */
export class PolicyType extends SpeakeasyBase {
    /**
     * Activity type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "activity" })
    activity?: PolicyTypeActivity;

    /**
     * Requests will be deducted from the balance only for working days.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bookingWorkDaysOnly" })
    bookingWorkDaysOnly?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "unit" })
    unit?: PolicyTypeUnit;
}