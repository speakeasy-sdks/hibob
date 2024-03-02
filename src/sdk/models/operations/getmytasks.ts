/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetMyTasksSecurity = {
    bearer: string;
};

export type GetMyTasksResponse = {
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
    /**
     * The logged-in user's tasks.
     */
    tasks?: shared.Tasks | undefined;
};

/** @internal */
export namespace GetMyTasksSecurity$ {
    export type Inbound = {
        Bearer: string;
    };

    export const inboundSchema: z.ZodType<GetMyTasksSecurity, z.ZodTypeDef, Inbound> = z
        .object({
            Bearer: z.string(),
        })
        .transform((v) => {
            return {
                bearer: v.Bearer,
            };
        });

    export type Outbound = {
        Bearer: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyTasksSecurity> = z
        .object({
            bearer: z.string(),
        })
        .transform((v) => {
            return {
                Bearer: v.bearer,
            };
        });
}

/** @internal */
export namespace GetMyTasksResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        Tasks?: shared.Tasks$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetMyTasksResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            Tasks: shared.Tasks$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.Tasks === undefined ? null : { tasks: v.Tasks }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        Tasks?: shared.Tasks$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyTasksResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            tasks: shared.Tasks$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.tasks === undefined ? null : { Tasks: v.tasks }),
            };
        });
}
