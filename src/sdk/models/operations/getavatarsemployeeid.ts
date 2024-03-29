/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetAvatarsEmployeeIdRequest = {
    /**
     * employee id
     */
    employeeId: string;
};

export type GetAvatarsEmployeeIdResponse = {
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
export namespace GetAvatarsEmployeeIdRequest$ {
    export type Inbound = {
        employeeId: string;
    };

    export const inboundSchema: z.ZodType<GetAvatarsEmployeeIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            employeeId: z.string(),
        })
        .transform((v) => {
            return {
                employeeId: v.employeeId,
            };
        });

    export type Outbound = {
        employeeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAvatarsEmployeeIdRequest> = z
        .object({
            employeeId: z.string(),
        })
        .transform((v) => {
            return {
                employeeId: v.employeeId,
            };
        });
}

/** @internal */
export namespace GetAvatarsEmployeeIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetAvatarsEmployeeIdResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAvatarsEmployeeIdResponse> = z
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
