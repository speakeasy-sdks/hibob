/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PutPeopleIdEmailSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type PutPeopleIdEmailRequest = {
    changeEmail: shared.ChangeEmail;
    /**
     * employee id
     */
    id: string;
};

export type PutPeopleIdEmailResponse = {
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
export namespace PutPeopleIdEmailRequest$ {
    export type Inbound = {
        ChangeEmail: shared.ChangeEmail$.Inbound;
        id: string;
    };

    export const inboundSchema: z.ZodType<PutPeopleIdEmailRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ChangeEmail: shared.ChangeEmail$.inboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                changeEmail: v.ChangeEmail,
                id: v.id,
            };
        });

    export type Outbound = {
        ChangeEmail: shared.ChangeEmail$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PutPeopleIdEmailRequest> = z
        .object({
            changeEmail: shared.ChangeEmail$.outboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                ChangeEmail: v.changeEmail,
                id: v.id,
            };
        });
}

/** @internal */
export namespace PutPeopleIdEmailResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PutPeopleIdEmailResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PutPeopleIdEmailResponse> = z
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
