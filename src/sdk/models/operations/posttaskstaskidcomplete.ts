/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type PostTasksTaskIdCompleteRequest = {
    /**
     * task id
     */
    taskId: string;
};

export type PostTasksTaskIdCompleteResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Marks a task as complete.
     */
    tasks?: shared.Tasks | undefined;
};

/** @internal */
export namespace PostTasksTaskIdCompleteRequest$ {
    export type Inbound = {
        taskId: string;
    };

    export const inboundSchema: z.ZodType<PostTasksTaskIdCompleteRequest, z.ZodTypeDef, Inbound> = z
        .object({
            taskId: z.string(),
        })
        .transform((v) => {
            return {
                taskId: v.taskId,
            };
        });

    export type Outbound = {
        taskId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostTasksTaskIdCompleteRequest> =
        z
            .object({
                taskId: z.string(),
            })
            .transform((v) => {
                return {
                    taskId: v.taskId,
                };
            });
}

/** @internal */
export namespace PostTasksTaskIdCompleteResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        Tasks?: shared.Tasks$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PostTasksTaskIdCompleteResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                Error: shared.ErrorT$.inboundSchema.optional(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
                Tasks: shared.Tasks$.inboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    ...(v.Error === undefined ? null : { error: v.Error }),
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                    ...(v.Tasks === undefined ? null : { tasks: v.Tasks }),
                };
            });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        Tasks?: shared.Tasks$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostTasksTaskIdCompleteResponse
    > = z
        .object({
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            tasks: shared.Tasks$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.tasks === undefined ? null : { Tasks: v.tasks }),
            };
        });
}
