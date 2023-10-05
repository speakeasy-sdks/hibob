/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform, Type } from "class-transformer";

export class CreateEmployeeRequestWork extends SpeakeasyBase {
    /**
     * The employee's site.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "site" })
    site: string;

    /**
     * The employee's employment start date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startDate" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    startDate: RFCDate;
}

export class CreateEmployeeRequest extends SpeakeasyBase {
    /**
     * Employee's email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Employee's first name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "firstName" })
    firstName: string;

    /**
     * Employee's surname.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "surname" })
    surname: string;

    @SpeakeasyMetadata()
    @Expose({ name: "work" })
    @Type(() => CreateEmployeeRequestWork)
    work?: CreateEmployeeRequestWork;
}
