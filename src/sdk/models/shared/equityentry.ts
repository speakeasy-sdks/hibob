/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { CurrencyValue } from "./currencyvalue";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Equity grant to add.
 */
export class EquityEntry extends SpeakeasyBase {
    /**
     * Consent number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consentNumber" })
    consentNumber?: string;

    /**
     * The date this entry becomes effective.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "effectiveDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    effectiveDate: RFCDate;

    /**
     * The type of the grant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "equityType" })
    equityType: string;

    @SpeakeasyMetadata()
    @Expose({ name: "exercisePrice" })
    @Type(() => CurrencyValue)
    exercisePrice?: CurrencyValue;

    /**
     * Date the equity was granted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grantDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    grantDate?: RFCDate;

    /**
     * The Grant number for employee.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grantNumber" })
    grantNumber?: number;

    /**
     * Grant status. one of: Granted, Pending Approval
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grantStatus" })
    grantStatus?: string;

    /**
     * Grant type. One of: Initial Grant, Merit Grant
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grantType" })
    grantType?: string;

    /**
     * ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Date the options expire.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "optionExpiration" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    optionExpiration?: RFCDate;

    /**
     * The number of equities granted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;

    /**
     * The reason for this change.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason?: string;

    /**
     * Vesting commencement date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vestingCommencementDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    vestingCommencementDate?: RFCDate;

    /**
     * The vesting schedule ID assigned to this grant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vestingSchedule" })
    vestingSchedule?: number;

    /**
     * Terms for exercising this grant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vestingTerm" })
    vestingTerm?: string;
}