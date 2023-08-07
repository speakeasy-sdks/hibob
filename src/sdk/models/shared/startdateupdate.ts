/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform } from "class-transformer";

export class StartDateUpdate extends SpeakeasyBase {
    /**
     * Additional info for the start date update.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason?: string;

    /**
     * The date this entry becomes effective.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    startDate: RFCDate;
}
