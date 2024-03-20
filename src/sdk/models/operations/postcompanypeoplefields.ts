/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type PostCompanyPeopleFieldsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The new field was successfully created. The ID of the field is returned.
     */
    fieldId?: shared.FieldId | undefined;
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
export namespace PostCompanyPeopleFieldsResponse$ {
    export type Inbound = {
        ContentType: string;
        FieldId?: shared.FieldId$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PostCompanyPeopleFieldsResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                FieldId: shared.FieldId$.inboundSchema.optional(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    ...(v.FieldId === undefined ? null : { fieldId: v.FieldId }),
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        ContentType: string;
        FieldId?: shared.FieldId$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostCompanyPeopleFieldsResponse
    > = z
        .object({
            contentType: z.string(),
            fieldId: shared.FieldId$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.fieldId === undefined ? null : { FieldId: v.fieldId }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
