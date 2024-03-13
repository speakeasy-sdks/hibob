/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type PutCompanyPeopleFieldsFieldIdRequest = {
    /**
     * The new name and/or description of the updated field.
     */
    updateFieldRequest: shared.UpdateFieldRequest;
    /**
     * The ID of the field.
     */
    fieldId: string;
};

export type PutCompanyPeopleFieldsFieldIdResponse = {
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
export namespace PutCompanyPeopleFieldsFieldIdRequest$ {
    export type Inbound = {
        UpdateFieldRequest: shared.UpdateFieldRequest$.Inbound;
        fieldId: string;
    };

    export const inboundSchema: z.ZodType<
        PutCompanyPeopleFieldsFieldIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            UpdateFieldRequest: shared.UpdateFieldRequest$.inboundSchema,
            fieldId: z.string(),
        })
        .transform((v) => {
            return {
                updateFieldRequest: v.UpdateFieldRequest,
                fieldId: v.fieldId,
            };
        });

    export type Outbound = {
        UpdateFieldRequest: shared.UpdateFieldRequest$.Outbound;
        fieldId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PutCompanyPeopleFieldsFieldIdRequest
    > = z
        .object({
            updateFieldRequest: shared.UpdateFieldRequest$.outboundSchema,
            fieldId: z.string(),
        })
        .transform((v) => {
            return {
                UpdateFieldRequest: v.updateFieldRequest,
                fieldId: v.fieldId,
            };
        });
}

/** @internal */
export namespace PutCompanyPeopleFieldsFieldIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PutCompanyPeopleFieldsFieldIdResponse,
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
        PutCompanyPeopleFieldsFieldIdResponse
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
