/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PostEmployeesIdentifierTerminateSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type PostEmployeesIdentifierTerminateRequest = {
    employeeTermination: shared.EmployeeTermination;
    /**
     * Employee ID.
     */
    identifier: string;
};

export type PostEmployeesIdentifierTerminateResponse = {
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
export namespace PostEmployeesIdentifierTerminateRequest$ {
    export type Inbound = {
        EmployeeTermination: shared.EmployeeTermination$.Inbound;
        identifier: string;
    };

    export const inboundSchema: z.ZodType<
        PostEmployeesIdentifierTerminateRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            EmployeeTermination: shared.EmployeeTermination$.inboundSchema,
            identifier: z.string(),
        })
        .transform((v) => {
            return {
                employeeTermination: v.EmployeeTermination,
                identifier: v.identifier,
            };
        });

    export type Outbound = {
        EmployeeTermination: shared.EmployeeTermination$.Outbound;
        identifier: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostEmployeesIdentifierTerminateRequest
    > = z
        .object({
            employeeTermination: shared.EmployeeTermination$.outboundSchema,
            identifier: z.string(),
        })
        .transform((v) => {
            return {
                EmployeeTermination: v.employeeTermination,
                identifier: v.identifier,
            };
        });
}

/** @internal */
export namespace PostEmployeesIdentifierTerminateResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostEmployeesIdentifierTerminateResponse,
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
        PostEmployeesIdentifierTerminateResponse
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
