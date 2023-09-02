/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TimeoffChange } from "./timeoffchange";
import { Expose, Type } from "class-transformer";

/**
 * List of changes
 */
export class TimeoffChanges extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: TimeoffChange })
    @Expose({ name: "changes" })
    @Type(() => TimeoffChange)
    changes?: TimeoffChange[];
}