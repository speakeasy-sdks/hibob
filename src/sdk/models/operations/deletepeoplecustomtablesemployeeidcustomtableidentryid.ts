/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest = {
    /**
     * The ID of custom table.
     */
    customTableId: string;
    /**
     * Employee ID.
     */
    employeeId: string;
    /**
     * The ID of custom table entry.
     */
    entryId: string;
};

export type DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest$ {
    export type Inbound = {
        custom_table_id: string;
        employee_id: string;
        entry_id: string;
    };

    export const inboundSchema: z.ZodType<
        DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            custom_table_id: z.string(),
            employee_id: z.string(),
            entry_id: z.string(),
        })
        .transform((v) => {
            return {
                customTableId: v.custom_table_id,
                employeeId: v.employee_id,
                entryId: v.entry_id,
            };
        });

    export type Outbound = {
        custom_table_id: string;
        employee_id: string;
        entry_id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest
    > = z
        .object({
            customTableId: z.string(),
            employeeId: z.string(),
            entryId: z.string(),
        })
        .transform((v) => {
            return {
                custom_table_id: v.customTableId,
                employee_id: v.employeeId,
                entry_id: v.entryId,
            };
        });
}

/** @internal */
export namespace DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeletePeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
