/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type PostTimeoffEmployeesIdDiffHoursRequestsSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type PostTimeoffEmployeesIdDiffHoursRequestsRequest = {
    submitTimeoffRequestDiffHours: shared.SubmitTimeoffRequestDiffHours;
    /**
     * Employee ID.
     */
    id: string;
};

export type PostTimeoffEmployeesIdDiffHoursRequestsResponse = {
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
export namespace PostTimeoffEmployeesIdDiffHoursRequestsSecurity$ {
    export type Inbound = {
        Basic?: shared.SchemeBasic$.Inbound | undefined;
        Bearer?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        PostTimeoffEmployeesIdDiffHoursRequestsSecurity,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            Basic: shared.SchemeBasic$.inboundSchema.optional(),
            Bearer: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.Basic === undefined ? null : { basic: v.Basic }),
                ...(v.Bearer === undefined ? null : { bearer: v.Bearer }),
            };
        });

    export type Outbound = {
        Basic?: shared.SchemeBasic$.Outbound | undefined;
        Bearer?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostTimeoffEmployeesIdDiffHoursRequestsSecurity
    > = z
        .object({
            basic: shared.SchemeBasic$.outboundSchema.optional(),
            bearer: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.basic === undefined ? null : { Basic: v.basic }),
                ...(v.bearer === undefined ? null : { Bearer: v.bearer }),
            };
        });
}

/** @internal */
export namespace PostTimeoffEmployeesIdDiffHoursRequestsRequest$ {
    export type Inbound = {
        SubmitTimeoffRequestDiffHours: shared.SubmitTimeoffRequestDiffHours$.Inbound;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        PostTimeoffEmployeesIdDiffHoursRequestsRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            SubmitTimeoffRequestDiffHours: shared.SubmitTimeoffRequestDiffHours$.inboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                submitTimeoffRequestDiffHours: v.SubmitTimeoffRequestDiffHours,
                id: v.id,
            };
        });

    export type Outbound = {
        SubmitTimeoffRequestDiffHours: shared.SubmitTimeoffRequestDiffHours$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostTimeoffEmployeesIdDiffHoursRequestsRequest
    > = z
        .object({
            submitTimeoffRequestDiffHours: shared.SubmitTimeoffRequestDiffHours$.outboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                SubmitTimeoffRequestDiffHours: v.submitTimeoffRequestDiffHours,
                id: v.id,
            };
        });
}

/** @internal */
export namespace PostTimeoffEmployeesIdDiffHoursRequestsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostTimeoffEmployeesIdDiffHoursRequestsResponse,
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
        PostTimeoffEmployeesIdDiffHoursRequestsResponse
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
