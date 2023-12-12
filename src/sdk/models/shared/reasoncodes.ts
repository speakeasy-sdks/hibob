/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ReasonCode, ReasonCode$ } from "./reasoncode";
import { z } from "zod";

export type ReasonCodes = {
    reasonCodes?: Array<ReasonCode> | undefined;
};

/** @internal */
export namespace ReasonCodes$ {
    export type Inbound = {
        reasonCodes?: Array<ReasonCode$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<ReasonCodes, z.ZodTypeDef, Inbound> = z
        .object({
            reasonCodes: z.array(ReasonCode$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.reasonCodes === undefined ? null : { reasonCodes: v.reasonCodes }),
            };
        });

    export type Outbound = {
        reasonCodes?: Array<ReasonCode$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReasonCodes> = z
        .object({
            reasonCodes: z.array(ReasonCode$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.reasonCodes === undefined ? null : { reasonCodes: v.reasonCodes }),
            };
        });
}
