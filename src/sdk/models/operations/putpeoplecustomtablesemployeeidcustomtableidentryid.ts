/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequestBody = {
    rawBody?: string | undefined;
};

export type PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest = {
    requestBody?: PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequestBody | undefined;
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

export type PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse = {
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
export namespace PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequestBody$ {
    export type Inbound = {
        RAW_BODY?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequestBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RAW_BODY: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.RAW_BODY === undefined ? null : { rawBody: v.RAW_BODY }),
            };
        });

    export type Outbound = {
        RAW_BODY?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequestBody
    > = z
        .object({
            rawBody: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.rawBody === undefined ? null : { RAW_BODY: v.rawBody }),
            };
        });
}

/** @internal */
export namespace PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest$ {
    export type Inbound = {
        RequestBody?:
            | PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequestBody$.Inbound
            | undefined;
        custom_table_id: string;
        employee_id: string;
        entry_id: string;
    };

    export const inboundSchema: z.ZodType<
        PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RequestBody: z
                .lazy(
                    () =>
                        PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequestBody$.inboundSchema
                )
                .optional(),
            custom_table_id: z.string(),
            employee_id: z.string(),
            entry_id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
                customTableId: v.custom_table_id,
                employeeId: v.employee_id,
                entryId: v.entry_id,
            };
        });

    export type Outbound = {
        RequestBody?:
            | PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequestBody$.Outbound
            | undefined;
        custom_table_id: string;
        employee_id: string;
        entry_id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequest
    > = z
        .object({
            requestBody: z
                .lazy(
                    () =>
                        PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdRequestBody$.outboundSchema
                )
                .optional(),
            customTableId: z.string(),
            employeeId: z.string(),
            entryId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                custom_table_id: v.customTableId,
                employee_id: v.employeeId,
                entry_id: v.entryId,
            };
        });
}

/** @internal */
export namespace PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse,
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
        PutPeopleCustomTablesEmployeeIdCustomTableIdEntryIdResponse
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
