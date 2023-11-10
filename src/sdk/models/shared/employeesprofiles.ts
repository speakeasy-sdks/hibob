/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmployeeProfile } from "./employeeprofile";
import { Expose, Type } from "class-transformer";

export class EmployeesProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: EmployeeProfile })
    @Expose({ name: "employees" })
    @Type(() => EmployeeProfile)
    employees?: EmployeeProfile[];
}
