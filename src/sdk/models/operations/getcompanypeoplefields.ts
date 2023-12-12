/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetCompanyPeopleFieldsSecurity = {
    basic?: shared.SchemeBasic | undefined;
    bearer?: string | undefined;
};

export type GetCompanyPeopleFieldsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Successful response.
     */
    fields?: Array<shared.Field> | undefined;
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
export namespace GetCompanyPeopleFieldsResponse$ {
    export type Inbound = {
        ContentType: string;
        Fields?: Array<shared.Field$.Inbound> | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetCompanyPeopleFieldsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Fields: z.array(shared.Field$.inboundSchema).optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Fields === undefined ? null : { fields: v.Fields }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Fields?: Array<shared.Field$.Outbound> | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCompanyPeopleFieldsResponse> =
        z
            .object({
                contentType: z.string(),
                fields: z.array(shared.Field$.outboundSchema).optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    ...(v.fields === undefined ? null : { Fields: v.fields }),
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
