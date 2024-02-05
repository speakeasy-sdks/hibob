/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PutAvatarsEmployeeIdRequest = {
    uploadAvatar: shared.UploadAvatar;
    /**
     * Employee ID.
     */
    employeeId: string;
};

export type PutAvatarsEmployeeIdResponse = {
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
export namespace PutAvatarsEmployeeIdRequest$ {
    export type Inbound = {
        UploadAvatar: shared.UploadAvatar$.Inbound;
        employeeId: string;
    };

    export const inboundSchema: z.ZodType<PutAvatarsEmployeeIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            UploadAvatar: shared.UploadAvatar$.inboundSchema,
            employeeId: z.string(),
        })
        .transform((v) => {
            return {
                uploadAvatar: v.UploadAvatar,
                employeeId: v.employeeId,
            };
        });

    export type Outbound = {
        UploadAvatar: shared.UploadAvatar$.Outbound;
        employeeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PutAvatarsEmployeeIdRequest> = z
        .object({
            uploadAvatar: shared.UploadAvatar$.outboundSchema,
            employeeId: z.string(),
        })
        .transform((v) => {
            return {
                UploadAvatar: v.uploadAvatar,
                employeeId: v.employeeId,
            };
        });
}

/** @internal */
export namespace PutAvatarsEmployeeIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PutAvatarsEmployeeIdResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PutAvatarsEmployeeIdResponse> = z
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
