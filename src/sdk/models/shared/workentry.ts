/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform, Type } from "class-transformer";

export class WorkEntryCustomColumns extends SpeakeasyBase {}

/**
 * The manager's details.
 */
export class WorkEntryReportsTo extends SpeakeasyBase {
    /**
     * The manager's display name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    /**
     * The manager's email.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * The manager's first name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "firstName" })
    firstName?: string;

    /**
     * The manager's employee ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The manager's surname.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "surname" })
    surname?: string;
}

export class WorkEntry extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "customColumns" })
    @Type(() => WorkEntryCustomColumns)
    customColumns?: WorkEntryCustomColumns;

    /**
     * The employee's department.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

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
     * The reason for this change.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason?: string;

    /**
     * The manager's details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reportsTo" })
    @Type(() => WorkEntryReportsTo)
    reportsTo?: WorkEntryReportsTo;

    /**
     * The employee's site.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "site" })
    site?: string;

    /**
     * The employee's site ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "siteId" })
    siteId?: number;

    /**
     * The employee's job title.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;
}
