/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

/**
 * filter tasks by open / closed status. Not sending task_status will return all tasks.
 */
export enum TaskStatus {
    Open = "open",
    Closed = "closed",
}

export type GetTasksPeopleIdRequest = {
    /**
     * employee id
     */
    id: string;
    /**
     * filter tasks by open / closed status. Not sending task_status will return all tasks.
     */
    taskStatus?: TaskStatus | undefined;
};

export type GetTasksPeopleIdResponse = {
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
     * All of a specific employee's open tasks.
     */
    tasks?: shared.Tasks | undefined;
};

/** @internal */
export const TaskStatus$ = z.nativeEnum(TaskStatus);

/** @internal */
export namespace GetTasksPeopleIdRequest$ {
    export type Inbound = {
        id: string;
        task_status?: TaskStatus | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksPeopleIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            task_status: TaskStatus$.optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.task_status === undefined ? null : { taskStatus: v.task_status }),
            };
        });

    export type Outbound = {
        id: string;
        task_status?: TaskStatus | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksPeopleIdRequest> = z
        .object({
            id: z.string(),
            taskStatus: TaskStatus$.optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.taskStatus === undefined ? null : { task_status: v.taskStatus }),
            };
        });
}

/** @internal */
export namespace GetTasksPeopleIdResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        Tasks?: shared.Tasks$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksPeopleIdResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksPeopleIdResponse> = z
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
