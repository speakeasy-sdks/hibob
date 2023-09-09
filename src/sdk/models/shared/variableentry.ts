/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { CurrencyValue } from "./currencyvalue";
import { Expose, Transform, Type } from "class-transformer";

export class VariableEntry extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    @Type(() => CurrencyValue)
    amount: CurrencyValue;

    /**
     * The employee's company on-target weight, in percent.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyPercent" })
    companyPercent?: number;

    /**
     * The employee's department on-target weight, in percent.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "departmentPercent" })
    departmentPercent?: number;

    /**
     * The date this entry becomes effective.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "effectiveDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    effectiveDate: RFCDate;

    /**
     * ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * The employee's individual on-target weight, in percent.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "individualPercent" })
    individualPercent?: number;

    /**
     * This represents the period for this variable entry. It can be one of: Annual, Half-Yearly, Quarterly, Monthly.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paymentPeriod" })
    paymentPeriod: string;

    /**
     * The reason for this change.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason?: string;

    /**
     * The type of variable pay.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "variableType" })
    variableType?: string;
}
