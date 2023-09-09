/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform } from "class-transformer";

export class BalanceResult extends SpeakeasyBase {
    /**
     * Annual allowance.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "annualAllowance" })
    annualAllowance?: number;

    /**
     * Employee ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employeeId" })
    employeeId?: string;

    /**
     * The balance date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pointInTime" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    pointInTime?: RFCDate;

    /**
     * Policy name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    policy?: string;

    /**
     * The balance as of the cycle start date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startingBalance" })
    startingBalance?: number;

    /**
     * The cycle start date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startingBalanceAsOf" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    startingBalanceAsOf?: RFCDate;

    /**
     * Total number of days/hours manually adjusted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAdminAdjustments" })
    totalAdminAdjustments?: number;

    /**
     * The retrieved balance as of this date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalBalanceAsOfDate" })
    totalBalanceAsOfDate?: number;

    /**
     * The retrieved rounded balance as of this date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalRoundedBalanceAsOfDate" })
    totalRoundedBalanceAsOfDate?: number;

    /**
     * Total number of days/hours adjusted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalSystemAdjustments" })
    totalSystemAdjustments?: number;

    /**
     * Total number of days/hours taken.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalTaken" })
    totalTaken?: number;
}
