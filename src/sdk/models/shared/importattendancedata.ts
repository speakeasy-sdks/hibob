/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ImportAttendanceEvent, ImportAttendanceEvent$ } from "./importattendanceevent";
import * as z from "zod";

export type ImportAttendanceData = {
    /**
     * Allows to set custom date format for the date-time values sent in the requests
     */
    dateTimeFormat?: string | undefined;
    /**
     * The ID type used to identify the employee. Can be one of: "bobId", "email", "idInCompany", or a custom field.<br/>For <b>custom fields</b> a forward slash separator should be used.<br/>In order to use a specific custom field to identify an employee, for example a custom field called "Payroll integration ID":<ul><li>Query the field name via the <a href='https://apidocs.hibob.com/reference/get_company-people-fields'>"Get all company fields"</a></li><li>In the response the name will look like <b>"identification.custom.Payroll Integration ID_1RNhIIf"</b></li><li>The value to use should be: <b>"/identification/custom/Payroll Integration ID_1RNhI"</b></li></ul>
     */
    idType: string;
    /**
     * List of attendance events
     */
    requests: Array<ImportAttendanceEvent>;
};

/** @internal */
export namespace ImportAttendanceData$ {
    export type Inbound = {
        dateTimeFormat?: string | undefined;
        idType: string;
        requests: Array<ImportAttendanceEvent$.Inbound>;
    };

    export const inboundSchema: z.ZodType<ImportAttendanceData, z.ZodTypeDef, Inbound> = z
        .object({
            dateTimeFormat: z.string().optional(),
            idType: z.string(),
            requests: z.array(ImportAttendanceEvent$.inboundSchema),
        })
        .transform((v) => {
            return {
                ...(v.dateTimeFormat === undefined ? null : { dateTimeFormat: v.dateTimeFormat }),
                idType: v.idType,
                requests: v.requests,
            };
        });

    export type Outbound = {
        dateTimeFormat?: string | undefined;
        idType: string;
        requests: Array<ImportAttendanceEvent$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ImportAttendanceData> = z
        .object({
            dateTimeFormat: z.string().optional(),
            idType: z.string(),
            requests: z.array(ImportAttendanceEvent$.outboundSchema),
        })
        .transform((v) => {
            return {
                ...(v.dateTimeFormat === undefined ? null : { dateTimeFormat: v.dateTimeFormat }),
                idType: v.idType,
                requests: v.requests,
            };
        });
}
